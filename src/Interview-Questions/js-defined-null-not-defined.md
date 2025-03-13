Here’s a concise explanation of the differences:

### 1. **`null` vs `undefined`:**
   - **`null`**:
     - Represents the intentional absence of a value.
     - It's a value you assign manually to indicate "nothing" or "empty."
     - Example:
       ```javascript
       let a = null; // a is explicitly set to "nothing."
       ```
   - **`undefined`**:
     - Represents the absence of a value or initialization.
     - It’s the default value of variables that have been declared but not initialized.
     - Example:
       ```javascript
       let b; // b is declared but not initialized, so it's undefined.
       ```

---

### 2. **`undefined` vs `not defined`:**
   - **`undefined`**:
     - The variable exists but has no assigned value.
     - Example:
       ```javascript
       let c;
       console.log(c); // undefined
       ```

   - **`not defined`**:
     - The variable does not exist in the current scope.
     - Accessing it results in a `ReferenceError`.
     - Example:
       ```javascript
       console.log(d); // ReferenceError: d is not defined
       ```

---

### Summary Table:

| **Term**         | **Exists in Scope?** | **Assigned Value?**  | **Result**                           |
|-------------------|----------------------|-----------------------|---------------------------------------|
| `null`           | Yes                  | Yes (`null`)          | Explicitly set as "nothing."          |
| `undefined`      | Yes                  | No                    | Default for uninitialized variables. |
| `not defined`    | No                   | N/A                   | Causes a `ReferenceError`.           |