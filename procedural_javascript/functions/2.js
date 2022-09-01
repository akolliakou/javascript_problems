// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// 'This is local'. JavaScript gives priority to the myVar in the local scope,
// since that's the same scope from which myVar is being referenced by console.log.
// Because it has the same name, the global myVar cannot be accessed from within the
// local scope of the function. This type of behavior is called variable shadowing.