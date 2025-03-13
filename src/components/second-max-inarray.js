
function findSecondMax(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > max) {
      secondMax = max;  // previous max becomes second max
      max = num;        // update max
    } else if (num > secondMax && num < max) {
      secondMax = num;  // update second max
    }
  }

  return secondMax === -Infinity
    ? "No second maximum exists"  // case when all elements are the same
    : secondMax;
}

// Example usage:
const arr = [10, 5, 8, 20, 15];
console.log(findSecondMax(arr));  // Output: 15
