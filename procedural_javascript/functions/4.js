// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// 'This is global'. JavaScript first attempts to find a variable with myVar name in the current scope
// (i.e., the local scope of someFunction). Since myVar does not exist in this scope,
// JavaScript then starts looking for myVar in the next outer scope, which happens to be the global scope
// in this case. Here, JavaScript finds the global myVar and logs its value.