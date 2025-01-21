//A program that checks two variables
// have the same value and type.

// function to check status of the variables.

function check(variable1, variable2) {
  if (variable1 === variable2) {
    return "Matching";
  } else {
    return "Not-Matching";
  }
}
check();
console.log(check("mna", 453));
console.log(check("man", "man"));
