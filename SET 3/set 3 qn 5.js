let largestNumber;
function findMax(){
    let size = largestNumber.length;
    for (let i = 0; i < size - 1; i++){
        for(let j =i+1; j < size; j++){
            if (largestNumber[i] > largestNumber[j]){
                console.log(largestNumber[j])
                //return [j]
            }
        }

    }
    
}
largestNumber = [3,4,6];
console.log(findMax(largestNumber));