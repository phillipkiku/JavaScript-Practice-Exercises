// A function findMax
// that returns the largest number from an array of numbers.


function findMax(numberArray) {
    let maxNumber = numberArray[0];                      
    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] > maxNumber) {                
            maxNumber = numberArray[i];
        }
    }
    console.log(`The maximum number in the array is ${maxNumber}`);
}

let numberArray = [9,7,5,3,1,2,4,6,8];
console.log(findMax(numberArray));

numberArray = [20,40,30,50,55,20,];
console.log(findMax(numberArray));