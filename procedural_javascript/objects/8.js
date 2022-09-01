// The penultimate function takes a string as an argument and returns the next-to-last word 
// n the string. The function assumes that "words" are any sequence of non-whitespace 
// characters. The function also assumes that the input string will always contain at least 
// wo words. The penultimate function in the example below does not return the expected 
// result. Run the code below, check the current result, identify the problem, explain what 
// the problem is, and provide a working solution.

// Examples:

function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

// revised code
function penultimate(string) {
  let arr = string.split(' ');
  let length = arr.length;
  return arr[length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

//using a negative index to access an array does not extract elements from the end, nor does it raise an error. 
// Instead, performing such an action usually returns undefined.
// This behavior is caused by the fact that in JavaScript, Arrays are Objects. 
// By using -1 with bracket notation (e.g., myArray[-1]), we are actually telling 
// JavaScript to access the property that has a key of '-1' and return that property's value.