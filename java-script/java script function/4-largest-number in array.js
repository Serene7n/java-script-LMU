function findLargestNumberInArray(array) {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }
    return largestNumber;
  }
  
  // Example
  let array = [1, 18, 3, 4, 13, 6, 22, 8, 9, 10];
  let largestNumber = findLargestNumberInArray(array);
  console.log(largestNumber); 