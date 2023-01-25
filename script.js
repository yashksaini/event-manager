const calendar = document.querySelector("#calendar");
const displayMonth = document.querySelector("#displayMonth");
const displayYear = document.querySelector("#displayYear");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
// It stores the day of 1st date of the month
let firstDateDay = new Date(year, month, 1).getDay();
// It count the number of days in the month
// 0 represents the last day in the month
let daysInMonth = new Date(year, (month + 1) % 11, 0).getDate();
const drawCalendar = () => {
  calendar.innerHTML = "";
  displayMonth.innerHTML = months[month];
  displayYear.innerHTML = year;
  firstDateDay = new Date(year, month, 1).getDay();
  daysInMonth = new Date(year, (month + 1) % 11, 0).getDate();
  let date = 0;
  for (let i = 0; i < 42; i++) {
    if (i >= firstDateDay && i < daysInMonth + firstDateDay) {
      date++;
      if (
        date == today.getDate() &&
        today.getMonth() == month &&
        today.getFullYear() == year
      ) {
        calendar.innerHTML += `<div class="box today">${date}</div>`;
      } else {
        calendar.innerHTML += `<div class="box">${date}</div>`;
      }
    } else {
      calendar.innerHTML += `<div class="box hide"></div>`;
    }
  }
};

drawCalendar();

// For displaying week names
const week = document.querySelector("#week");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const displayWeek = () => {
  week.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    week.innerHTML += `<div class="box week">${days[i]}</div>`;
  }
};
displayWeek();
const prevMonth = () => {
  if (month == 0) {
    year--;
    month = 11;
  } else {
    month--;
  }
  drawCalendar();
};
const nextMonth = () => {
  if (month == 11) {
    year++;
    month = 0;
  } else {
    month++;
  }
  drawCalendar();
};
