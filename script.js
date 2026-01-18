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
    initializeDaySelector();
    renderTimetable('all');
    updateCurrentClass();
    setupNotificationButton();

    // Update every second
    setInterval(updateCurrentClass, 1000);

    // Check for notifications every minute
    setInterval(checkUpcomingClass, 60000);
});

// Initialize day selector
function initializeDaySelector() {
    const dayButtons = document.querySelectorAll('.day-btn');
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

    dayButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            dayButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTimetable(btn.dataset.day);
        });

        // Set today as active by default
        if (btn.dataset.day === today) {
            btn.classList.add('active');
        }
    });

    // If no day is active, activate 'all'
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
        dayGroup.className = 'day-group';

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
}

// Create class card
function createClassCard(classData, day) {
    const card = document.createElement('div');
    card.className = 'class-card';
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
    `;

    return card;
}

// Update current class
function updateCurrentClass() {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    // Find today's schedule
    const todaySchedule = timetable.find(d => d.day === currentDay);

    if (!todaySchedule) {
        displayNoClass();
        return;
    }

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
        highlightCurrentClass(currentDay, foundCurrent.time);
    } else if (foundNext) {
        displayUpcomingClass(foundNext);
        highlightCurrentClass(currentDay, null);
    } else {
        displayNoClass();
        highlightCurrentClass(currentDay, null);
    }

    currentClass = foundCurrent;
    nextClass = foundNext;
}

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
    classTime.textContent = classData.time;
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
    statusText.textContent = 'Upcoming';

    className.textContent = classData.name;
    classTime.textContent = classData.time;
    classLocation.textContent = classData.location;
    classInstructor.textContent = `${classData.instructor} • ${classData.type}`;

    timerSection.style.display = 'block';
    updateTimerForUpcoming(classData.time);

    document.getElementById('nextClassPreview').style.display = 'none';
}

// Display no class
function displayNoClass() {
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
    statusText.textContent = 'No Class';

    className.textContent = 'No ongoing class';
    classTime.textContent = 'Enjoy your free time! 🎉';
    classLocation.textContent = '-';
    classInstructor.textContent = '-';

    timerSection.style.display = 'none';
    document.getElementById('nextClassPreview').style.display = 'none';
}

// Update timer
function updateTimer(timeRange) {
    const now = new Date();
    const [, endTime] = parseTimeRange(timeRange);
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const remainingMinutes = endTime - currentTime;

    // Reset timer label to "Time Remaining" for current class
    const timerLabel = document.querySelector('.timer-label');
    if (timerLabel) {
        timerLabel.textContent = 'Time Remaining';
    }

    if (remainingMinutes <= 0) {
        const timerEl = document.getElementById('timer');
        const progressEl = document.getElementById('progressFill');
        if (timerEl) timerEl.textContent = '00:00:00';
        if (progressEl) progressEl.style.width = '0%';
        return;
    }

    const hours = Math.floor(remainingMinutes / 60);
    const minutes = remainingMinutes % 60;
    const seconds = 60 - now.getSeconds();

    const timerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const timerEl = document.getElementById('timer');
    if (timerEl) {
        timerEl.textContent = timerText;
    }

    // Update progress bar
    const [startTime] = parseTimeRange(timeRange);
    const totalDuration = endTime - startTime;
    const elapsed = currentTime - startTime;
    const progress = (elapsed / totalDuration) * 100;
    const progressEl = document.getElementById('progressFill');
    if (progressEl) {
        progressEl.style.width = `${Math.min(progress, 100)}%`;
    }
}

// Update timer for upcoming class
function updateTimerForUpcoming(timeRange) {
    const now = new Date();
    const [startTime] = parseTimeRange(timeRange);
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const remainingMinutes = startTime - currentTime;

    if (remainingMinutes <= 0) {
        return;
    }

    const hours = Math.floor(remainingMinutes / 60);
    const minutes = remainingMinutes % 60;
    const seconds = 60 - now.getSeconds();

    const timerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const timerEl = document.getElementById('timer');
    const timerLabel = document.querySelector('.timer-label');
    const progressEl = document.getElementById('progressFill');

    if (timerEl) {
        timerEl.textContent = timerText;
    }
    if (timerLabel) {
        timerLabel.textContent = 'Starts In';
    }
    if (progressEl) {
        progressEl.style.width = '0%';
    }
}

// Highlight current class in timetable
function highlightCurrentClass(day, timeRange) {
    document.querySelectorAll('.class-card').forEach(card => {
        card.classList.remove('current');
    });

    if (timeRange) {
        const currentCard = document.querySelector(`.class-card[data-day="${day}"][data-time="${timeRange}"]`);
        if (currentCard) {
            currentCard.classList.add('current');
        }
    }
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
            Notifications On
        `;
    } else {
        btn.classList.remove('enabled');
        btn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Enable Notifications
        `;
    }
}

// Check for upcoming class
function checkUpcomingClass() {
    if (!notificationsEnabled || !nextClass) return;

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const [startTime] = parseTimeRange(nextClass.time);
    const minutesUntil = startTime - currentTime;

    // Notify 10 minutes before class
    if (minutesUntil === 10) {
        new Notification(`Class Starting Soon! 🔔`, {
            body: `${nextClass.name} starts in 10 minutes at ${nextClass.location}`,
            icon: '📚',
            requireInteraction: true
        });
    }

    // Notify 5 minutes before class
    if (minutesUntil === 5) {
        new Notification(`Class Starting in 5 Minutes! ⏰`, {
            body: `${nextClass.name} at ${nextClass.location}`,
            icon: '📚',
            requireInteraction: true
        });
    }
}

// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
