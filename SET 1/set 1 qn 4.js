//A program that compares if 10 is greater than or equal to 5.
let number1 = 10;
let number2 = 5;

function checkNumber(number1,number2){
    if(number1 > number2){
        console.log(`Number ${number1} is greater than Number ${number2}`);
    } else if (number1 < number2) {
        console.log(`Number ${number1} is less than Number ${number2}`);
    } else {
        console.log(`${number1} is the equal to ${number2}`);
    }    
}
console.log(checkNumber(number1,number2));
console.log(checkNumber(2,4));
console.log(checkNumber(2,1));
checkNumber(1,5);
checkNumber(6,90);
checkNumber(90,6);
checkNumber(10,3)