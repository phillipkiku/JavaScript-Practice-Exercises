// Write a program that calculates the frequency of each character in a string 
// and returns the result as an object.
// Example input: "hello". Output: { h: 1, e: 1, l: 2, o: 1 }.

let word = "hello" ;
check = word.split('');

console.log(check);

//function

function frequency(word) {
    let count = 0;
    let character = '';
    for (let i = 0; i < word.length; i++) {

        if (character[i] === character[i++] ) {            
            count++
        }       
    }     
    console.log(`${word[i]} :"${count[i]}"`);
  }
  word = "helloman";
  console.log(frequency(word));
  