// Write a function that takes two strings as arguments, determines the length of the two strings,
// and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

// Examples:

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

function shortLongShort(firstString, secondString) {
  let shorterString;
  let longerString;

  if (firstString.length > secondString.length) {
    shorterString = secondString;
    longerString = firstString;
  } else {
    shorterString = firstString;
    longerString = secondString;
  }

  return shorterString + longerString + shorterString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"