// Write a function that takes a string, doubles every consonant character in the string, 
// and returns the result as a new string. The function should not double vowels 
// ('a','e','i','o','u'), digits, punctuation, or whitespace.

function doubleConsonants(string) {
  let doublesArray = [];

  for (let index = 0; index < string.length; index += 1){
    if (string[index].match(/[a-z]/i) && !string[index].match(/[aeiou]/i)) {
      doublesArray.push(string[index], string[index]);
    } else {
      doublesArray.push(string[index]);
    }
  }
  return doublesArray.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""