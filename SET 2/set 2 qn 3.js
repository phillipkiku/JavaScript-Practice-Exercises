//A function is Even 
// Checks if a given number is even.

// Declaring how the variable will be entered.

let number = prompt("Enter a number");

// Function to check the variable.

function isEven(){
if (number % 2 == 0){
    console.log(number ,"Number is Even");
} else {
    console.log(number, " Number is not even");
}
}
console.log(isEven(number));