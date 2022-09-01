// Write a function that rotates the last n digits of a number. 
// For the rotation, rotate by one digit to the left, moving the first digit to the end.


function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(number, rotation) {
  let digits = String(number).split('');
  let rotatedDigits = rotateArray(digits.slice(digits.length - rotation));

  return (digits.slice(0, digits.length - rotation)).concat(rotatedDigits)
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917