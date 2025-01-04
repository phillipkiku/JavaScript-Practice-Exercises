// CODE 1
// Build a function that takes a string 
// and checks if it’s a palindrome (thesame forwards and backward). 

// Function to check values of the words array.

function firstPalindrome(words){
    let paraWords = [];
    for(i=0; i<words.length; i++){
    if (typeof words === "string"){        
    let currentElement = words[i];
        if ( currentElement === currentElement.reverse){
            return paraWords.push(currentElement);
        } else {
            console.log("No palindrome");
        }
        }
    }
}
word = ["aba","man","don"]
console.log(firstPalindrome(words));



