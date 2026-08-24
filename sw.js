const CACHE_NAME = 'timetable-v18.3';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './favicon.svg',
    './icon-maskable.svg',
    './icon-192.png',
    './icon-512.png',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// Install Event - Cache Files & Skip Waiting
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
            .catch((err) => console.error('Cache install error:', err))
    );
});

// Activate Event - Clean old caches & Claim Clients
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then((keys) => {
                return Promise.all(
                    keys.map((key) => {
                        if (key !== CACHE_NAME) return caches.delete(key);
                    })
                );
            })
        ])
    );
});

// Fetch Event - Stale-While-Revalidate Strategy when online
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    // For HTML navigation requests, check network first to immediately catch new versions
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
                }
                return networkResponse;
            }).catch(() => caches.match(event.request) || caches.match('./index.html'))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
                }
                return networkResponse;
            }).catch(() => cachedResponse);

            return cachedResponse || fetchPromise;
        })
    );
});

// ==========================================
// Service Worker Notification Handlers & Background Sync
// ==========================================

// ==========================================
// IndexedDB & Local Storage Fallback for Closed App Background Alerts
// ==========================================

function getScheduleFromIDB() {
    return new Promise((resolve) => {
        try {
            const req = indexedDB.open('TimetableAppDB', 1);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings');
                }
            };
            req.onsuccess = (e) => {
                const db = e.target.result;
                const tx = db.transaction('settings', 'readonly');
                const store = tx.objectStore('settings');
                const getReq = store.get('timetableState');
                getReq.onsuccess = () => resolve(getReq.result || null);
                getReq.onerror = () => resolve(null);
            };
            req.onerror = () => resolve(null);
        } catch (e) {
            resolve(null);
        }
    });
}

function saveScheduleToIDB(data) {
    try {
        const req = indexedDB.open('TimetableAppDB', 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('settings')) {
                db.createObjectStore('settings');
            }
        };
        req.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction('settings', 'readwrite');
            const store = tx.objectStore('settings');
            store.put(data, 'timetableState');
        };
    } catch (e) {
        console.warn('IDB write failed:', e);
    }
}

let swTimetable = [];
let swNotifyOffset = 5;
let swNotifySound = true;
let swAlertedKeys = new Set();

// Handle messages from main page script
self.addEventListener('message', (event) => {
    if (!event.data) return;

    if (event.data.type === 'SYNC_SCHEDULE') {
        swTimetable = event.data.timetable || [];
        swNotifyOffset = event.data.notifyOffset || 5;
        swNotifySound = event.data.notifySound !== false;
        if (event.data.alertedKeys && Array.isArray(event.data.alertedKeys)) {
            event.data.alertedKeys.forEach(k => swAlertedKeys.add(k));
        }

        // Save state persistently so SW can restore when app is completely closed
        saveScheduleToIDB({
            timetable: swTimetable,
            notifyOffset: swNotifyOffset,
            notifySound: swNotifySound,
            alertedKeys: Array.from(swAlertedKeys)
        });

        checkBackgroundSchedule();
    } else if (event.data.type === 'TRIGGER_NOTIFICATION') {
        const { title, options } = event.data;
        const notificationOptions = Object.assign({
            icon: './icon-maskable.svg',
            badge: './favicon.svg',
            vibrate: swNotifySound ? [200, 100, 200, 100, 200] : [],
            requireInteraction: true,
            renotify: true,
            data: { url: './' }
        }, options || {});

        self.registration.showNotification(title, notificationOptions);
    }
});

// Notification Click Event - Focus or Open Window
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    const targetUrl = (event.notification.data && event.notification.data.url) || './';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if (client.url.includes(self.registration.scope) && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});

// Periodic background check timer within active Service Worker lifecycle
async function checkBackgroundSchedule() {
    if (!swTimetable || swTimetable.length === 0) {
        const cached = await getScheduleFromIDB();
        if (cached && cached.timetable) {
            swTimetable = cached.timetable;
            swNotifyOffset = cached.notifyOffset || 5;
            swNotifySound = cached.notifySound !== false;
            if (cached.alertedKeys) {
                cached.alertedKeys.forEach(k => swAlertedKeys.add(k));
            }
        }
    }

    if (!swTimetable || swTimetable.length === 0) return;

    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentHour = now.getHours();
    const currentTimeMins = currentHour * 60 + now.getMinutes();

    // Active operational window: 7:00 AM (420 mins) to 6:00 PM (1080 mins)
    if (currentTimeMins < 420 || currentTimeMins > 1080) return;

    const todayData = swTimetable.find(d => d.day === currentDay);
    if (!todayData || !todayData.classes) return;

    todayData.classes.forEach(cls => {
        const [startStr, endStr] = cls.time.split('-');
        const [startH, startM] = startStr.split(':').map(Number);
        const startTimeMins = startH * 60 + startM;
        const diffMins = startTimeMins - currentTimeMins;

        const classKey = `${cls.code}_${currentDay}_${cls.time}_${now.toDateString()}`;

        if (diffMins > 0 && diffMins <= swNotifyOffset && !swAlertedKeys.has(classKey)) {
            swAlertedKeys.add(classKey);
            
            // Persist alerted key
            saveScheduleToIDB({
                timetable: swTimetable,
                notifyOffset: swNotifyOffset,
                notifySound: swNotifySound,
                alertedKeys: Array.from(swAlertedKeys)
            });

            self.registration.showNotification(`Class starting in ${diffMins} minute${diffMins > 1 ? 's' : ''}! ⏰`, {
                body: `${cls.code} • ${cls.name}\n📍 ${cls.location}\n👤 ${cls.instructor}`,
                icon: './icon-maskable.svg',
                badge: './favicon.svg',
                tag: `class-alert-${cls.code}`,
                vibrate: swNotifySound ? [300, 100, 300] : [],
                requireInteraction: true,
                renotify: true,
                data: { url: './' }
            });
        }
    });
}

// Background sync & periodicsync events if supported by browser
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'check-timetable-schedule') {
        event.waitUntil(checkBackgroundSchedule());
    }
});

self.addEventListener('sync', (event) => {
    if (event.tag === 'timetable-sync') {
        event.waitUntil(checkBackgroundSchedule());
    }
});

// Fallback interval check while worker is alive in background
setInterval(checkBackgroundSchedule, 25000);

