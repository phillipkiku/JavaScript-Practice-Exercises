// A program that filters
// out all numbers greater than 10
// from an array
// returns the result.

// Function checks numbers are greater than 10

function sortArray(arrayNumbers){
    let greater = [];    
    
    for (let i = 0; i<arrayNumbers.length; i++){
        let currentElement = arrayNumbers[i];
        if (currentElement > 10 ){
            greater.push(currentElement);
        }
         else {
            console.log("Array doesnot have values greater than 10");
        }
    }
    return {
        greaterNumbers : greater,
    }
}
arrayNumbers = [2,4,11,25,9,5]
console.log(sortArray(arrayNumbers));
//console.log(sortArray(arrayNumbers[2,22,10,2]));

arrayNumbers = [2,4,,9,5]
console.log(sortArray(arrayNumbers));