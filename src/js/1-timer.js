// INCLUDING LIBRARY

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// ADDING FLATPICKER

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
  
const myTimePicker = flatpickr("#datetime-picker", options);



// ALGORYTHM

// get the currentData
// get the data in the future
// find the difference bettween current and date in the future
// get updated secs, minutes, hours ets at every iteration - use the loop
// put it in html

