//A program that counts
// how many times the letter "a" appears in the string
//  "JavaScript is amazing!".

// Declaring variable for the string.
/*
let word;
word = "JavaScript is amazing!";

// Display program to split and count "a".

console.log(word.split("a").length - 1);

word =
  "Write a program that counts how many times the letter a appears in JavaScript is amazing!.";
console.log(word.split("a").length - 1);
*/
function word() {
  let sentence = "JavaScript is amazing!";
  let letter = "q";
  let count = 0;
  /*
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
      count++;
      console.log(`The ${letter} appears ${count} times.`);
    } else if (i === sentence.length - 1) {
      console.log(`Letter ${letter} does not exist.`);
    }
  }
}
  */

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
      count++;
    }
  }

  console.log(`The letter ${letter} appears ${count} times.`);
}
word();
