// Write a function that takes an array as an argument and returns an array 
// that contains two elements, each of which is an array. Put the first half of the 
// original array elements in the first element of the return value, and put the second 
// half in the second element. If the original array contains an odd number of elements, 
// place the middle element in the first half array.

function halvsies(array) {
  let resultsArray = [];
  let firstHalf;
  let secondHalf;

  if (array.length % 2 === 1) {
    firstHalf = array.slice(0, Math.round(array.length / 2));
    secondHalf = array.slice(Math.round(array.length / 2));
    resultsArray.push(firstHalf, secondHalf)
  } else {
    firstHalf = array.slice(0, array.length / 2);
    secondHalf = array.slice(array.length / 2);
    resultsArray.push(firstHalf, secondHalf);
  }

  return resultsArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]