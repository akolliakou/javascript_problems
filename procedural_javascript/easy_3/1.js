// Build a program that randomly generates Teddy's age, and logs it to the console. 
// Have the age be a random number between 20 and 200 (inclusive).

// Teddy is 69 years old!

function getTeddysAge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let age = getTeddysAge(20, 201)
console.log(`Teddy is ${age} years old!`)