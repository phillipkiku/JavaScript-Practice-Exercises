// Create a function multiplyNumbers that takes an array of numbers
// and multiplies all the numbers together.

// Declaring varibales for array.
/*
let numberArray;

// Function to multiply array values

function multiplier(numberArray){

// Loop to multiply the numbers with each other.

for(i = 0; i < numberArray.length; i++){
    let product = 1;
    product *= numberArray[i];
    
}
console.log(`Value is ${product}`);
}
numberArray =[2,3,5]
console.log(multiplier(numberArray));

*/

function multiplyNumbers() {
  let array = [1, 2, 3, 4];
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
 }
  console.log(product);
}

multiplyNumbers();
