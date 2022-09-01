// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 'This is global'. someFunction has its own local "inner" scope,
// so the myVar declaration within the function has no effect on the global "outer" scope.
