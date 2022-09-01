// The previous exercise mimics the parseInt function to a lesser extent. 
// In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits and returns the appropriate number as 
// an integer. The string may have a leading + or - sign; if the first character is a +, 
// your function should return a positive number; if it is a -, your function should return 
//  negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return -stringToInteger(string.slice(1));
  } else if (string[0] === '+') {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

function stringToInteger(string) {
  let numbers = stringToNumber(string);
  let value = 0;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    value = 10 * value + numbers[idx];
  }

  return value;
}

function stringToNumber(string) {
  let numbersArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    numbersArray.push(DIGITS[string[idx]]);
  }

  return numbersArray;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100