// Timetable Data
const timetable = [
    {
        day: 'monday',
        classes: [
            {
                code: 'CSN206',
                name: 'Design and Analysis of Algorithms',
                type: 'Lecture-1',
                time: '10:00-10:50',
                location: 'VED4F 402 LH 1',
                instructor: 'Shreya Deoli',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN205',
                name: 'Database Management Systems',
                type: 'Lecture-1',
                time: '11:00-11:50',
                location: 'VED4F 427 LH5',
                instructor: 'Anuj Kumar Yadav',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN204',
                name: 'Operating Systems',
                type: 'Lecture-1',
                time: '13:00-13:50',
                location: 'VED4F 402 LH 1',
                instructor: 'Riya Dhama',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'MAN202',
                name: 'Probability and Statistics',
                type: 'Lecture-1',
                time: '14:00-14:50',
                location: 'VEDSF 226 LH 04',
                instructor: 'Sandeep Sharma',
                bucket: 'Core Maths',
                credits: 4
            }
        ]
    },
    {
        day: 'tuesday',
        classes: [
            {
                code: 'MAN202',
                name: 'Probability and Statistics',
                type: 'Lecture-2',
                time: '09:00-09:50',
                location: 'VEDSF 226 LH 04',
                instructor: 'Sandeep Sharma',
                bucket: 'Core Maths',
                credits: 4
            },
            {
                code: 'CSN205',
                name: 'Database Management Systems',
                type: 'Lecture-2',
                time: '13:00-13:50',
                location: 'VEDSF 226 LH 04',
                instructor: 'Anuj Kumar Yadav',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN206',
                name: 'Design and Analysis of Algorithms',
                type: 'Lecture-2',
                time: '14:00-14:50',
                location: 'VED4F 402 LH 1',
                instructor: 'Shreya Deoli',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN204',
                name: 'Operating Systems',
                type: 'Lecture-2',
                time: '15:00-15:50',
                location: 'VED4F 402 LH 1',
                instructor: 'Riya Dhama',
                bucket: 'Discipline Core',
                credits: 4
            }
        ]
    },
    {
        day: 'wednesday',
        classes: [
            {
                code: 'CSN205',
                name: 'Database Management Systems',
                type: 'Lecture-3',
                time: '10:00-10:50',
                location: 'VEDSF 227 LH 05',
                instructor: 'Anuj Kumar Yadav',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN206',
                name: 'Design and Analysis of Algorithms',
                type: 'Lecture-3',
                time: '11:00-11:50',
                location: 'VED4F 402 LH 1',
                instructor: 'Shreya Deoli',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN204',
                name: 'Operating Systems',
                type: 'Practical-2',
                time: '13:00-14:50',
                location: 'VED5F 505-5 Computer Lab 5',
                instructor: 'Riya Dhama',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'PSYN286',
                name: 'Stress Management',
                type: 'Lecture-1',
                time: '16:00-16:50',
                location: 'VED4F 405 LH7',
                instructor: 'Anju Dangwal',
                bucket: 'Humanities Electives',
                credits: 3
            }
        ]
    },
    {
        day: 'thursday',
        classes: [
            {
                code: 'MAN202',
                name: 'Probability and Statistics',
                type: 'Lecture-3',
                time: '09:00-09:50',
                location: 'VEDSF 226 LH 04',
                instructor: 'Sandeep Sharma',
                bucket: 'Core Maths',
                credits: 4
            },
            {
                code: 'CSN206',
                name: 'Design and Analysis of Algorithms',
                type: 'Practical-2',
                time: '10:00-11:50',
                location: 'VED5F 508 Computer Lab 4',
                instructor: 'Shreya Deoli',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'CSN205',
                name: 'Database Management Systems',
                type: 'Practical-2',
                time: '13:00-14:50',
                location: 'VEDSF 223-A Computer Lab',
                instructor: 'Anuj Kumar Yadav',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'PSYN286',
                name: 'Stress Management',
                type: 'Lecture-2',
                time: '16:00-16:50',
                location: 'VED4F 405 LH7',
                instructor: 'Anju Dangwal',
                bucket: 'Humanities Electives',
                credits: 3
            }
        ]
    },
    {
        day: 'friday',
        classes: [
            {
                code: 'MAN202',
                name: 'Probability and Statistics',
                type: 'Lecture-4',
                time: '10:00-10:50',
                location: 'VEDSF 226 LH 04',
                instructor: 'Sandeep Sharma',
                bucket: 'Core Maths',
                credits: 4
            },
            {
                code: 'CSN204',
                name: 'Operating Systems',
                type: 'Lecture-3',
                time: '11:00-11:50',
                location: 'VED4F 402 LH 1',
                instructor: 'Riya Dhama',
                bucket: 'Discipline Core',
                credits: 4
            },
            {
                code: 'PSYN286',
                name: 'Stress Management',
                type: 'Lecture-3',
                time: '16:00-16:50',
                location: 'VED4F 405 LH7',
                instructor: 'Anju Dangwal',
                bucket: 'Humanities Electives',
                credits: 3
            }
        ]
    }
];

// Global state
let notificationsEnabled = false;
let currentClass = null;
let nextClass = null;
let timerInterval = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
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
    setupNotificationButton();

    // Update every second
    setInterval(updateCurrentClass, 1000);

    // Check for notifications every minute
    setInterval(checkUpcomingClass, 60000);
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



// Setup notification button
function setupNotificationButton() {
    const btn = document.getElementById('enableNotifications');

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            alert('This browser does not support notifications');
            return;
        }

        if (Notification.permission === 'granted') {
            notificationsEnabled = !notificationsEnabled;
            updateNotificationButton();
            if (notificationsEnabled) {
                new Notification('Notifications Enabled', {
                    body: 'You will receive notifications for upcoming classes',
                    icon: '📚'
                });
            }
        } else if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                notificationsEnabled = true;
                updateNotificationButton();
                new Notification('Notifications Enabled', {
                    body: 'You will receive notifications for upcoming classes',
                    icon: '📚'
                });
            }
        }
    });

    updateNotificationButton();
}

// Update notification button
function updateNotificationButton() {
    const btn = document.getElementById('enableNotifications');
    if (notificationsEnabled) {
        btn.classList.add('enabled');
        btn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span>Notifications On</span>
        `;
    } else {
        btn.classList.remove('enabled');
        btn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span>Enable Notifications</span>
        `;
    }
}


// Notification State
let lastNotified = { code: null, type: null };

// Check for upcoming class
function checkUpcomingClass() {
    if (!notificationsEnabled || !nextClass) return;

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const [startTime] = parseTimeRange(nextClass.time);
    const minutesUntil = startTime - currentTime;

    // Reset state if class changed
    if (lastNotified.code !== nextClass.code) {
        lastNotified = { code: nextClass.code, type: null };
    }

    // Notify 10 minutes before class (Window: 9-11 mins to be safe)
    if (minutesUntil <= 10 && minutesUntil > 5 && lastNotified.type !== '10m') {
        new Notification(`Class Starting Soon! 🔔`, {
            body: `${nextClass.name} starts in ${minutesUntil} minutes at ${nextClass.location}`,
            icon: 'https://cdn-icons-png.flaticon.com/512/2645/2645897.png', // Generic book icon
            vibrate: [200, 100, 200],
            tag: 'class-reminder-10',
            requireInteraction: true
        });
        lastNotified.type = '10m';
    }

    // Notify 5 minutes before class (Window: 1-5 mins)
    if (minutesUntil <= 5 && minutesUntil > 0 && lastNotified.type !== '5m') {
        new Notification(`Hurry Up! Class in 5m ⏰`, {
            body: `Head to ${nextClass.location} for ${nextClass.code}`,
            icon: 'https://cdn-icons-png.flaticon.com/512/2645/2645897.png',
            vibrate: [500, 200, 500],
            tag: 'class-reminder-5',
            requireInteraction: true
        });
        lastNotified.type = '5m';
    }
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

