import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');

const daysEL = document.querySelector("[data-days]")
const hoursEl = document.querySelector("[data-hours]")
const minutesEl = document.querySelector("[data-minutes]")
const secondsEl = document.querySelector("[data-seconds]")

startBtnEl.disabled = true;


// const inputDate = new Date()
// const today = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

      if (selectedDates[0] < Date.now()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        // Notify.failure('Please choose a date in the future');
          // window.alert("Please choose a date in the future");
          return;
      } 
      startBtnEl.addEventListener("click", onTimer)
      startBtnEl.disabled = false;

      function onTimer() {
        let timerId = setInterval(() => {
          let deltaTime = selectedDates[0] - Date.now();
          if (deltaTime < 0) {
            clearInterval(timerId);
            return;
               }
          convertMs(deltaTime)
          console.log(deltaTime)
        }, 1000);
      }     
  },
};

flatpickr(inputEl, options)  

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
    daysEL.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}