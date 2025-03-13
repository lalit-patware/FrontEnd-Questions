function digitalRoot(arr) {
    // Flatten the array into a single sum of all digits
    let sum = arr.join('').split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  
    // Reduce the sum to a single digit
    while (sum >= 10) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
  
    return sum;
  }
  
  // Example usage
  const array = [12, 34, 56];
  console.log(digitalRoot(array)); // Output: 3

  function digitalRootDigit(num){
    let convertedArray = num.toString().split('')
    // console.log(convertedArray)
    let sum = convertedArray.reduce((acc, val) => acc + parseInt(val) ,0)
    if(sum >=10) return digitalRoot(sum)
    return sum
}

console.log(digitalRootDigit(54321)); // Output: 6
// 5+4+3+2+1 = 15 => 1+5 => 6

  