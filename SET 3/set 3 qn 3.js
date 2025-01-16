//A loop
//to log all key-value pairs
//the object {a: 1, b: 2, c: 3}

// Declaring variable for the object.

function keyValue() {
  let ObjectGiven = { a: 1, b: 2, c: 3 };

  for (const key in ObjectGiven) {
    console.log(key, ObjectGiven[key]);
  }
}
keyValue();
