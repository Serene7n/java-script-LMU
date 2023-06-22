function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4 but not by 100,
  // or if it is divisible by 400.
  return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}

// Example
var year = 2023;
var isLeapYear = isLeapYear(year);
console.log(isLeapYear); // false