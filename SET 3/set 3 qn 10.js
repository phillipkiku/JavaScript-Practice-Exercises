// Write a program to check
// if two arrays are equal (contain the same elements in the same order). 
// Develop a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers. 
// Example output: { min: 1, max: 10 }

let arrayOne = [1,2,3,4,5];
let arrayTwo = [1,2,3,4,5];

function findMinMax(arrayOne,arrayTwo){
    if(arrayOne === arrayTwo){
        let combined = arrayOne.concat(arrayTwo);
        return Math.min.apply(combined)
    } else {
        
    }
}