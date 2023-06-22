function findLargestOfThree(number1, number2, number3) {
    // Initialize the largest number as the first number.
    let largestNumber = number1;
  
    // Check if the second number is larger than the largest number.
    if (number2 > largestNumber) {
      largestNumber = number2;
    }
  
    // Check if the third number is larger than the largest number.
    if (number3 > largestNumber) {
      largestNumber = number3;
    }
  
    // Return the largest number.
    return largestNumber;
  }
  
  // Example
  let number1 = 50;
  let number2 = 20;
  let number3 = 30;
  
  let largestNumber = findLargestOfThree(number1, number2, number3);
  console.log(largestNumber); 