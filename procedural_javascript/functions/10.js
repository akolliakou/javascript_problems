// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

logValue();

function logValue() {
  console.log('Hello, world!');
}

// 'Hello, world!'. Hoisting is the process of finding and associating variable declarations
// with their respective scope—prior to the execution of all other code.
// In addition to variable declarations, the JavaScript interpreter also hoists
// function declarations. However, in contrast to how only the name of a variable is hoisted,
// with function declarations everything is hoisted, including both the function name and body.
// This means that the program can execute a function even before declaring it.
// Code after hoisting:

function logValue() {
  console.log('Hello, world!');
}

logValue();

// Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// hoisted code:

function logValue() {
  console.log('Hello, world!');
}

logValue = 'foo';

console.log(typeof logValue);

//'string'. In the hoisting process, functions declarations take precedence over variable declarations.
// This means that function declarations are moved to the top of the scope before variable declarations.
// When we have a function declaration and a variable declaration with the same name, as happens here,
// the variable declaration is omitted because it becomes redundant. JavaScript lets the assignment,
// which is actually a reassignment. In the hoisting process, functions declarations take precedence over variable declarations.
// This means that function declarations are moved to the top of the scope before variable declarations.
// When we have a function declaration and a variable declaration with the same name, as happens here,
// the variable declaration is omitted because it becomes redundant. JavaScript leaves the assignment,
// which is actually a reassignment.