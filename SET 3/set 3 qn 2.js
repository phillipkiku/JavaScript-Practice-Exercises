//A function sumArray that takes an array of numbers and returns their sum.

// Declaring the variable for the array.

let numbers = [2, 4, 8];

// Function to get the sum.

function sumArray(sum) {
  for (let i = 0; i <= numbers.length; i++) {
    //sum = numbers[i] + numbers[i++];
    sum += numbers;
    return sum;
  }
}
console.log(sumArray());
