// Create a function multiplyNumbers that takes an array of numbers
// and multiplies all the numbers together.

function multiplyNumbers() {
  let array = [1, 2, 3, 4];
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  console.log(product);
}

multiplyNumbers();
