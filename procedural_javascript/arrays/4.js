// The concat function from the previous exercise could only concatenate a maximum of two arrays. 
// For this exercise, you are going to extend that functionality. 
// Refactor the concat function to allow for the concatenation of two or more arrays or values.

function concat(array, ...values) {
  let concatArray = array.slice();

  for (let index = 0; index < values.length; index += 1) {
    if (Array.isArray(values[index])) {
      for (let index2 = 0; index2 < values[index].length; index2 +=1) {
        concatArray.push(values[index][index2]);
      }
    } else {
      concatArray.push(values[index]);
    }
  }

  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
console.log(concat([1, 2], ['three'], {a: 4, b: 6}));    // [1, 2, "three", {a: 4, b: 6}]