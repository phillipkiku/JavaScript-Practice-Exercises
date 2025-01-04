// A for loop 
// to calculate the factorial of a number n

// Function to run the factorial of number.

function factorial(number){
    let num = 1;
for (let i = 1; i <= number; i++)
    num *= i;
    return num;
}

console.log(factorial(5));
