// A function that accepts a string
// Counts how many vowels (a,e, i, o, u) it contains.

// Declaring the variable for the string.
/*
let sentence;

// Function to count the vowels in the string

function count(){
    if (typeof sentence === "String"){
  vowels = sentence.split('').includes("a","e","i","o","u").length;
  console.log(vowels);
    } else {
        console.log("Does not contain any Vowels");
    }
}
sentence = "a b c d e f g i";
console.log(count(sentence));
//let change = reverseString.split('').reverse().join('');

*/


function vowel(){

  let sentence = prompt ("Ener Value");
  console.log(sentence);

  let vowels = ["A","a","E","e","I","i","O","o","U","u"];
  let count = 0;

  for( let i = 0; i < sentence.length; i++){
    if(vowels.includes(sentence[i])){
      count++;
    }
  }
console.log(`The total number of vowels found is ${count}.`);
}
vowel();