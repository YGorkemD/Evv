const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const monthYear = document.getElementById('monthYear');
const daysContainer = document.getElementById('days');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function updateCalendar() {

    const date = new Date(currentYear, currentMonth, 1)
    monthYear.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);

  daysContainer.innerHTML = '';

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  for (let i = 0; i < firstDayIndex; i++) {
    daysContainer.innerHTML += '<div></div>';
  }

  for (let i = 1; i <= daysInMonth; i++) {
    daysContainer.innerHTML += `<div>${i}</div>`;
  }
}

function updateMonthYear() {
    monthYear.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentDate);
}

prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
});

nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateMonthYear();
  updateCalendar();
});

updateCalendar();
 