// In this exercise, you will write a program that asks the user for a phrase,
// then outputs the number of characters in that phrase. 
// Go over the documentation for String to find an appropriate method to use.
// The solution counts all the characters in the phrase, including spaces. 
// Refactor it so that it ignores spaces.

// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".

// Please enter a phrase: walk, don't run
// // console output
// There are 13 characters in "walk, don't run".

let rlSync = require('readline-sync');
let phrase = rlSync.question('Enter a phrase:\n');
let length = phrase.length;

const regex = /\s/g;

let inputWithoutSpaces = phrase.replace(regex, '');
let lengthWithoutSpaces = inputWithoutSpaces.length;

console.log(`There are ${length} characters in "${phrase}".`);
console.log(`There are ${lengthWithoutSpaces} characters in "${phrase}".`);
