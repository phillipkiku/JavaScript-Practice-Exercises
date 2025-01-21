// A function that accepts a string
// Counts how many vowels (a,e, i, o, u) it contains.

function vowel() {
  let sentence = prompt("Ener sentence");
  console.log(sentence);

  let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
    }
  }
  console.log(`The total number of vowels found is ${count}.`);
}
vowel();
