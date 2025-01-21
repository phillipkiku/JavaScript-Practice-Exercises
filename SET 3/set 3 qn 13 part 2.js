// Write a program that calculates the frequency of each character in a string
// and returns the result as an object.
// Example input: "hello". Output: { h: 1, e: 1, l: 2, o: 1 }.

function frequency() {
  let word = "heeelloonppt";
  let check = {};
  for (let i = 0; i < word.length; i++) {
    if (check[word[i]]) {
      check[word[i]]++;
    } else {
      check[word[i]] = 1;
    }
  }
  console.log(check);
}
frequency();
