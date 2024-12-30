let digit = prompt ("Please Enter a Digit");

function checkDigit(){
    if(digit % 2 == 0){
        console.log(digit,"Digit is Even");    
    } else {
        console.log(digit,"Digit is Odd");
        //console.log(digits);
    }
}

console.log(checkDigit(digit));