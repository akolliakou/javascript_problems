// Write a program that solicits six numbers from the user and logs a message that describes 
// whether the sixth number appears among the first five numbers.

let rlSync = require('readline-sync')
let numberChoices = ['1st', '2nd', '3rd', '4th', '5th', 'last']
let numbers = [];

numberChoices.forEach(function(choice) {
  let answer = rlSync.question(`Enter the ${choice} number:`);
  numbers.push(answer);
});

if (numbers.slice(0, 5).includes(numbers[5])) {
  console.log(`The number ${numbers[5]} appears in [${numbers.join(', ')}].`)
} else {
  console.log(`The number ${numbers[5]} does not appear in [${numbers.join(', ')}].`)
}