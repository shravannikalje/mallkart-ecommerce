// ===== Timezone Database =====
const timezoneDatabase = [
    // UTC
    { name: 'UTC', timezone: 'UTC', offset: 0 },
    
    // Asia
    { name: 'India (IST)', timezone: 'Asia/Kolkata', offset: 5.5 },
    { name: 'Japan (JST)', timezone: 'Asia/Tokyo', offset: 9 },
    { name: 'China (CST)', timezone: 'Asia/Shanghai', offset: 8 },
    { name: 'Singapore (SGT)', timezone: 'Asia/Singapore', offset: 8 },
    { name: 'Hong Kong (HKT)', timezone: 'Asia/Hong_Kong', offset: 8 },
    { name: 'Thailand (ICT)', timezone: 'Asia/Bangkok', offset: 7 },
    { name: 'Dubai (GST)', timezone: 'Asia/Dubai', offset: 4 },
    { name: 'Pakistan (PKT)', timezone: 'Asia/Karachi', offset: 5 },
    { name: 'Bangladesh (BST)', timezone: 'Asia/Dhaka', offset: 6 },
    { name: 'Malaysia (MYT)', timezone: 'Asia/Kuala_Lumpur', offset: 8 },
    { name: 'Indonesia (WIB)', timezone: 'Asia/Jakarta', offset: 7 },
    { name: 'Philippines (PHT)', timezone: 'Asia/Manila', offset: 8 },
    { name: 'Vietnam (ICT)', timezone: 'Asia/Ho_Chi_Minh', offset: 7 },
    { name: 'South Korea (KST)', timezone: 'Asia/Seoul', offset: 9 },
    
    // Australia
    { name: 'Sydney (AEDT)', timezone: 'Australia/Sydney', offset: 11 },
    { name: 'Melbourne (AEDT)', timezone: 'Australia/Melbourne', offset: 11 },
    { name: 'Brisbane (AEST)', timezone: 'Australia/Brisbane', offset: 10 },
    { name: 'Perth (AWST)', timezone: 'Australia/Perth', offset: 8 },
    
    // Europe
    { name: 'London (GMT)', timezone: 'Europe/London', offset: 0 },
    { name: 'Paris (CET)', timezone: 'Europe/Paris', offset: 1 },
    { name: 'Germany (CET)', timezone: 'Europe/Berlin', offset: 1 },
    { name: 'Russia (MSK)', timezone: 'Europe/Moscow', offset: 3 },
    { name: 'Spain (CET)', timezone: 'Europe/Madrid', offset: 1 },
    { name: 'Italy (CET)', timezone: 'Europe/Rome', offset: 1 },
    { name: 'Greece (EET)', timezone: 'Europe/Athens', offset: 2 },
    { name: 'Istanbul (EET)', timezone: 'Europe/Istanbul', offset: 3 },
    
    // Americas
    { name: 'New York (EST)', timezone: 'America/New_York', offset: -5 },
    { name: 'Los Angeles (PST)', timezone: 'America/Los_Angeles', offset: -8 },
    { name: 'Chicago (CST)', timezone: 'America/Chicago', offset: -6 },
    { name: 'Denver (MST)', timezone: 'America/Denver', offset: -7 },
    { name: 'Toronto (EST)', timezone: 'America/Toronto', offset: -5 },
    { name: 'Mexico City (CST)', timezone: 'America/Mexico_City', offset: -6 },
    { name: 'Sao Paulo (BRT)', timezone: 'America/Sao_Paulo', offset: -3 },
    { name: 'Buenos Aires (ART)', timezone: 'America/Argentina/Buenos_Aires', offset: -3 },
    
    // Africa
    { name: 'Cairo (EET)', timezone: 'Africa/Cairo', offset: 2 },
    { name: 'Johannesburg (SAST)', timezone: 'Africa/Johannesburg', offset: 2 },
    { name: 'Lagos (WAT)', timezone: 'Africa/Lagos', offset: 1 },
    { name: 'Nairobi (EAT)', timezone: 'Africa/Nairobi', offset: 3 },
];

// ===== Global Variables =====
let selectedTimezones = ['Asia/Kolkata', 'America/New_York', 'Europe/London', 'Australia/Sydney'];
let timeFormat = 12;
let updateInterval;

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateTime();
    updateInterval = setInterval(updateTime, 1000);
});

// ===== Initialize App =====
function initializeApp() {
    populateTimezoneModal();
    renderTimezoneCards();
    updatePresetButtons();
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
    // Format toggle
    document.getElementById('format-select').addEventListener('change', (e) => {
        timeFormat = parseInt(e.target.value);
        updateTime();
    });

    // Add timezone button
    document.getElementById('add-timezone-btn').addEventListener('click', openModal);

    // Search functionality
    document.getElementById('timezone-search').addEventListener('input', (e) => {
        // Can be used for quick search
    });

    // Modal
    const modal = document.getElementById('timezoneModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target == modal) closeModal();
    });

    // Modal search
    document.getElementById('modal-search').addEventListener('input', (e) => {
        filterTimezones(e.target.value);
    });

    // Preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const timezone = e.target.dataset.timezone;
            if (!selectedTimezones.includes(timezone)) {
                selectedTimezones.push(timezone);
                renderTimezoneCards();
                updatePresetButtons();
            }
        });
    });
}

// ===== Update Time =====
function updateTime() {
    // Update main clock
    const now = new Date();
    updateMainClock(now);

    // Update timezone cards
    document.querySelectorAll('.timezone-card').forEach(card => {
        const timezone = card.dataset.timezone;
        updateTimezoneCard(card, timezone, now);
    });
}

// ===== Update Main Clock =====
function updateMainClock(now) {
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = 'AM';

    if (timeFormat === 12) {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
    }

    const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    const dateString = now.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });

    document.getElementById('mainTime').textContent = timeString;
    document.getElementById('mainPeriod').textContent = period;
    document.getElementById('mainDate').textContent = dateString;
}

// ===== Update Timezone Card =====
function updateTimezoneCard(card, timezone, now) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: timeFormat === 12
        });

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        const timeString = formatter.format(now);
        const dateString = dateFormatter.format(now);

        card.querySelector('.timezone-time').textContent = timeString;
        card.querySelector('.timezone-date').textContent = dateString;

        // Update offset
        const offset = calculateOffset(timezone);
        card.querySelector('.timezone-offset').textContent = `UTC ${offset}`;
    } catch (e) {
        console.error(`Error updating timezone ${timezone}:`, e);
    }
}

// ===== Calculate Offset =====
function calculateOffset(timezone) {
    const tzData = timezoneDatabase.find(tz => tz.timezone === timezone);
    if (tzData) {
        const offset = tzData.offset;
        const sign = offset >= 0 ? '+' : '';
        return `${sign}${offset}`;
    }
    return 'N/A';
}

// ===== Render Timezone Cards =====
function renderTimezoneCards() {
    const grid = document.getElementById('timezonesGrid');
    grid.innerHTML = '';

    selectedTimezones.forEach(timezone => {
        const tzData = timezoneDatabase.find(tz => tz.timezone === timezone);
        if (tzData) {
            const card = createTimezoneCard(tzData);
            grid.appendChild(card);
        }
    });
}

// ===== Create Timezone Card =====
function createTimezoneCard(tzData) {
    const card = document.createElement('div');
    card.className = 'timezone-card';
    card.dataset.timezone = tzData.timezone;

    card.innerHTML = `
        <div class="timezone-name">${tzData.name}</div>
        <div class="timezone-time">00:00:00</div>
        <div class="timezone-date">-- -- ----</div>
        <div class="timezone-offset">UTC ${tzData.offset >= 0 ? '+' : ''}${tzData.offset}</div>
        <button class="remove-btn" onclick="removeTimezone('${tzData.timezone}')">Remove</button>
    `;

    return card;
}

// ===== Remove Timezone =====
function removeTimezone(timezone) {
    selectedTimezones = selectedTimezones.filter(tz => tz !== timezone);
    renderTimezoneCards();
    updatePresetButtons();
}

// ===== Populate Timezone Modal =====
function populateTimezoneModal() {
    const list = document.getElementById('timezoneList');
    list.innerHTML = '';

    timezoneDatabase.forEach(tz => {
        const item = document.createElement('div');
        item.className = 'timezone-item';
        item.textContent = tz.name;
        item.onclick = () => {
            if (!selectedTimezones.includes(tz.timezone)) {
                selectedTimezones.push(tz.timezone);
                renderTimezoneCards();
                updatePresetButtons();
                closeModal();
            }
        };
        list.appendChild(item);
    });
}

// ===== Filter Timezones =====
function filterTimezones(query) {
    const list = document.getElementById('timezoneList');
    const items = list.querySelectorAll('.timezone-item');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===== Modal Functions =====
function openModal() {
    document.getElementById('timezoneModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('timezoneModal').style.display = 'none';
}

// ===== Update Preset Buttons =====
function updatePresetButtons() {
    document.querySelectorAll('.preset-btn').forEach(btn => {
        const timezone = btn.dataset.timezone;
        if (selectedTimezones.includes(timezone)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ===== Utility Functions =====
function padZero(num) {
    return num.toString().padStart(2, '0');
}

// ===== Cleanup =====
window.addEventListener('beforeunload', () => {
    clearInterval(updateInterval);
});

console.log('Digital Clock initialized successfully!');
