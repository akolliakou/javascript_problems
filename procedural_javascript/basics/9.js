// You will learn more about converting strings to numbers by writing a function that 
// takes a positive integer or zero, and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, 
// such as String(), Number.prototype.toString, or an expression such as '' + number. 
// Your function should do this the old-fashioned way and construct the string by 
// analyzing and manipulating the number.

const NUMBERS = {
  0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
  5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
};

function integerToString(number) {
  let numbersArray = [];
  let divider = 1;
  let idx = 0;

  while (parseInt(number / divider % 10) > 0) {
    numbersArray[idx] = parseInt(number / divider % 10);
    divider *= 10;
    idx += 1;
  }

  return numbersArray.reverse().join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"