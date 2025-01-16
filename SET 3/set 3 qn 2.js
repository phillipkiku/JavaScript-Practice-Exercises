//A function sumArray that takes an array of numbers and returns their sum.

// Declaring the variable for the array.

// Function to get the sum.

function sumArray() {
  let numbers = [2, 4,2, 8];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

sumArray();
