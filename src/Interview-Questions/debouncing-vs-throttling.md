**Throttling** and **Debouncing** are two techniques used in JavaScript to control the rate at which a function is executed in response to events, such as scroll, resize, keypress, etc. Both are used to improve performance by limiting the frequency of function calls.

---

## **Debouncing**
Debouncing ensures that a function is invoked **after a specified delay** has elapsed **since the last time it was called**. This is useful for events that fire continuously (e.g., typing in a search box) but you only want the function to run once after the user has stopped triggering the event.

### Use Case:
- **Search inputs**: Debouncing can prevent making API calls on every keystroke. Instead, it waits for the user to finish typing before sending a request.

### Example of Debouncing:
```js
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);  // Clear any previously set timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);  // Execute the function after the delay
    }, delay);
  };
}

// Example usage:
function searchQuery() {
  console.log('Search initiated');
}

const debouncedSearch = debounce(searchQuery, 500);  // Waits for 500ms after the last input

// Now use debouncedSearch for events like keypress, input, etc.
document.getElementById('search').addEventListener('input', debouncedSearch);
```
In the example above, `debouncedSearch` will only execute the `searchQuery` function 500 milliseconds after the last input, no matter how fast the user types.

---

## **Throttling**
Throttling ensures that a function is called **at most once** during a specified time period, regardless of how often the event is triggered. This is useful for cases where you want to ensure that a function is executed periodically during a continuous event (like scrolling), but not on every trigger.

### Use Case:
- **Scroll events**: Throttling can limit the number of times a scroll event handler is fired (e.g., update a progress bar or load more content as the user scrolls).

### Example of Throttling:
```js
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);  // Execute the function if limit time has passed
    }
  };
}

// Example usage:
function handleScroll() {
  console.log('Scroll event triggered');
}

const throttledScroll = throttle(handleScroll, 1000);  // Executes once every 1 second

// Now use throttledScroll for scroll event
window.addEventListener('scroll', throttledScroll);
```
In this example, `handleScroll` will only be triggered once every 1000 milliseconds (1 second), regardless of how frequently the user scrolls.

---

## **Differences Between Throttling and Debouncing**

| Feature               | Throttling                                | Debouncing                                |
|-----------------------|-------------------------------------------|-------------------------------------------|
| **Definition**         | Limits the function execution to once in a set interval | Delays function execution until after the last event |
| **When to use**        | Suitable for events like scroll, resize, or mouse movement where the function should be invoked regularly | Suitable for events like search input or window resizing where you want to wait for the final event |
| **Execution frequency**| Function is called at regular intervals (e.g., once per second) | Function is called only after the event stops firing for a specified delay |
| **Example events**     | Scroll, resize, mouse movement            | Typing in a search bar, form validation   |

---

### **Summary:**

- **Debouncing** is used to ensure a function is executed **after a pause** in events (e.g., user stops typing).
- **Throttling** is used to ensure a function is called **at regular intervals** during continuous events (e.g., scrolling or window resizing).

Both techniques improve performance and user experience by preventing excessive function calls.