// CODE 1
// Build a function that takes a string
// and checks if it’s a palindrome (thesame forwards and backward).

function palindrome() {
    let word = prompt("Enter Word");
  
    let reverseString = word.split("").reverse().join("");
    if (word === reverseString) {
      console.log(`This ${word} is a palindrome`);
    } else {
      console.log(`This ${word} is not a palindrome`);
    }
  }
  palindrome();
  