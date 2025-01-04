//CODE 2
// Write a program that takes an object 
// and swaps its keys and values. 
// Example input: { a: 1, b: 2 }. Output: { 1: "a", 2: "b" }.

// Declaring object variable

let objectGiven = {a:1,b:2}

// Loop to run the values.

for (let [key,value] of Object.entries (objectGiven)){
    console.log(`${value} :"${key}"`)
}