// Write a program that takes a string
// and capitalizes the first letter of each word.
// Example input: "hello world". Output: "Hello World".

function capitalizes() {
    let sentence = prompt("Enter word ");
    let wordarray = sentence.split(" ");
    let capital = [];
  
    for (let i = 0; i < wordarray.length; i++) {
      let word = wordarray[i];
      let firstLetter = word.charAt(0).toUpperCase();
      let restOfTheWord = word.slice(1);
      let capitalizedWord = firstLetter + restOfTheWord;
      capital.push(capitalizedWord);
    }
    console.log(capital.join(" "));
  }
  capitalizes();
  