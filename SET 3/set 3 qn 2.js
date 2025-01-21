//A program that counts
// how many times the letter "a" appears in the string
//  "JavaScript is amazing!".

function word() {
  // let sentence = "JavaScript is amazing!";
  // let letter = "a";
  let sentence = prompt("Please enter sentence");
  let letter = prompt("Please enter letter to be counted");
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
      count++;
    }
  }
  console.log(`The letter ${letter} appears ${count} times.`);
}
word();
