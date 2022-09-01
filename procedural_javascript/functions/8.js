// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// [1, 2, 10]. This is because arrays and objects, in JavaScript, are mutable.
// When the value assigned to a, an array, is passed to the function on line 7,
// a local variable b is initialized (on line 3) to the same array that a is assigned.
// Therefore, when the program executes the statement b[2] += 7 on line 4,
// it is actually being executed on the array assigned to a. Consequently,
// when the value of a is logged on line 8, we can see the result of this mutation: [1, 2, 10].

