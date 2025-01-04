// A function
// that removes duplicate values from an array.
// Example input: [1, 2, 2, 3]. Output: [1, 2, 3].

// Function to check duplicate values.

function check(duplicateArray){
    let newArrray = [];
    for(i = 0; i < duplicateArray.length-1; i++){
        for(j = i+1; j < duplicateArray.length; j++ ){
            
            if(duplicateArray[i] === duplicateArray[j]){
                result = duplicateArray.pop(i);
                newArrray.push(result);     
                console.log(`New array is ${duplicateArray}`);
                
            } else if (duplicateArray[i] !== duplicateArray[j]) {
              console.log(`No duplicate value found in Array ${duplicateArray}`);
            }
            else {
                console.log(`${duplicateArray} Doesnot have any duplicate values.`)
            }
        }
    }
    return{
        new : newArrray ,
    }
}
duplicateArray =[1,3,2,1]
console.log(check(duplicateArray));

duplicateArray =[4,7,5];
console.log(check(duplicateArray));

duplicateArray =[2,3,2];
console.log(check(duplicateArray));