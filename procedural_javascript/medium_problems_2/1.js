// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

function letterPercentages(string) {
  let counts = getInitialCounts(string);
  let percentagesArray = Object.entries(counts);

  let convertedPercentages =  percentagesArray.map(group => {
                               return [group[0], ((group[1] / string.length) * 100).toFixed(2)]
                             });

  return Object.fromEntries(convertedPercentages);
}

function getInitialCounts(string) {
 let counts = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach(char => {
    if (char.match(/[a-z]/gi) ){
      if (char === char.toUpperCase()) {
        counts.uppercase += 1;
      } else {
        counts.lowercase += 1;
      }
    } else {
      counts.neither += 1
    }
  });

  return counts;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }