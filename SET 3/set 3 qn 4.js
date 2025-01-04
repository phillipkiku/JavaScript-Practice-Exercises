// Check if the number 5 exists
// in the array [1, 2, 3, 4, 5]
// using the includes() method.

// Declaring variable for the array.

let numberExits;

// Function to check the variable.

function check() {
  if (numberExits.includes(5) === true) {
    console.log(numberExits, "Array includes 5");
  } else {
    console.log(numberExits, "Array doesnot include 5");
  }
}
numberExits = [2, 6, 4];
numberExits = [3, 5, 4, 6, 25];
console.log(check(numberExits));
