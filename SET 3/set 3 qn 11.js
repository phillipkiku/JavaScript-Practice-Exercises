// A program that filters
// out all numbers greater than 10
// from an array
// returns the result.

function sortArray() {
    let arrayNumbers = [2, 4, 11, 25, 49, 30, 5];
    let num = 10;
    let greaterThan = [];
  
    for (let i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] > num) {
        greaterThan.push(arrayNumbers[i]);
      }
    }
    console.log(`These numbers ${greaterThan} are greater than ${num}`);
  }
  
  sortArray();
  