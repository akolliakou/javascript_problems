// Madlibs is a simple game where you create a story template with "blanks" for words. 
// You, or another player, then construct a list of words and place them into the story, 
// creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
// and injects them into a story that you create.

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!

let rlSync = require('readline-sync');

console.log('Enter a noun:');
let noun = rlSync.prompt();

console.log('Enter a verb:');
let verb = rlSync.prompt();

console.log('Enter an adjective:');
let adj = rlSync.prompt();

console.log('Enter an adverb:');
let adv = rlSync.prompt();

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);