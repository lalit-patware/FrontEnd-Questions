### **What is a Promise in JavaScript?**  
A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It helps in handling asynchronous code in a cleaner and more readable way compared to callbacks.  

A Promise has three states:  
1. **Pending** – Initial state, neither fulfilled nor rejected.  
2. **Fulfilled** – Operation completed successfully, returning a resolved value.  
3. **Rejected** – Operation failed, returning a reason (error).  

#### **Basic Syntax of a Promise**  
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000);
});

myPromise
  .then((result) => console.log(result))  // Runs on resolve
  .catch((error) => console.error(error)) // Runs on reject
  .finally(() => console.log("Promise completed")); // Runs regardless of resolve/reject
```

---

### **Promise Methods in JavaScript**
JavaScript provides various built-in methods to work with Promises:

#### 1. **Promise.resolve(value)**  
Creates a Promise that resolves with a given value.  
```javascript
Promise.resolve("Success").then(console.log); // Output: Success
```

#### 2. **Promise.reject(reason)**  
Creates a Promise that rejects with a given reason.  
```javascript
Promise.reject("Error occurred").catch(console.error); // Output: Error occurred
```

#### 3. **Promise.all(iterable)**  
Waits for all promises in an iterable (array) to resolve. If any promise rejects, it rejects the whole Promise.  
```javascript
const p1 = Promise.resolve(10);
const p2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then(console.log); // Output: [10, 20, 30] after 1 second
```

#### 4. **Promise.allSettled(iterable)**  
Waits for all promises to settle (either resolved or rejected) and returns their results as an array.  
```javascript
const p4 = Promise.resolve("Success");
const p5 = Promise.reject("Failed");

Promise.allSettled([p4, p5]).then(console.log);
/* Output:
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Failed" }
]
*/
```

#### 5. **Promise.race(iterable)**  
Returns the first settled (resolved/rejected) Promise.  
```javascript
const fastPromise = new Promise((resolve) => setTimeout(() => resolve("Fast"), 500));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000));

Promise.race([fastPromise, slowPromise]).then(console.log); // Output: Fast
```

#### 6. **Promise.any(iterable) (ES2021+)**  
Returns the first fulfilled promise. If all are rejected, it returns an `AggregateError`.  
```javascript
const p6 = Promise.reject("Error 1");
const p7 = Promise.resolve("First Success");
const p8 = Promise.reject("Error 2");

Promise.any([p6, p7, p8]).then(console.log).catch(console.error);
// Output: First Success
```

---

### **When to Use Promises?**
- Fetching data from an API (`fetch`)
- Reading files in Node.js
- Delaying execution (`setTimeout` wrapped in a Promise)
- Chaining multiple asynchronous operations

Would you like examples of chaining or async/await usage with Promises? 🚀