// Write a function that takes a string argument and returns a new string that contains the value of the 
// original string with all consecutive duplicate characters collapsed into a single character.

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

function crunch(string) {
  if (string === "") {
    return string;
  }

  let resultString = string[0];

  for (let idx = 1; idx < string.length; idx += 1) {
    if (resultString[resultString.length -1] !== string[idx]) {
      resultString += string[idx];
    }
  }

  return resultString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""