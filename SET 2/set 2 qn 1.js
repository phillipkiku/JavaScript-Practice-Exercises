//A function greet that takes a name as an argument
//returns "Hello, [name]!"

function greet() {
  let names = prompt("Please Enter your Name");

  //Command to show output in the HTML document.
  alert(`Hello, ${names} !`);

  console.log(`Hello, ${names} !`);
}
greet();
