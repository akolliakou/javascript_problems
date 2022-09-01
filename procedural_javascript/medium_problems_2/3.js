// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater 
// than the length of the longest side, and every side must have a length greater than 0. 
// If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments 
// and returns one of the following four strings representing the triangle's classification: 
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

function triangle(...sides) {
  let sortedSides = sides.sort((a, b) => a - b);

  if (!twoSidesLargerThanThird(sides) || !everySideLargerThanZero(sides)) {
    return 'invalid';
  }

  if (allThreeSidesEqual(sides)) {
    return 'equilateral'
  } else if (twoSidesEqualThirdDifferent(sides)) {
    return 'isosceles'
  } else if (allSidesDifferentLengths(sides)) {
    return 'scalene'
  }
}

function twoSidesLargerThanThird(sides) {
  return (sides[0] + sides[1]) > sides[2]
}

function everySideLargerThanZero(sides) {
  return sides.every(side => side > 0);
}

function allThreeSidesEqual(sides) {
  return sides.every(side => sides.indexOf(side) !== sides.lastIndexOf(side));
}

function twoSidesEqualThirdDifferent(sides) {
  let count = 0;

  sides.forEach(side => {
    if (sides.indexOf(side) !== sides.lastIndexOf(side)) {
      count += 1
    }
  });

  return count === 2;
}

function allSidesDifferentLengths(sides) {
  return sides.every(side => sides.indexOf(side) === sides.lastIndexOf(side));
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"