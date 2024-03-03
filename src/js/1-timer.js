// INCLUDING LIBRARY FLATPICKER

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// INCLUDING LIBRARY IZITOAST

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// VARIABLES

const btn = document.querySelector('[data-start]');
btn.disabled = true;
const daysField = document.querySelector("[data-days]");
const hoursField = document.querySelector("[data-hours]");
const minutesField = document.querySelector("[data-minutes]");
const secondsField = document.querySelector("[data-seconds]");
const dateInput = document.querySelector(".date-input")

// USER SELECTED DATE
let userSelectedDate;

// FLATPICKER WITH OPTIONS
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.show({
        title: 'Hey',
        message: 'Please choose a date in the future',
        position: 'topRight',
        titleColor: 'white',
        titleSize: '24px',
        messageColor: 'white',
        messageSize: '24px',
        backgroundColor: '#542929',
        color: 'white', 
    });
    } else {
      btn.disabled = false;
      userSelectedDate = selectedDates[0];
      btn.addEventListener("click", backwardsTimer);
    }
  },
};


const myTimePicker = flatpickr('#datetime-picker', options);

console.log(myTimePicker)

// HANDLE BACKWARDS TIMER BTN

function backwardsTimer() {
btn.disabled = true;
dateInput.disabled = true;

// !!! How to disable input?
let intervalId;


intervalId = setInterval(() => {
  let milisecTimeDif = userSelectedDate - new Date();

  if(milisecTimeDif <= 0) {
    clearInterval(intervalId);
  } else {
    const timeObj = convertMs(milisecTimeDif);
    let seconds = timeObj.seconds;
    let minutes = timeObj.minutes;
    let hours = timeObj.hours;
    let days = timeObj.days;

    secondsField.textContent = addLeadingZero(String(seconds));
    minutesField.textContent = addLeadingZero(String(minutes));
    hoursField.textContent = addLeadingZero(String(hours));
    daysField.textContent = addLeadingZero(String(days));
  }
}, 1000)

// add to spans
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

// ADD LEADING ZERO

function addLeadingZero(value) {
  return value.padStart(2, '0');
}





