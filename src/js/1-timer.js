// ALGORYTHM

// get the currentData
// get the data in the future
// find the difference between two dates
// turn on the loop, it works untill the dates are the same

function timer(currentDate, dateInTheFuture) {
const difference = dateInTheFuture - currentDate;
let dateToChange = currentDate;
console.log(dateToChange);

for(let i = 0; i < difference; i++) {
    console.log(dateToChange += 1);
}

}




timer(new Date(), new Date("2024-05-16"));
