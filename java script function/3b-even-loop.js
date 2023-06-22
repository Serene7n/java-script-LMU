function printEvenNumbersInArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        console.log(array[i]);
      }
    }
  }
  
  // Example
  let array = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
  printEvenNumbersInArray(array);