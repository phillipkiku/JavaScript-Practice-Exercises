// A function that accepts a string
// Counts how many vowels (a,e, i, o, u) it contains.

// Declaring the variable for the string.

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


/*
function vowels (value) {
  let counter = 0;
  let char = '';
  for (let i = 0; i < value.length; i++) {
      char = value[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          counter++
      }
      
  } 
  return counter;
}

value = "AaBbCcDdEe";
value = "mAn"
console.log(vowels(value))
*/