// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
// The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, 
// and the other end at the upper-right.

// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

function whiteSpace(length) {
  let whiteSpaceString = ''

  for (let count = length; count > 0; count -= 1) {
    whiteSpaceString += ' ';
  }

  return whiteSpaceString;
}

function stars(length) {
  let starString = '';

  for (let count = 1; count <= length; count += 1) {
    starString += '*';
  }

  return starString;
}

function triangle(num) {
  let space = num;
  let star = 0;

  for (let count = 1; count <= num; count += 1) {
    console.log(whiteSpace(space - count) + stars(star + count));
  }
}

triangle(5);
triangle(9);