let number = prompt("Enter a number")

function isEven(){
if (number % 2 == 0){
    console.log(number ,"Number is Even");
} else {
    console.log(number, " Number is not even");
}
}
console.log(isEven(number));