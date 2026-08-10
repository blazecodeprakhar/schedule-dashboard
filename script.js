// Timetable Data
const timetable = [
    {
        day: 'monday',
        classes: [
            {
                code: 'CSN355',
                name: 'Cyber Crime & Investigation',
                type: 'Lecture-1',
                time: '09:00-09:50',
                location: 'Block - VISVESVARAYA VERA5F 503 Lecture Hall 3',
                instructor: 'No Faculty',
                bucket: 'Discipline Elective',
                credits: 3
            },
            {
                code: 'CSN304',
                name: 'Artificial Intelligence',
                type: 'Lecture-1',
                time: '10:00-10:50',
                location: 'Block - VISVESVARAYA VERA5F 503 Lecture Hall 3',
                instructor: 'Neha Singh',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN352',
                name: 'Number Theory and Cryptology',
                type: 'Practical-1',
                time: '11:00-12:50',
                location: 'Block - VEDANTA VED4F 423 Computer Lab 1',
                instructor: 'Kapil Dev Sharma',
                bucket: 'Discipline Elective',
                credits: 3
            },
            {
                code: 'PSYN386',
                name: 'Health Psychology',
                type: 'Studio-1',
                time: '14:00-14:50',
                location: 'Block - VISVESVARAYA VERA4F 408 Lecture Hall 8',
                instructor: 'Mony Singh',
                bucket: 'Free Elective',
                credits: 3
            }
        ]
    },
    {
        day: 'tuesday',
        classes: [
            {
                code: 'CSN302',
                name: 'Advanced Java Programming',
                type: 'Lecture-1',
                time: '09:00-09:50',
                location: 'Block - VEDANTA VEDSF 203 LH 2 Room',
                instructor: 'Kirti Gupta',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN304',
                name: 'Artificial Intelligence',
                type: 'Lecture-2',
                time: '10:00-10:50',
                location: 'Block - VEDANTA VEDSF 203 LH 2 Room',
                instructor: 'Neha Singh',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN302',
                name: 'Advanced Java Programming',
                type: 'Practical-1',
                time: '11:00-12:50',
                location: 'Block - VEDANTA VED4F 424 Computer Lab 2',
                instructor: 'Kirti Gupta',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'PSYN386',
                name: 'Health Psychology',
                type: 'Studio-1',
                time: '14:00-14:50',
                location: 'Block - VISVESVARAYA VERA4F 408 Lecture Hall 8',
                instructor: 'Mony Singh',
                bucket: 'Free Elective',
                credits: 3
            },
            {
                code: 'CSN355',
                name: 'Cyber Crime & Investigation',
                type: 'Practical-1',
                time: '15:00-16:50',
                location: 'Block - VEDANTA VED5F 512 Computer Lab 7',
                instructor: 'No Faculty',
                bucket: 'Discipline Elective',
                credits: 3
            }
        ]
    },
    {
        day: 'wednesday',
        classes: [
            {
                code: 'CSN303',
                name: 'Computer Networks',
                type: 'Practical-1',
                time: '09:00-10:50',
                location: 'Block - VEDANTA VED4F 425 Computer Lab 3',
                instructor: 'Vasu Bhatia',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN352',
                name: 'Number Theory and Cryptology',
                type: 'Lecture-1',
                time: '11:00-11:50',
                location: 'Block - VEDANTA VEDSF 202 LH 1 Room',
                instructor: 'Kapil Dev Sharma',
                bucket: 'Discipline Elective',
                credits: 3
            },
            {
                code: 'CDC201',
                name: 'Aptitude and Soft Skills',
                type: 'Lecture-1',
                time: '12:00-12:50',
                location: 'Block - VEDANTA VEDSF 202 LH 1 Room',
                instructor: 'Parul Kalia',
                bucket: 'Value Added',
                credits: 2
            },
            {
                code: 'CSN303',
                name: 'Computer Networks',
                type: 'Lecture-1',
                time: '15:00-15:50',
                location: 'Block - VEDANTA VEDSF 203 LH 2 Room',
                instructor: 'Vasu Bhatia',
                bucket: 'Discipline Core',
                credits: 4
            }
        ]
    },
    {
        day: 'thursday',
        classes: [
            {
                code: 'CSN302',
                name: 'Advanced Java Programming',
                type: 'Lecture-2',
                time: '09:00-09:50',
                location: 'Block - VEDANTA VEDSF 226 LH 04 Room',
                instructor: 'Kirti Gupta',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN355',
                name: 'Cyber Crime & Investigation',
                type: 'Lecture-2',
                time: '10:00-10:50',
                location: 'Block - VEDANTA VEDTF 303 LH 2 Room',
                instructor: 'No Faculty',
                bucket: 'Discipline Elective',
                credits: 3
            },
            {
                code: 'CSN304',
                name: 'Artificial Intelligence',
                type: 'Practical-1',
                time: '11:00-12:50',
                location: 'Block - VEDANTA VEDSF 226 LH 04 Room',
                instructor: 'Neha Singh',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'PSYN386',
                name: 'Health Psychology',
                type: 'Studio-1',
                time: '14:00-14:50',
                location: 'Block - VISVESVARAYA VERA4F 408 Lecture Hall 8',
                instructor: 'Mony Singh',
                bucket: 'Free Elective',
                credits: 3
            },
            {
                code: 'CSN303',
                name: 'Computer Networks',
                type: 'Lecture-2',
                time: '15:00-15:50',
                location: 'Block - VEDANTA VEDSF 203 LH 2 Room',
                instructor: 'Vasu Bhatia',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN352',
                name: 'Number Theory and Cryptology',
                type: 'Lecture-2',
                time: '16:00-16:50',
                location: 'Block - VEDANTA VED4F 427 LH5',
                instructor: 'Kapil Dev Sharma',
                bucket: 'Discipline Elective',
                credits: 3
            }
        ]
    },
    {
        day: 'friday',
        classes: [
            {
                code: 'CDC201',
                name: 'Aptitude and Soft Skills',
                type: 'Lecture-2',
                time: '09:00-09:50',
                location: 'Block - VISVESVARAYA VERA4F 401 Lecture Hall 1',
                instructor: 'Parul Kalia',
                bucket: 'Value Added',
                credits: 2
            },
            {
                code: 'CSN302',
                name: 'Advanced Java Programming',
                type: 'Lecture-3',
                time: '10:00-10:50',
                location: 'Block - VISVESVARAYA VERA5F 502 Lecture Hall 2',
                instructor: 'Kirti Gupta',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN304',
                name: 'Artificial Intelligence',
                type: 'Lecture-3',
                time: '11:00-11:50',
                location: 'Block - VEDANTA VEDSF 203 LH 2 Room',
                instructor: 'Neha Singh',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN303',
                name: 'Computer Networks',
                type: 'Lecture-3',
                time: '12:00-12:50',
                location: 'Block - VEDANTA VEDSF 203 LH 2 Room',
                instructor: 'Vasu Bhatia',
                bucket: 'Discipline Core',
                credits: 4
            }
        ]
    }
];

// Global state
let currentClass = null;
let nextClass = null;
let timerInterval = null;

// Notification States
let notificationsEnabled = false;
let notifyOffset = 5;
let notifySound = true;
let lockscreenCountdown = true;
let alertedUpcoming = {};
let alertedStarted = {};
let activeNotifications = {};

// Helper to load/save notification alerts
function loadAlertedStates() {
    const todayStr = new Date().toLocaleDateString('en-US');
    const savedDay = localStorage.getItem('alertedDay');
    
    if (savedDay !== todayStr) {
        // Reset for the new day
        alertedUpcoming = {};
        alertedStarted = {};
        localStorage.setItem('alertedDay', todayStr);
        localStorage.setItem('alertedUpcoming', '{}');
        localStorage.setItem('alertedStarted', '{}');
    } else {
        try {
            alertedUpcoming = JSON.parse(localStorage.getItem('alertedUpcoming') || '{}');
            alertedStarted = JSON.parse(localStorage.getItem('alertedStarted') || '{}');
        } catch (e) {
            alertedUpcoming = {};
            alertedStarted = {};
        }
    }
}

function saveAlertedStates() {
    localStorage.setItem('alertedUpcoming', JSON.stringify(alertedUpcoming));
    localStorage.setItem('alertedStarted', JSON.stringify(alertedStarted));
    syncScheduleToSW();
}

let deferredPwaPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    const installBtn = document.getElementById('pwaInstallBtn');
    if (installBtn) {
        installBtn.style.display = 'flex';
        installBtn.onclick = () => {
            if (!deferredPwaPrompt) return;
            deferredPwaPrompt.prompt();
            deferredPwaPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted PWA installation');
                }
                deferredPwaPrompt = null;
                installBtn.style.display = 'none';
            });
        };
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => {
                console.log('Service Worker Registered');
                navigator.serviceWorker.ready.then(() => {
                    syncScheduleToSW();
                });
                
                // Trigger page refresh if update is found and installed
                reg.onupdatefound = () => {
                    const installingWorker = reg.installing;
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                console.log('New update available. Reloading page...');
                                window.location.reload();
                            }
                        }
                    };
                };
            })
            .catch(err => console.log('Service Worker Failed', err));
            
        // Reload page when new service worker claims control
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
                refreshing = true;
                window.location.reload();
            }
        });
    }

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

    initializeDaySelector(today);

    // Check if today has classes, if so render today, else render 'all'
    const hasClassesToday = timetable.some(d => d.day === today);
    const initialView = hasClassesToday ? today : 'all';

    if (initialView === 'all') {
        document.querySelector('.day-btn[data-day="all"]').click(); // Visually update button state
    } else {
        renderTimetable(initialView);
    }

    updateCurrentClass();

    // Use a Web Worker for ticking to prevent background tab throttling
    let workerSupported = false;
    try {
        if (typeof(Worker) !== "undefined") {
            const workerBlob = new Blob([
                `setInterval(() => { self.postMessage('tick'); }, 1000);`
            ], { type: 'application/javascript' });
            const workerUrl = URL.createObjectURL(workerBlob);
            const worker = new Worker(workerUrl);
            worker.onmessage = () => {
                updateCurrentClass();
            };
            workerSupported = true;
            console.log('Web Worker registered for background timing.');
        }
    } catch (e) {
        console.warn('Failed to start Web Worker timer, falling back to setInterval:', e);
    }

    if (!workerSupported) {
        // Fallback to standard setInterval
        setInterval(updateCurrentClass, 1000);
    }

    // Initialize notifications system UI and state
    initNotifications();
});

// Initialize day selector
function initializeDaySelector(today) {
    const dayButtons = document.querySelectorAll('.day-btn');

    dayButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            dayButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTimetable(btn.dataset.day);
        });

        // Set today as active by default if it exists in buttons
        if (btn.dataset.day === today) {
            btn.classList.add('active');
        }
    });

    // If today is Sunday or Saturday (not in list usually), or just no match, 'all' might be needed
    // But we handle the rendering logic in DOMContentLoaded
    if (!document.querySelector('.day-btn.active')) {
        document.querySelector('[data-day="all"]').classList.add('active');
    }
}

// Render timetable
function renderTimetable(selectedDay) {
    const grid = document.getElementById('timetableGrid');
    grid.innerHTML = '';

    const daysToShow = selectedDay === 'all'
        ? timetable
        : timetable.filter(d => d.day === selectedDay);

    daysToShow.forEach(dayData => {
        const dayGroup = document.createElement('div');
        // If viewing single day, don't need the 'day-group' box styling necessarily, 
        // but keeping it for consistency is fine. We can simplify if it's just one day.
        dayGroup.className = 'day-group';

        // Only show header if we are viewing "All" days, otherwise it's redundant with the button?
        // Actually, user might want to know which day it is if they click "Mon". 
        // Let's keep it but maybe style it differently?
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = capitalizeFirst(dayData.day);
        dayGroup.appendChild(dayHeader);

        const classList = document.createElement('div');
        classList.className = 'classes-list';

        dayData.classes.forEach(classData => {
            const classCard = createClassCard(classData, dayData.day);
            classList.appendChild(classCard);
        });

        dayGroup.appendChild(classList);
        grid.appendChild(dayGroup);
    });

    // Immediately update statuses for the newly rendered cards
    updateClassCardStatuses();
}

// Create class card
function createClassCard(classData, day) {
    const card = document.createElement('div');
    card.className = 'class-card'; // Base class
    card.dataset.day = day;
    card.dataset.time = classData.time;

    card.innerHTML = `
        <div class="class-card-header">
            <div class="class-title-area">
                <div class="class-code">${classData.code}</div>
                <div class="class-name">${classData.name}</div>
            </div>
            <div class="class-badge-area">
                <div class="class-type">${classData.type}</div>
                <div class="class-status-badge"></div>
            </div>
        </div>
        <div class="class-card-body">
            <div class="class-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${classData.time}
            </div>
            <div class="class-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${classData.location}
            </div>
            <div class="class-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                ${classData.instructor}
            </div>
        </div>
    `;

    return card;
}

// Update current class
// Update current class
function updateCurrentClass() {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    // Global dashboard updates logic...
    const todaySchedule = timetable.find(d => d.day === currentDay);

    if (!todaySchedule) {
        if (typeof displayNoScheduleToday === 'function') {
            displayNoScheduleToday();
        } else {
            displayNoClass(); // Fallback
        }
    } else {
        // Find current and next class
        let foundCurrent = null;
        let foundNext = null;

        for (let i = 0; i < todaySchedule.classes.length; i++) {
            const classData = todaySchedule.classes[i];
            const [startTime, endTime] = parseTimeRange(classData.time);

            if (currentTime >= startTime && currentTime <= endTime) {
                foundCurrent = classData;
                foundNext = todaySchedule.classes[i + 1] || null;
                break;
            } else if (currentTime < startTime) {
                foundNext = classData;
                break;
            }
        }

        if (foundCurrent) {
            displayCurrentClass(foundCurrent, foundNext);
        } else if (foundNext) {
            displayUpcomingClass(foundNext);
        } else {
            if (typeof displayEndOfDay === 'function') {
                displayEndOfDay();
            } else {
                displayNoClass(); // Fallback
            }
        }

        currentClass = foundCurrent;
        nextClass = foundNext;
    }

    // Check and update class notifications
    checkClassNotifications(currentDay, currentTime, now);

    // Refresh the statuses of the cards in the grid
    updateClassCardStatuses();
}

// New Function: Update statuses for cards in the grid
function updateClassCardStatuses() {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    document.querySelectorAll('.class-card').forEach(card => {
        const cardDay = card.dataset.day;
        const timeRange = card.dataset.time;
        const [startTime, endTime] = parseTimeRange(timeRange);

        // Remove existing status classes
        card.classList.remove('completed', 'current', 'upcoming');
        const badge = card.querySelector('.class-status-badge');
        if (badge) badge.textContent = '';

        if (cardDay !== currentDay) {
            // Not today -> neutral/upcoming style
            return;
        }

        // It is today!
        if (currentTime > endTime) {
            card.classList.add('completed');
            if (badge) badge.textContent = 'Completed';
        } else if (currentTime >= startTime && currentTime <= endTime) {
            card.classList.add('current');
            if (badge) badge.textContent = 'Happening Now';
        } else {
            // If it hasn't started yet
            card.classList.add('upcoming');

            // Calculate time until start
            const minutesUntil = startTime - currentTime;
            if (minutesUntil > 0 && minutesUntil <= 60) {
                if (badge) badge.textContent = `In ${minutesUntil}m`;
            } else {
                if (badge) badge.textContent = 'Upcoming';
            }
        }
    });
}



// Parse time range
// Display current class
function displayCurrentClass(classData, nextClassData) {
    const card = document.getElementById('currentClassCard');
    const statusBadge = document.getElementById('statusBadge');
    const statusText = document.getElementById('statusText');
    const className = document.getElementById('currentClassName');
    const classTime = document.getElementById('currentClassTime');
    const classLocation = document.getElementById('currentClassLocation');
    const classInstructor = document.getElementById('currentClassInstructor');
    const timerSection = document.getElementById('timerSection');

    card.classList.add('active');
    statusBadge.classList.add('active');
    statusText.textContent = 'In Progress';

    className.textContent = classData.name;
    // Show time clearly with a clock icon styled in CSS or text
    classTime.innerHTML = `${classData.time}`;
    classLocation.textContent = classData.location;
    classInstructor.textContent = `${classData.instructor} • ${classData.type}`;

    timerSection.style.display = 'block';
    updateTimer(classData.time);

    // Update next class preview
    if (nextClassData) {
        document.getElementById('nextClassName').textContent = nextClassData.name;
        document.getElementById('nextClassTime').textContent = nextClassData.time;
        document.getElementById('nextClassPreview').style.display = 'flex';
    } else {
        document.getElementById('nextClassPreview').style.display = 'none';
    }
}

// Display upcoming class
function displayUpcomingClass(classData) {
    const card = document.getElementById('currentClassCard');
    const statusBadge = document.getElementById('statusBadge');
    const statusText = document.getElementById('statusText');
    const className = document.getElementById('currentClassName');
    const classTime = document.getElementById('currentClassTime');
    const classLocation = document.getElementById('currentClassLocation');
    const classInstructor = document.getElementById('currentClassInstructor');
    const timerSection = document.getElementById('timerSection');

    card.classList.remove('active');
    statusBadge.classList.remove('active');
    statusText.textContent = 'Up Next';

    className.textContent = classData.name;
    const [startTimeStr] = classData.time.split('-');
    classTime.textContent = `Starts at ${startTimeStr}`;
    classLocation.textContent = classData.location;
    classInstructor.textContent = `${classData.instructor} • ${classData.type}`;

    timerSection.style.display = 'block';
    updateTimerForUpcoming(classData.time);

    document.getElementById('nextClassPreview').style.display = 'none';
}

// Display End of Day (Classes Over)
function displayEndOfDay() {
    const card = document.getElementById('currentClassCard');
    const statusBadge = document.getElementById('statusBadge');
    const statusText = document.getElementById('statusText');
    const className = document.getElementById('currentClassName');
    const classTime = document.getElementById('currentClassTime');
    const classLocation = document.getElementById('currentClassLocation');
    const classInstructor = document.getElementById('currentClassInstructor');
    const timerSection = document.getElementById('timerSection');

    card.classList.remove('active');
    statusBadge.classList.remove('active');
    statusText.textContent = 'Completed';

    className.textContent = 'All Classes Completed';
    classTime.textContent = 'Enjoy your rest of the day! 🎉';
    classLocation.textContent = '-';
    classInstructor.textContent = '-';

    if (timerSection) timerSection.style.display = 'none';
    const nextPreview = document.getElementById('nextClassPreview');
    if (nextPreview) nextPreview.style.display = 'none';
}

// Display No Schedule Today (Weekend/Holiday)
function displayNoScheduleToday() {
    const card = document.getElementById('currentClassCard');
    const statusBadge = document.getElementById('statusBadge');
    const statusText = document.getElementById('statusText');
    const className = document.getElementById('currentClassName');
    const classTime = document.getElementById('currentClassTime');
    const classLocation = document.getElementById('currentClassLocation');
    const classInstructor = document.getElementById('currentClassInstructor');
    const timerSection = document.getElementById('timerSection');

    card.classList.remove('active');
    statusBadge.classList.remove('active');
    statusText.textContent = 'Rest Day';

    className.textContent = 'No Classes Today';
    classTime.textContent = 'Enjoy your day! 😴';
    classLocation.textContent = '-';
    classInstructor.textContent = '-';

    if (timerSection) timerSection.style.display = 'none';
    const nextPreview = document.getElementById('nextClassPreview');
    if (nextPreview) nextPreview.style.display = 'none';
}

// Display no class (Generic fallback)
function displayNoClass() {
    displayNoScheduleToday();
}

// Parse time range
function parseTimeRange(timeRange) {
    const [start, end] = timeRange.split('-');
    const [startHour, startMin] = start.split(':').map(Number);
    const [endHour, endMin] = end.split(':').map(Number);
    return [startHour * 60 + startMin, endHour * 60 + endMin];
}





// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Update timer
function updateTimer(timeRange) {
    const now = new Date();
    // parseTimeRange returns [startMins, endMins]
    const [startMins, endMins] = parseTimeRange(timeRange);

    // Create Date objects for today
    const endDate = new Date();
    endDate.setHours(Math.floor(endMins / 60), endMins % 60, 0, 0);

    const diff = endDate - now;

    if (diff <= 0) {
        const timerEl = document.getElementById('timer');
        const progressEl = document.getElementById('progressFill');
        if (timerEl) timerEl.textContent = '00:00:00';
        if (progressEl) progressEl.style.width = '100%';
        return;
    }

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const timerEl = document.getElementById('timer');
    if (timerEl) {
        timerEl.textContent = timerText;
        timerEl.style.display = 'block';
    }

    // Update progress bar
    const startDate = new Date();
    startDate.setHours(Math.floor(startMins / 60), startMins % 60, 0, 0);

    const totalDuration = endDate - startDate;
    const elapsed = now - startDate;
    const progress = (elapsed / totalDuration) * 100;

    const progressEl = document.getElementById('progressFill');
    if (progressEl) {
        progressEl.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
    }
}

// Update timer for upcoming class
function updateTimerForUpcoming(timeRange) {
    const now = new Date();
    const [startMins] = parseTimeRange(timeRange);

    const startDate = new Date();
    startDate.setHours(Math.floor(startMins / 60), startMins % 60, 0, 0);

    const diff = startDate - now;

    if (diff <= 0) {
        return;
    }

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const timerEl = document.getElementById('timer');
    const timerLabel = document.querySelector('.timer-label');
    const progressEl = document.getElementById('progressFill');

    if (timerEl) {
        timerEl.textContent = timerText;
        timerEl.style.display = 'block';
    }
    if (timerLabel) {
        timerLabel.textContent = 'Starts In';
    }
    if (progressEl) {
        // Logic: Bar fills up as we approach the start time.
        // Waiting Window: 2 hours (120 mins).
        // If > 2 hours, bar is 0%.
        // If 0 mins, bar is 100%.
        const totalWindow = 2 * 60 * 60 * 1000; // 2 hours
        let percentage = 0;

        if (diff < totalWindow) {
            percentage = ((totalWindow - diff) / totalWindow) * 100;
        }

        progressEl.style.width = `${Math.min(Math.max(percentage, 0), 100)}%`;
    }
}

// ==========================================
// Class Notifications Features
// ==========================================

// ==========================================
// Web Audio Synthesizer for Class Alert Chimes
// ==========================================
function playNotificationChime() {
    if (!notifySound) return;
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        const now = ctx.currentTime;

        // Note 1 (D5 - 587.33Hz)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, now);
        gain1.gain.setValueAtTime(0, now);
        gain1.gain.linearRampToValueAtTime(0.15, now + 0.05);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.5);

        // Note 2 (A5 - 880Hz)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(880, now + 0.15);
        gain2.gain.setValueAtTime(0, now + 0.15);
        gain2.gain.linearRampToValueAtTime(0.2, now + 0.2);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.15);
        osc2.stop(now + 0.8);
    } catch (e) {
        console.warn('AudioContext playback error:', e);
    }
}

// Service Worker Sync Helper
function syncScheduleToSW() {
    if ('serviceWorker' in navigator) {
        const payload = {
            type: 'SYNC_SCHEDULE',
            timetable: timetable,
            notifyOffset: notifyOffset,
            notifySound: notifySound,
            alertedKeys: Object.keys(alertedUpcoming).concat(Object.keys(alertedStarted))
        };

        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage(payload);
        } else {
            navigator.serviceWorker.ready.then(reg => {
                if (reg.active) {
                    reg.active.postMessage(payload);
                }
            });
        }
    }
}

// ==========================================
// Class Notifications System Setup & Handlers
// ==========================================

function initNotifications() {
    const isSupported = 'Notification' in window;
    const badge = document.getElementById('notificationStatusBadge');
    const statusText = document.getElementById('notificationStatusText');
    const enableBtn = document.getElementById('enableNotificationsBtn');
    const settingsGroup = document.getElementById('notificationSettingsGroup');
    const testSoundBtn = document.getElementById('testSoundBtn');

    if (!isSupported) {
        if (badge) badge.className = 'notification-status-badge unsupported';
        if (statusText) statusText.textContent = 'Unsupported';
        if (enableBtn) {
            enableBtn.textContent = 'Notifications Not Supported';
            enableBtn.disabled = true;
        }
        return;
    }

    // Load saved settings
    notificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
    notifyOffset = parseInt(localStorage.getItem('notifyOffset') || '5', 10);
    notifySound = localStorage.getItem('notifySound') !== 'false';
    lockscreenCountdown = localStorage.getItem('lockscreenCountdown') !== 'false';

    // Load alerted states
    loadAlertedStates();

    // Sync UI elements
    const offsetEl = document.getElementById('notificationOffset');
    const soundEl = document.getElementById('notificationSound');
    const countdownEl = document.getElementById('notificationCountdown');

    if (offsetEl) offsetEl.value = notifyOffset;
    if (soundEl) soundEl.checked = notifySound;
    if (countdownEl) countdownEl.checked = lockscreenCountdown;

    // Check permission
    if (Notification.permission === 'granted' && notificationsEnabled) {
        updateNotificationsUI(true);
        syncScheduleToSW();
    } else if (Notification.permission === 'denied') {
        updateNotificationsUI(false, 'Blocked');
    } else {
        updateNotificationsUI(false);
    }

    // Enable Notifications Button
    if (enableBtn) {
        enableBtn.addEventListener('click', () => {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    notificationsEnabled = true;
                    localStorage.setItem('notificationsEnabled', 'true');
                    updateNotificationsUI(true);
                    syncScheduleToSW();
                    playNotificationChime();

                    showAppNotification('Class Alerts Active! 🎉', {
                        body: `You will get class notifications ${notifyOffset}m before start time.`,
                        icon: './icon-192.png',
                        badge: './favicon.svg',
                        tag: 'welcome-alert'
                    });
                } else if (permission === 'denied') {
                    updateNotificationsUI(false, 'Blocked');
                }
            });
        });
    }

    // Settings changes
    if (offsetEl) {
        offsetEl.addEventListener('change', (e) => {
            notifyOffset = parseInt(e.target.value, 10);
            localStorage.setItem('notifyOffset', notifyOffset);
            syncScheduleToSW();
        });
    }

    if (soundEl) {
        soundEl.addEventListener('change', (e) => {
            notifySound = e.target.checked;
            localStorage.setItem('notifySound', notifySound);
            syncScheduleToSW();
        });
    }

    if (countdownEl) {
        countdownEl.addEventListener('change', (e) => {
            lockscreenCountdown = e.target.checked;
            localStorage.setItem('lockscreenCountdown', lockscreenCountdown);
        });
    }

    // Sound Test Button
    if (testSoundBtn) {
        testSoundBtn.addEventListener('click', () => {
            playNotificationChime();
        });
    }

    // Send Test Notification Button
    const testNotifBtn = document.getElementById('testNotificationBtn');
    if (testNotifBtn) {
        testNotifBtn.addEventListener('click', runTestNotification);
    }
}

function updateNotificationsUI(enabled, customStatus) {
    const badge = document.getElementById('notificationStatusBadge');
    const statusText = document.getElementById('notificationStatusText');
    const enableBtn = document.getElementById('enableNotificationsBtn');
    const settingsGroup = document.getElementById('notificationSettingsGroup');

    if (enabled) {
        if (badge) badge.className = 'notification-status-badge enabled';
        if (statusText) statusText.textContent = 'Active';
        if (enableBtn) enableBtn.style.display = 'none';
        if (settingsGroup) settingsGroup.style.display = 'flex';
    } else {
        if (badge) badge.className = 'notification-status-badge';
        if (statusText) statusText.textContent = customStatus || 'Disabled';
        if (enableBtn) {
            enableBtn.style.display = 'block';
            if (customStatus === 'Blocked') {
                enableBtn.textContent = 'Permission Blocked';
                enableBtn.disabled = true;
            }
        }
        if (settingsGroup) settingsGroup.style.display = 'none';
    }
}

function checkClassNotifications(day, currentTime, now) {
    if (!notificationsEnabled) return;

    const todaySchedule = timetable.find(d => d.day === day);
    if (!todaySchedule) return;

    const todayStr = now ? now.toDateString() : new Date().toDateString();

    todaySchedule.classes.forEach(classData => {
        const [startTime, endTime] = parseTimeRange(classData.time);
        const timeDiffInMinutes = startTime - currentTime;
        const classKey = `${classData.code}_${day}_${classData.time}_${todayStr}`;

        // 1. Primary Milestone Alert (e.g. 5 minutes before start)
        if (timeDiffInMinutes > 0 && timeDiffInMinutes <= notifyOffset) {
            if (!alertedUpcoming[classKey]) {
                alertedUpcoming[classKey] = true;
                saveAlertedStates();
                sendMilestoneNotification(classData, timeDiffInMinutes);
            }
        }

        // 2. Final 1-Minute Warning Alert
        const oneMinKey = `${classKey}_1m`;
        if (timeDiffInMinutes === 1 && !alertedUpcoming[oneMinKey]) {
            alertedUpcoming[oneMinKey] = true;
            saveAlertedStates();
            sendMilestoneNotification(classData, 1);
        }

        // 3. Class Started Alert
        if (currentTime >= startTime && currentTime < endTime) {
            if (!alertedStarted[classKey]) {
                alertedStarted[classKey] = true;
                saveAlertedStates();

                playNotificationChime();
                const title = `Class Started!`;
                const body = `${classData.code} • ${classData.name} has started in ${classData.location}.`;
                
                showAppNotification(title, {
                    body: body,
                    icon: './icon-192.png',
                    badge: './favicon.svg',
                    tag: `class-started-${classData.code}`,
                    vibrate: notifySound ? [300, 100, 300] : []
                });
            }
        }
    });
}

function sendMilestoneNotification(classData, mins) {
    playNotificationChime();
    const title = `Class starting in ${mins} minute${mins > 1 ? 's' : ''}! ⏰`;
    const body = `${classData.code} • ${classData.name}\n📍 ${classData.location}\n👤 ${classData.instructor}`;

    showAppNotification(title, {
        body: body,
        icon: './icon-192.png',
        badge: './favicon.svg',
        tag: `class-alert-${classData.code}`,
        vibrate: notifySound ? [200, 100, 200] : []
    });
}

function showAppNotification(title, options) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    const notifOptions = Object.assign({
        icon: './icon-192.png',
        badge: './favicon.svg',
        vibrate: notifySound ? [200, 100, 200] : [],
        requireInteraction: true,
        renotify: true,
        data: { url: './' }
    }, options || {});

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
            return reg.showNotification(title, notifOptions);
        }).catch(err => {
            console.warn('SW showNotification error:', err);
            try {
                new Notification(title, notifOptions);
            } catch (e) {
                console.error('Direct Notification failed:', e);
            }
        });
    } else {
        try {
            new Notification(title, notifOptions);
        } catch (e) {
            console.error('Direct Notification failed:', e);
        }
    }
}

function runTestNotification() {
    const testBtn = document.getElementById('testNotificationBtn');
    if (!testBtn) return;
    
    testBtn.disabled = true;
    testBtn.innerHTML = `Sending Test Alert...`;

    playNotificationChime();

    const title = "Test Class Alert 🔔";
    const body = "CSN304 • Artificial Intelligence starting in 5 mins!\n📍 Block - VEDANTA\n👤 Neha Singh";

    showAppNotification(title, {
        body: body,
        icon: './icon-192.png',
        badge: './favicon.svg',
        tag: 'test-alert',
        vibrate: notifySound ? [200, 100, 200] : []
    });

    setTimeout(() => {
        testBtn.disabled = false;
        testBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Send Test Alert
        `;
    }, 1500);
}


