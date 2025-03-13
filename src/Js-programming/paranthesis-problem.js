function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in map) {
            // Pop from stack and check if it matches
            const top = stack.pop() || '#';
            if (top !== map[char]) return false;
        } else {
            // Push opening brackets to stack
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("{[]}"));    // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[}"));     // false
