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
let alertedClasses = {};
let activeNotifications = {};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Failed', err));
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

    // Update every second
    setInterval(updateCurrentClass, 1000);

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
            <div>
                <div class="class-code">${classData.code}</div>
                <div class="class-name">${classData.name}</div>
            </div>
            <div class="class-type">${classData.type}</div>
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
        <div class="class-status-badge"></div> <!-- For Completed/Now/Up Next text -->
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

function initNotifications() {
    const isSupported = 'Notification' in window && 'serviceWorker' in navigator;
    const badge = document.getElementById('notificationStatusBadge');
    const statusText = document.getElementById('notificationStatusText');
    const enableBtn = document.getElementById('enableNotificationsBtn');
    const settingsGroup = document.getElementById('notificationSettingsGroup');

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

    // Set UI elements based on saved settings
    document.getElementById('notificationOffset').value = notifyOffset;
    document.getElementById('notificationSound').checked = notifySound;
    document.getElementById('notificationCountdown').checked = lockscreenCountdown;

    // Check permission
    if (Notification.permission === 'granted' && notificationsEnabled) {
        updateNotificationsUI(true);
    } else if (Notification.permission === 'denied') {
        updateNotificationsUI(false, 'Blocked');
    } else {
        updateNotificationsUI(false);
    }

    // Event listeners
    enableBtn.addEventListener('click', () => {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                notificationsEnabled = true;
                localStorage.setItem('notificationsEnabled', 'true');
                updateNotificationsUI(true);
                showAppNotification('Alerts Activated!', {
                    body: `You will get real-time class alerts ${notifyOffset}m before start time.`,
                    icon: './favicon.svg',
                    badge: './favicon.svg',
                    tag: 'welcome-alert'
                });
            } else if (permission === 'denied') {
                updateNotificationsUI(false, 'Blocked');
            }
        });
    });

    document.getElementById('notificationOffset').addEventListener('change', (e) => {
        notifyOffset = parseInt(e.target.value, 10);
        localStorage.setItem('notifyOffset', notifyOffset);
    });

    document.getElementById('notificationSound').addEventListener('change', (e) => {
        notifySound = e.target.checked;
        localStorage.setItem('notifySound', notifySound);
    });

    document.getElementById('notificationCountdown').addEventListener('change', (e) => {
        lockscreenCountdown = e.target.checked;
        localStorage.setItem('lockscreenCountdown', lockscreenCountdown);
    });

    document.getElementById('testNotificationBtn').addEventListener('click', runTestNotification);
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

    todaySchedule.classes.forEach(classData => {
        const [startTime] = parseTimeRange(classData.time);
        const timeDiffInMinutes = startTime - currentTime;

        // Trigger alert only in the offset window (e.g. 5 minutes before start)
        if (timeDiffInMinutes > 0 && timeDiffInMinutes <= notifyOffset) {
            const classKey = `${classData.code}_${day}_${classData.time}`;
            
            if (!alertedClasses[classKey]) {
                alertedClasses[classKey] = true;
                
                if (lockscreenCountdown) {
                    startLockscreenCountdown(classData, startTime, classKey);
                } else {
                    sendStaticNotification(classData, timeDiffInMinutes);
                }
            }
        }
    });
}

function sendStaticNotification(classData, mins) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    const title = `Class starting in ${mins}m`;
    const options = {
        body: `${classData.code} • ${classData.name}\n📍 ${classData.location}\n👤 ${classData.instructor}`,
        icon: './favicon.svg',
        badge: './favicon.svg',
        tag: 'class-alert',
        silent: !notifySound,
        vibrate: notifySound ? [200, 100, 200] : []
    };

    showAppNotification(title, options);
}

function startLockscreenCountdown(classData, startMins, classKey) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    if (activeNotifications[classKey]) {
        clearInterval(activeNotifications[classKey]);
    }

    let isFirstTick = true;

    const interval = setInterval(() => {
        const now = new Date();
        const targetDate = new Date();
        targetDate.setHours(Math.floor(startMins / 60), startMins % 60, 0, 0);

        const diffMs = targetDate - now;
        const totalSecs = Math.floor(diffMs / 1000);

        if (totalSecs <= 0) {
            const title = `Class Started!`;
            const options = {
                body: `${classData.code} • ${classData.name} has started in ${classData.location}.`,
                icon: './favicon.svg',
                badge: './favicon.svg',
                tag: 'class-alert',
                silent: !notifySound,
                vibrate: notifySound ? [300, 100, 300] : []
            };
            
            showAppNotification(title, options);
            clearInterval(interval);
            delete activeNotifications[classKey];
            return;
        }

        const m = Math.floor(totalSecs / 60);
        const s = totalSecs % 60;
        const formattedTime = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        const title = `Starts in ${formattedTime}`;
        const options = {
            body: `${classData.code} • ${classData.name}\n📍 ${classData.location}\n👤 ${classData.instructor}`,
            icon: './favicon.svg',
            badge: './favicon.svg',
            tag: 'class-alert',
            silent: isFirstTick ? !notifySound : true, // Only notify audibly on first tick
            renotify: false,
            vibrate: (isFirstTick && notifySound) ? [200, 100, 200] : []
        };

        showAppNotification(title, options);
        isFirstTick = false;
    }, 1000);

    activeNotifications[classKey] = interval;
}

function showAppNotification(title, options) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, options);
        }).catch(() => {
            new Notification(title, options);
        });
    } else {
        new Notification(title, options);
    }
}

function runTestNotification() {
    const testBtn = document.getElementById('testNotificationBtn');
    if (!testBtn) return;
    
    testBtn.disabled = true;
    testBtn.innerHTML = `Running simulation...`;

    let secs = 5;
    let isFirstTick = true;

    const interval = setInterval(() => {
        if (secs <= 0) {
            clearInterval(interval);
            const title = "Test Class Started!";
            const options = {
                body: "Artificial Intelligence (CSN304) has started. Alerts are active! 🎉",
                icon: './favicon.svg',
                badge: './favicon.svg',
                tag: 'test-countdown',
                silent: !notifySound,
                vibrate: notifySound ? [300, 100, 300] : []
            };
            showAppNotification(title, options);
            testBtn.disabled = false;
            testBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Send Test Alert (5s)
            `;
            return;
        }

        const title = `Starts in 00:0${secs}`;
        const options = {
            body: "CSN304 • Artificial Intelligence\n📍 Block - VISVESVARAYA\n👤 Neha Singh",
            icon: './favicon.svg',
            badge: './favicon.svg',
            tag: 'test-countdown',
            silent: isFirstTick ? !notifySound : true,
            renotify: false,
            vibrate: (isFirstTick && notifySound) ? [200, 100, 200] : []
        };

        showAppNotification(title, options);
        isFirstTick = false;
        secs--;
    }, 1000);
}

