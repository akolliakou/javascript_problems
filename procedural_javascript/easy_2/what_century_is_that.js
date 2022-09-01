// Write a function that takes a year as input and returns the century. The return value should be a string that begins with 
// the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

function calculateCentury(year) {
  let centuryYear;

  if (Number.isInteger(year / 100)) {
    centuryYear = year / 100;
  } else {
    centuryYear = Math.floor((year / 100) + 1);
  }

  return centuryYear;
}

function exceptionsWithTh(yearString) {
  yearString.slice(yearString.length - 2, yearString.length) === '13' ||
  yearString.slice(yearString.length - 2, yearString.length) === '12' ||
  yearString.slice(yearString.length - 2, yearString.length) === '11'
}

function century(year) {
  let centuryYear = calculateCentury(year);
  let centuryYearString = String(centuryYear);

  if (exceptionsWithTh(centuryYearString)) {
    return centuryYearString += 'th';
  } else if (centuryYearString[centuryYearString.length - 1] === '1') {
    return centuryYearString + 'st';
  } else if (centuryYearString[centuryYearString.length - 1] === '2') {
    return centuryYearString + 'nd';
  } else if (centuryYearString[centuryYearString.length - 1] === '3') {
    return centuryYearString + 'rd';
  } else {
    return centuryYearString + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"