// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

function repeater(string) {
  let doublesArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    doublesArray.push(string[idx], string[idx]);
  }

  return doublesArray.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""