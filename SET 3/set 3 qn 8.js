// Write a function
// that takes a number and an array,
// checks if the number exists in the array, and
// returns a message "Found" or "Not Found"

// Declaring the varibales for the number and array
let number;
let numberArray =[];

// function to check the number through the array.

function checkNumber(){
    if (numberArray.includes(number)){
        console.log("Found");
    } else {
        console.log("Not - Found");
    }
}
number = 8;
numberArray = [3,4,5,8,9,3];
console.log(checkNumber());

number = 20;
numberArray = [1,3,5,60,9];
console.log(checkNumber());

number = 2;
numberArray = [3,7,23,6,87,2];
console.log(checkNumber());