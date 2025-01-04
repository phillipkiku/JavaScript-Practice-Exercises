// A program that checks if a number is positive, negative, or zero.

// declaring how the number will be input.

let digit = prompt("Enter the Digit");

//function to check the status of the digit.

function checkDigit() {
  if (digit > 0) {
    console.log(`${digit} is Positive`);
  } else if (digit < 0) {
    console.log(`${digit} is Negative`);
  } else {
    console.log(`${digit} is Zero`);
  }
}
console.log(checkDigit(digit));
