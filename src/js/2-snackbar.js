// INCLUDING LIBRARY IZITOAST

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ========================================== VARIABLES ==============================================

const form = document.querySelector('form');

// ==================================== ADDING FORM EVENT LISTENER ===================================

form.addEventListener('submit', generatePromises);

// =================================== GENERATING PROMISES FUNCTION ==================================

function generatePromises(event) {
  event.preventDefault();

  // getting values
  const delayValue = parseInt(event.currentTarget.elements.delay.value);
  const stateValue = event.currentTarget.elements.state.value;

  // making a promise
  setTimeout(() => {
    let promise;

    // deciding if the promise will be fulfilled or rejected
    if (stateValue === 'rejected') {
      promise = Promise.reject(delayValue);
    } else if (stateValue === 'fulfilled') {
      promise = Promise.resolve(delayValue);
    }

    // handling returned promise
    promise
      .then(value => console.log(value))
      .catch(error => console.log(error));
  }, delayValue);

  event.currentTarget.reset();
}
