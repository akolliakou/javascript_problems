// Write a function that counts the number of occurrences of each element in a given array.
// Once counted, log each element alongside the number of occurrences.

function countOccurrences(array) {
  let countObject = {};

  for (let idx = 0; idx < array.length; idx +=1) {
    if (Object.keys(countObject).includes(array[idx])) {
      countObject[array[idx]] += 1;
    } else {
      countObject[array[idx]] = 1;
    }
  }

  for (let prop in countObject) {
    console.log(`${prop} => ${countObject[prop]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2