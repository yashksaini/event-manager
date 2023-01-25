const calendar = document.querySelector("#calendar");

const drawCalendar = () => {
  calendar.innerHTML = "";
  for (let i = 0; i < 42; i++) {
    calendar.innerHTML += `<div class="box"></div>`;
  }
};

drawCalendar();
