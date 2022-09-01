// Modify the function from the previous exercise so that it ignores 
// non-alphabetic characters when determining whether a letter should be 
// upper or lower case. Non-alphabetic characters should still be included in 
// the output string, but should not be counted when determining the appropriate case.

function staggeredCase(string) {
  let charsArray = string.split('');
  let counter = 0;

  return charsArray.map(char => {
    if (counter % 2 === 0 && char.match(/[a-z]/gi)) {
      counter += 1;
      return char.toUpperCase();
    } else if (counter % 2 === 1 && char.match(/[a-z]/gi)) {
      counter += 1;
      return char.toLowerCase();
    } else {
      return char;
    }
  });
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"