// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

console.log(a);

var a = 1;

// undefined. The JS interpreter conducts hoisting. 
// There are  two things happening: (1) the variable a is declared and, (2) a is assigned a value of 1.
// it first goes over the code to find and associate variable declarations with their appropriate scope. 
// Visually, this is as if JavaScript moves (or "hoists") each variable declaration to the top of its scope.
// The assignment operation, however, is not hoisted.

//Here is the code after hoisting:

var a;
console.log(a);

a = 1;

// The program logs undefined on line 2: the assignment of 1 to a has not yet occurred.
