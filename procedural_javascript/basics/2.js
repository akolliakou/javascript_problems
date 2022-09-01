// Go over the following program. What does it log to the console at lines 10, 14, 18, and 22? 
// Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// It will print to the console lines 10, 18 and 22 as conditionals evaluate to true