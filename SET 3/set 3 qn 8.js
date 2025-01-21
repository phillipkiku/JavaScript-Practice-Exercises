// Write a function
// that takes a number and an array,
// checks if the number exists in the array, and
// returns a message "Found" or "Not Found"

function checkNumber() {
  let number = 8;
  let numberArray = [3, 4, 5, 8, 9, 3];

  if (numberArray.includes(number)) {
    console.log("Found");
  } else {
    console.log("Not - Found");
  }
}

checkNumber();
