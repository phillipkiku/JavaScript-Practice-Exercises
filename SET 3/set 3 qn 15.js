// Write a program that takes a string 
// and capitalizes the first letter of each word. 
// Example input: "hello world". Output: "Hello World".

let sentence = "hello world";
let capital = sentence.toLocaleUpperCase().charAt(0);
let capital2 = sentence.charAt(0).toLocaleUpperCase().split('').concat(sentence.charAt(1)).join("");
//let change = reverseString.split('').reverse().join('');

console.log(capital);
console.log(capital2);

/*
    let cap = sentence.charAt(0).split('');
console.log(cap);

function capit(){
    for (i = 0; i < sentence.length; i++ ){
        if(indexof.sentence() == 0){
            return charAt(0).toLocaleUpperCase
        }
    }
}console.log(capit(sentence));
*/