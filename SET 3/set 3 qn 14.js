let duplicateArray;
function check(){
    for(i = 0; i < duplicateArray.length-1; i++){
        for(j = i+1; j < duplicateArray.length; j++ ){
            //let equal = duplicateArray[i] === duplicateArray [j];
            if(duplicateArray[i] === duplicateArray[j]){
                console.log(duplicateArray.pop(i));
                console.log(duplicateArray);
            }
        }
    }
}
duplicateArray =[1,3,2,1]
console.log(check(duplicateArray))