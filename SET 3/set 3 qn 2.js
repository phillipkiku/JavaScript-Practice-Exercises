//A function sumArray that takes an array of numbers and returns their sum.

let numbers =[2,4,8];

function sumArray(){
   let sum;
 for(let i = 0; i <= numbers.length; i++){
    //sum = numbers[i] + numbers[i++];
    sum += numbers;
    return sum;
 }
}
console.log(sumArray());

/*
function factorial(number){
    let num = 1;
for (let i = 1; i <= number; i++)
    num *= i;
    return num;
}

console.log(factorial(5));
*/