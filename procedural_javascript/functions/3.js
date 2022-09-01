// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);


// 'This is local'. When someFunction is invoked, it reassigns a new string to the global myVar.
// This is possible because variables in the global scope can be accessed and modified from within an inner scope.