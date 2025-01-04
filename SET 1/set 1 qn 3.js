//A program that checks two variables
// have the same value and type.

// declaring how variables will be input.

let variable1 = prompt("Enter first variable");
let variable2 = prompt("Enter second variable");

// function to check status of the variables.

function check(variable1, variable2) {
  if (typeof variable1 === typeof variable2) {
    console.log("matching");
  } else {
    console.log("Not-Matching");
  }
}

console.log(check());
console.log(check("mna", 453));
console.log(check("man", "man"));
