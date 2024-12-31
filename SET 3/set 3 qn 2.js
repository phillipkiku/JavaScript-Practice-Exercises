let numbers =[2,4,8];
let sum;
function sumArray(){
 for(i = 0; i <= numbers.length; i++){
    sum = numbers[i] + numbers[i++];
 }
}
console.log(sumArray(numbers));