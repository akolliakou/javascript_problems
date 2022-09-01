// Write a function that takes a non-empty string argument and 
// returns the middle character(s) of the string. If the string has an odd length, 
// you should return exactly one character. If the string has an even length, you should
// return exactly two characters.

function centerOf(string) {
  let stringMiddle = Math.round(string.length / 2)
  let charsArray = [];

  if (string.length % 2 === 1) {
    charsArray.push(string[stringMiddle - 1]);
  } else {
    charsArray.push(string[stringMiddle - 1], string[stringMiddle]);
  }

  return charsArray.join('');
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"