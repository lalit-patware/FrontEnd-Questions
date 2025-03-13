### **Event Loop in JavaScript**

JavaScript is single-threaded, meaning it can only execute one task at a time in the main thread. However, JavaScript can handle asynchronous operations (like I/O operations, HTTP requests, and timers) using a mechanism called the **Event Loop**.

The event loop continuously checks whether the call stack is empty and whether there are any pending callbacks waiting in the task queues. It coordinates between the call stack and task queues to manage asynchronous operations.
https://www.lydiahallie.com/blog/event-loop?ref=dailydev
### **Key Concepts:**

1. **Call Stack:**
   - The call stack is where JavaScript functions are executed in the order they are called. Functions are added to the stack when invoked and removed once they return a value.

2. **Web APIs:**
   - Web APIs (like `setTimeout`, DOM events, or HTTP requests) are part of the browser environment (or Node.js), not part of the JavaScript language itself. They handle asynchronous operations outside of the main call stack.

3. **Callback Queue (Task Queue):**
   - When an asynchronous operation (like `setTimeout` or `fetch`) completes, its callback is placed in the callback queue, waiting to be executed.

4. **Event Loop:**
   - The event loop checks the call stack. If the call stack is empty, it picks up tasks from the callback queue and moves them to the call stack for execution. It continually loops through this process, ensuring the program doesn't freeze while waiting for asynchronous operations.

5. **Microtask Queue:**
   - In addition to the callback queue (also known as the **macro task queue**), there's a **microtask queue** (for promises, `MutationObserver`, etc.). Microtasks have higher priority than macrotasks and are executed before any other queued tasks.

### **How the Event Loop Works:**

1. **Synchronous Execution:** 
   The event loop processes tasks in the call stack first. All synchronous code is executed here.

2. **Asynchronous Execution:** 
   When an asynchronous operation is called (e.g., `setTimeout` or `fetch`), it's handed over to the Web API. Once the operation completes, its callback is sent to the callback queue.

3. **Empty Call Stack:**
   Once the call stack is empty (no more synchronous code to run), the event loop checks the callback queue. It moves the oldest task from the callback queue to the call stack for execution.

4. **Microtasks Priority:**
   Before executing tasks from the callback queue, the event loop checks the microtask queue. If there are any microtasks (like promise resolutions), they are executed before moving to the callback queue.

### **Example of the Event Loop in Action:**

```js
console.log('Start');  // 1st: Synchronous code

setTimeout(() => {
  console.log('Timeout');  // 4th: Asynchronous code (Macro Task)
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');  // 3rd: Asynchronous code (Micro Task)
});

console.log('End');  // 2nd: Synchronous code


// setTimeout(() => {

//   console.log('Timeout'); 4

// }, 0);

// new Promise((resolve, reject) => {

//   console.log('Promise executor');  1

//   resolve();

// }).then(() => {

//   console.log('Promise resolved'); 3

// });

// console.log('End'); 2
```

**Output:**
```
Start
End
Promise
Timeout
```

- `Start` and `End` are synchronous and are executed first.
- `Promise` is added to the microtask queue and executed after the synchronous code.
- `Timeout` is added to the callback queue (macro task) and executed after all microtasks have finished.

---

### **Common Interview Questions on Event Loop:**

1. **Explain the event loop in JavaScript.**
   - The event loop is responsible for handling asynchronous code in JavaScript. It checks the call stack for synchronous code, and when the stack is empty, it processes callbacks from the task queues (microtask and callback queues).

2. **What is the difference between microtasks and macrotasks in the event loop?**
   - **Microtasks** (e.g., promises) have higher priority and are executed before macrotasks. Microtasks are executed immediately after the current operation completes and before any rendering.
   - **Macrotasks** (e.g., `setTimeout`, I/O) are placed in the callback queue and are executed after microtasks and rendering.

3. **What will be the output of the following code?**
   ```js
   console.log('Start');

   setTimeout(() => console.log('setTimeout'), 0);

   Promise.resolve().then(() => console.log('Promise'));

   console.log('End');
   ```

   **Answer:**
   ```
   Start
   End
   Promise
   setTimeout
   ```
   - The `console.log('Start')` and `console.log('End')` statements are synchronous and executed first.
   - The promise callback (a microtask) runs next.
   - The `setTimeout` callback (a macrotask) is executed last.

4. **What is the call stack in JavaScript?**
   - The call stack is a data structure used by the JavaScript engine to track function calls. When a function is invoked, it is added to the stack, and once it finishes execution, it is popped from the stack.

5. **Why is JavaScript asynchronous despite being single-threaded?**
   - JavaScript is single-threaded, but it can handle asynchronous operations through mechanisms like the event loop and callback queue. These allow long-running operations (like I/O, timers, and network requests) to be delegated to the browser or Node.js, so the main thread remains free to continue executing other code.

6. **How would you explain the difference between the call stack, task queue, and event loop to a beginner?**
   - **Call stack**: Where JavaScript keeps track of the current function that's being executed. It processes code line by line.
   - **Task queue**: Where asynchronous callbacks wait until the call stack is clear before they can run.
   - **Event loop**: The process that checks the call stack and task queue to decide what code should run next.

7. **What happens when you use `setTimeout` with 0 ms in JavaScript?**
   - Even though `setTimeout` is set to 0 ms, it still places the callback in the callback queue (macrotask queue). The callback will not execute until all synchronous code and any microtasks have finished. The minimum delay is not immediate, as it still has to wait for the call stack to be empty.

8. **Explain the output of the following code:**
   ```js
   setTimeout(() => console.log('timeout'), 0);

   Promise.resolve().then(() => console.log('promise'));

   console.log('log');
   ```

   **Answer:**
   ```
   log
   promise
   timeout
   ```

   - `console.log('log')` runs synchronously.
   - The promise callback (a microtask) runs next.
   - The `setTimeout` callback (a macrotask) runs last.

---