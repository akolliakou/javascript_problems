// Write a function that returns true if its integer argument is palindromic, 
// or false otherwise. A palindromic number reads the same forwards and backwards.

function isPalindromicNumber(number) {
  let digitsArray = String(number).split('');
  let reversedDigitsArray = digitsArray.slice().reverse();

  for (let idx = 0; idx < digitsArray.length; idx += 1) {
    if (digitsArray[idx] !== reversedDigitsArray[idx]) {
      return false;
    }
  }

  return true;
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true