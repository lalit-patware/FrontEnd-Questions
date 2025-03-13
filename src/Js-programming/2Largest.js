const arr = [2, 3, 5, 'a', 'b'];

function secondLar(arr) {
  // Step 1: Filter out non-number elements
  const numbers = arr.filter((item) => typeof item === 'number');

  // Step 2: Remove duplicates and sort in descending order
  const uniqueSortedNumbers = [...new Set(numbers)].sort((a, b) => b - a);

  // Step 3: Return the second largest number or handle cases with less than two numbers
  return uniqueSortedNumbers.length >= 2 ? uniqueSortedNumbers[1] : null;
}

console.log(secondLar(arr)); // Output: 3
