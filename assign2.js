function findMax(numbers) {
    if (numbers.length === 0) {
      return undefined;
    }
  
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  var numbers = [5, 8, 2, 1, 10, 3];
  var maxNumber = findMax(numbers);
  console.log(maxNumber); // Output: 10
  