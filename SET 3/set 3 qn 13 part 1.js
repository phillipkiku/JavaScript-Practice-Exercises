// Create a function multiplyNumbers that takes an array of numbers
// and multiplies all the numbers together.


let numberArray;
function multiplier(numberArray){
for(i = 0; i < numberArray.length; i++){
    let product = 1;
    product *= numberArray[i];
    
}
console.log(`Value is ${product}`);
}
numberArray =[2,3,5]
console.log(multiplier(numberArray));

