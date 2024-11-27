You can find the second maximum number in an array without using functions like `sort` or `Math.max` by iterating through the array and keeping track of both the maximum and second maximum numbers. Here’s a simple approach:

### Steps:
1. Initialize two variables, `max` and `secondMax`, to `-Infinity` (or a very small value).
2. Iterate through the array and update `max` if the current element is greater than `max`.
3. If the current element is not equal to `max` but greater than `secondMax`, update `secondMax`.

### Code Example:
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
```

### Explanation:
- `max` stores the largest number in the array.
- `secondMax` stores the second largest number.
- If `max` is updated, we assign its previous value to `secondMax`.
- During the iteration, if a number is less than `max` but greater than `secondMax`, it becomes the new `secondMax`.

This approach has a time complexity of **O(n)** since it only requires a single pass through the array.