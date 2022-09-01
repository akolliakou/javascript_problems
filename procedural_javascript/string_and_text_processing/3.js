// Write a function that takes a string and returns an object containing three properties: 
// one representing the number of characters in the string that are lowercase letters, 
// one representing the number of characters that are uppercase letters, 
// and one representing the number of characters that are neither.

function letterCaseCount(string) {
  let arrayOfChars = string.split('');
  let caseCount = { lowercase: 0, uppercase: 0, neither: 0 };

  arrayOfChars.forEach(char => {
    if (char.match(/[^a-z]/gi)) {
      caseCount.neither += 1;
    } else if (char.match(/[A-Z]/g)) {
      caseCount.uppercase += 1;
    } else {
      caseCount.lowercase += 1;
    }
  });

  return caseCount;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }