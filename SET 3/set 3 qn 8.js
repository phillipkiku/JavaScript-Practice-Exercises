let number;
let numberArray =[];
function checkNumber(){
    if (numberArray.includes(number)){
        console.log("Found");
    } else {
        console.log("Not - Found");
    }
}
number = 8;
numberArray = [3,4,5,8,9,3];
console.log(checkNumber())