function findLargestOfTwo(number1, number2) {
    if (number1 > number2) {
      return number1;
    } 
    else {
      return number2;
    }
  }
  
  // Example
  let largestNumber = findLargestOfTwo(58, 20);
  console.log(largestNumber); // 20