/*
let arrayNumbers = [2,39,2,10,2,33];

function greaterThan10(){  
    let greater10 = [];

for(let element of array){
    if (element > 10){
        greater10.push(element);
    } else {
        console.log("Array doesnot have valueas greater than 10")
    }
}
return {
    greaterValues : greater10,
}

}
console.log(greaterThan10(arrayNumbers));
*/

let arrayNumbers = [3,17,20,4,8];

function sortArray(){
    let greater = [];    
    
    for (let i = 0; i<arrayNumbers.length; i++){
        let currentElement = arrayNumbers[i];
        if (currentElement > 10 ){
            greater.push(currentElement);
        }
         else {
            console.log("Doesnot belong anywhere");
        }
    }
    return {
        greaterNumbers : greater,
    }
}
console.log(sortArray(arrayNumbers));