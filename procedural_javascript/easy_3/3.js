// Build a program that logs when the user will retire and how many more years the 
// user has to work until retirement.

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const readline = require('readline-sync')

const age = parseInt(readline.question('What is your age? \n'), 10);
const retirementAge = parseInt(readline.question('At what age would you like to retire? \n'), 10);

const ageDifference = retirementAge - age;
const today = new Date();
const retirementYear = today.getFullYear() + ageDifference;

console.log(`It's ${today.getFullYear()}. You will retire in ${retirementYear}.`)
console.log(`You have only ${ageDifference} years to go.`)
