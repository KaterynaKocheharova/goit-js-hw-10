// INCLUDING LIBRARY

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// VARIABLES

const btn = document.querySelector('[data-start]');
btn.disabled = true;

// USER SELECTED DATE
let userSelectedDate;

// GLATPICKER WITH OPTIONS
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
    } else {
      btn.disabled = false;
      userSelectedDate = selectedDates[0];
      btn.addEventListener("click", backwardsTimer);
    }
  },
};


const myTimePicker = flatpickr('#datetime-picker', options);



// HANDLE BACKWARDS TIMER BTN

function backwardsTimer() {


setInterval(() => {
  let milisecTimeDif = userSelectedDate - new Date();
  let seconds = milisecTimeDif / 1000;
  let minutes = milisecTimeDif / 60000;
  let hours = milisecTimeDif/ 3600000;
  let days = milisecTimeDif /86400000;
console.log(`Left seconds ${seconds}`)
}, 1000)

// add to spans
}

// !!! ACCESSING PROPS

// console.log(typeof myTimePicker.currentYear);

// Properties#
// Once you’ve got the instance in say fp, accessing props is as simple as e.g. fp.currentYear

// selectedDates#
// The array of selected dates (Date objects).

// currentYear#
// The year currently displayed on the calendar.

// currentMonth#
// The zero-indexed month number (0-11) currently displayed on the calendar.

// config#
// The configuration object (defaults + user-specified option

// ALGORYTHM


