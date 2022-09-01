// Given a string that consists of some words and an assortment of non-alphabetic characters, 
// write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
// If one or more non-alphabetic characters occur in a row, you should only have one space in the result 
// (i.e., the result string should never have consecutive spaces).

// cleanUp("---what's my +*& line?");    // " what s my line "

const LOWERCASE = /[a-z]/g;
const UPPERCASE = /[A-Z]/g;

function replaceWithSpaces(string) {
  let stringWithSpaces = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx].match(LOWERCASE) || string[idx].match(UPPERCASE)) {
      stringWithSpaces += string[idx];
    } else {
      stringWithSpaces += ' ';
    }
  }

  return stringWithSpaces;
}

function cleanUp(string) {
  let stringWithSpaces = replaceWithSpaces(string);
  let cleanedString = stringWithSpaces[0];

  for (let idx = 1; idx < stringWithSpaces.length; idx += 1) {
    if (stringWithSpaces[idx] === ' ' && cleanedString[cleanedString.length - 1] === ' ') {
      continue;
    } else {
    cleanedString += stringWithSpaces[idx];
  }
  }

  return cleanedString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "