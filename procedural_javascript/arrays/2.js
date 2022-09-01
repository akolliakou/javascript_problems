// In the previous exercise, the value of the reference gets copied. 
// For this exercise, only the values of the array should be copied, 
// but not the reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// 1
const myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]


// 2
const myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]