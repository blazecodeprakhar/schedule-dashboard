const CACHE_NAME = 'timetable-v7';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './favicon.svg',
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

// Fetch Event - Cache First Strategy with Dynamic Caching
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request).then((networkResponse) => {
                    if (!networkResponse || networkResponse.status !== 200 || (networkResponse.type !== 'basic' && networkResponse.type !== 'cors')) {
                        return networkResponse;
                    }

                    const responseToCache = networkResponse.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                    return networkResponse;
                }).catch(() => {
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

// ==========================================
// Service Worker Notification Handlers & Background Sync
// ==========================================

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
        checkBackgroundSchedule();
    } else if (event.data.type === 'TRIGGER_NOTIFICATION') {
        const { title, options } = event.data;
        const notificationOptions = Object.assign({
            icon: './icon-192.png',
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
function checkBackgroundSchedule() {
    if (!swTimetable || swTimetable.length === 0) return;

    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTimeMins = now.getHours() * 60 + now.getMinutes();

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
            self.registration.showNotification(`Class starting in ${diffMins} minute${diffMins > 1 ? 's' : ''}! ⏰`, {
                body: `${cls.code} • ${cls.name}\n📍 ${cls.location}\n👤 ${cls.instructor}`,
                icon: './icon-192.png',
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

// Fallback interval check while worker is alive
setInterval(checkBackgroundSchedule, 30000);

