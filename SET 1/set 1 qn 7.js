let digit = prompt ("Enter the Digit");

function checkDigit(){
 if(digit > 0){
    console.log("Digit is Positive");
 } else if ( digit < 0){
    console.log("Digit is Negative");
 } else{
    console.log("Digit is Zero")
 }

}
console.log(checkDigit(digit));