Here’s a bullet-point summary of JavaScript data types:

### **Primitive Data Types**:
- **Number**: Represents integers and floating-point numbers.
  - Example: `let num = 42;`
- **String**: Represents a sequence of characters.
  - Example: `let name = "John";`
- **Boolean**: Represents `true` or `false` values.
  - Example: `let isAvailable = true;`
- **Undefined**: A variable that has been declared but not assigned a value.
  - Example: `let notAssigned; // undefined`
- **Null**: Represents the intentional absence of any object value.
  - Example: `let emptyValue = null;`
- **Symbol**: A unique identifier (introduced in ES6).
  - Example: `let sym = Symbol('unique');`
- **BigInt**: Used for integers larger than `Number` can handle (introduced in ES2020).
  - Example: `let bigNum = BigInt(123456789012345678901234567890);`

### **Non-Primitive (Reference) Data Types**:
- **Object**: Collection of key-value pairs. 
  - Includes special types like **Array**, **Function**, **Date**, and **RegExp**.
  - Example: `let obj = {name: "John", age: 30};`
- **Array**: Stores multiple values in a list.
  - Example: `let arr = [1, 2, 3, "four"];`
- **Function**: A block of code that performs a task.
  - Example: `function greet() { console.log("Hello"); }`

### **Special Behaviors**:
- **NaN**: Represents "Not-a-Number" when an invalid numeric operation is performed.
  - Example: `let invalid = "abc" - 10; // NaN`
- **Infinity and -Infinity**: Represent numbers beyond the finite limit.
  - Example: `let inf = Infinity;`

### **Type Checking**:
- Use `typeof` to check the data type.
  - Example: `typeof 42; // "number"`

These data types and their behaviors are essential for programming in JavaScript.