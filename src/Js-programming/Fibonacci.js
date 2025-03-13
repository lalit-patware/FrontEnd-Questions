function fibonacciSequence(n) {
    // Initialize an array to hold the Fibonacci sequence
    let sequence = [];
    // Handle base cases
    if (n <= 0) {
        return sequence; // Return empty array for non-positive numbers
    }
    // First term is always 0
    sequence.push(0);
    if (n === 1) {
        return sequence; // Return only the first term
    }
    // Second term is always 1
    sequence.push(1);
    // Generate the rest of the Fibonacci sequence
    for (let i = 2; i < n; i++) {
        // The next term is the sum of the previous two terms
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
// Example usage:
console.log(fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
