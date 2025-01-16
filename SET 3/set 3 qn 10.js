// Write a program to check
// if two arrays are equal (contain the same elements in the same order). 
// Develop a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers. 
// Example output: { min: 1, max: 10 }

// Declaring the variables for the array.

/*

// Function toe

function findMinMax(arrayOne,arrayTwo){
    if(arrayOne === arrayTwo){
        let combined = arrayOne.concat(arrayTwo);
        return Math.min.apply(combined)
    } else {
        
    }
}
*/


function findMinMax(){
    let array = [-1,2,3,4,5];
    let min = 0;
    let max = 0;

    for(let i = 0; i < array.length; i++ ){
        if(array[i] > max){
            max = array[i];   

        } 
        if(array[i] < min){
            min = array[i];
        }
    }
console.log(`The Min is ${min} and Max is ${max}`);

}
findMinMax();