### **Currying in JavaScript (Short Explanation)**  

**Currying** is a technique where a function takes arguments **one at a time**, returning a new function at each step until all arguments are provided.  

#### **Example**  
✅ **Non-Curried Function:**  
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```
✅ **Curried Function:**  
```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(2)(3)); // 5
```
### **Why Use Currying?**  
✔ **Reusability:** Create partial functions (`const add5 = add(5)`).  
✔ **Composability:** Makes function composition easier.  
✔ **Readability:** Modular, cleaner code.  

### **Dynamic Currying Function**  
```javascript
function curry(func) {
  return function curried(...args) {
    return args.length >= func.length
      ? func.apply(this, args)
      : (...nextArgs) => curried(...args, ...nextArgs);
  };
}

// Example
function multiply(a, b, c) {
  return a * b * c;
}
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2, 3, 4)); // 24
```
### **Summary**  
- Currying **breaks down** a multi-argument function into **one argument per function call**.  
- It improves **reusability, composition, and readability**.  
- Helps in **functional programming** and **partial application**. 🚀