// Write a program that takes a string 
// and capitalizes the first letter of each word. 
// Example input: "hello world". Output: "Hello World".

// Declaring varibales of strings

function capitalizes(){
let sentence = prompt ("Enter word ");
let wordarray = sentence.split(" ");
let capital = [];

for (let i = 0; i < wordarray.length; i++){
    let word = wordarray[i];
    //let firstLetter = word.charAt[0].toUpperCase();
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfTheWord = word.slice(1);
    let capitalizedWord = firstLetter + restOfTheWord;
    capital.push(capitalizedWord);
    
}
console.log(capital.join(" "));

}
capitalizes();

/*

function capitalize() {
    let words = prompt("Enter words: ");
    let wordArray = words.split(" ");
    let capitalizedWords = [];
    
    for(let i = 0; i < wordArray.length; i++){
        let word = wordArray[i];
        let firstLetter = word.charAt(0).toUpperCase();
        let restOfWord = word.slice(1);
        let capitalizedWord = firstLetter + restOfWord;
        capitalizedWords.push(capitalizedWord);
    }
    console.log(capitalizedWords.join(" "));
}   
capitalize();
*/