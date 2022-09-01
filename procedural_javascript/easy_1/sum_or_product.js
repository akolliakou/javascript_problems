// Write a program that asks the user to enter an integer greater than 0, 
// then asks if the user wants to determine the sum or the product of all numbers 
// between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Copy Code
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

let readlineSync = require('readline-sync');

console.log('Please enter an integer greater than 0:');
let num = readlineSync.prompt();
num = parseFloat(num);

console.log('Enter "s" to compute the sum, or "p" to compute the product');
let answer = readlineSync.prompt();

if (answer === 's') {
  let result = 0;

  for (let count = 1; count <= num; count += 1) {
    result += count;
    console.log(result);
  }

  console.log(`The sum of integers between 1 and ${num} is ${result}.`);
} else {
  let result = 1;

  for (let count = 1; count <= num; count += 1) {
    result *= count;
 }

  console.log(`The product of integers between 1 and ${num} is ${result}.`);
}