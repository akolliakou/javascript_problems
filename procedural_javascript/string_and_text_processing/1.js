// Write a function that takes a string argument and returns true 
// if all of the alphabetic characters inside the string are uppercase; 
// otherwise, return false. Ignore characters that are not alphabetic.

function isUppercase(string) {
  let arrayOfChars = string.split('');

  for (let i = 0; i < arrayOfChars.length; i += 1) {
    if (arrayOfChars[i] !== arrayOfChars[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true