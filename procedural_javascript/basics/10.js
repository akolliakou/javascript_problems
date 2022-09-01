// In the previous exercise, you reimplemented a function that converts 
// non-negative numbers to strings. In this exercise, you're going to extend 
// that function by adding the ability to represent negative numbers.

// You may not use any of the standard conversion functions available in JavaScript, 
// such as String(), Number.prototype.toString, or an expression such as '' + number. 
// You may, however, use the integerToString function from the previous exercise.

function signedIntegerToString(number) {
  if (number < 0) {
    return ('-' + integerToString(-number));
  } else if (number > 0) {
    return ('+' + integerToString(number));
  } else {
    return integerToString(number);
  }
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"