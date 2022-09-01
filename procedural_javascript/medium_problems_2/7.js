// Write a function that computes the difference between the square of the sum of the 
// first n positive integers and the sum of the squares of the first n positive integers.

function sumSquareDifference(n) {
  let arrayOfNumbers = getArrayOfNumbers(n);
  return squareOfSum(arrayOfNumbers) - sumOfSquares(arrayOfNumbers);
}

function getArrayOfNumbers(n) {
  let array = [];

  for (let i = 1; i <= n; i += 1) {
    array.push(i);
  }

  return array;
}

function squareOfSum(array) {
  let sum = array.reduce((sum, value) => sum + value);
  return sum ** 2;
}

function sumOfSquares(array) {
  return array.reduce((sum, value) => {
    return sum + (value ** 2)
  })
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150