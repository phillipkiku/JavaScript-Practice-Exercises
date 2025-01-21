// Write a program to check
// if two arrays are equal (contain the same elements in the same order).
// Develop a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.
// Example output: { min: 1, max: 10 }

function findMinMax() {
    let array = [-1, 2, 3, 4, 5];
    let min = 0;
    let max = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
      if (array[i] < min) {
        min = array[i];
      }
    }
    console.log(`The Min is ${min} and Max is ${max}`);
  }
  findMinMax();
  