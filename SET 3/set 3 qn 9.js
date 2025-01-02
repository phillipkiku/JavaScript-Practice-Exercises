let sentence;
function count(){
    if (typeof sentence === "String"){
  vowels = sentence.includes("a","e","i","o","u").length;
  console.log(vowels);
    } else {
        console.log("Does not contain any Vowels");
    }
}
sentence = "abcdefgi";
console.log(count(sentence));
//let change = reverseString.split('').reverse().join('');