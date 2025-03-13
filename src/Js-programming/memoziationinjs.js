function memoize(fn) {
    const cache = {}; // Stores previously computed results

    return function (...args) {
        const key = JSON.stringify(args); // Convert args to a unique key
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key]; // Return cached result
        }
        
        console.log("Computing result:", key);
        const result = fn(...args); // Compute result
        cache[key] = result; // Store result in cache
        return result;
    };
}

// Example: Expensive Fibonacci Calculation
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Computed
console.log(memoizedFibonacci(10)); // Fetched from cache
