### **JavaScript Prototypes - Easy Summary**  

🔹 **What is a Prototype?**  
A **prototype** is an object from which other objects inherit properties and methods.  

🔹 **How Prototypal Inheritance Works:**  
- Every JavaScript object has a hidden `[[Prototype]]` pointing to another object.  
- If a property/method is not found on an object, JavaScript looks up the **prototype chain** until it finds it or reaches `null`.  

🔹 **Key Terms:**  
1. **`[[Prototype]]`** – The internal reference to an object's prototype.  
2. **`Object.prototype`** – The base prototype that all objects inherit from (e.g., `toString()`).  
3. **`prototype` (on functions)** – Defines shared properties/methods for instances created using a constructor function.  

🔹 **Ways to Use Prototypes:**  
✔ **`Object.create(proto)`** – Creates a new object with `proto` as its prototype.  
✔ **Constructor functions** – Use `Function.prototype` to add methods shared by instances.  

🔹 **Example:**  
```javascript
const person = { greet: () => console.log("Hello!") };
const user = Object.create(person);
user.greet(); // Inherits and runs "Hello!"
```  

🔹 **Benefits of Prototypes:**  
✅ Saves memory – Methods are shared instead of copied.  
✅ Allows dynamic modifications – Changes in prototypes reflect in all instances.  

### **Quick Rule to Remember:**  
➡ If an object doesn’t have a property, **it looks up the prototype chain** until it finds it or reaches `null`.


simple visual representation 🚀

  Object → Object.prototype → null
     ↑
   person (has greet method)
     ↑
   user (inherits from person)

### Example Code Representation:
   const person = { greet: () => console.log("Hello!") };
const user = Object.create(person);

console.log(user.greet); // Inherited from person
console.log(user.hasOwnProperty("greet")); // false (not directly on user)
console.log(Object.prototype.hasOwnProperty("toString")); // true


Here's a simple visual representation of JavaScript prototypes and how inheritance works:

Prototypal Inheritance Flow
pgsql
Copy
Edit
  Object → Object.prototype → null
     ↑
   person (has greet method)
     ↑
   user (inherits from person)
Example Code Representation:
javascript
Copy
Edit
const person = { greet: () => console.log("Hello!") };
const user = Object.create(person);

console.log(user.greet); // Inherited from person
console.log(user.hasOwnProperty("greet")); // false (not directly on user)
console.log(Object.prototype.hasOwnProperty("toString")); // true
Prototype Chain - Step by Step
1️⃣ user.greet() → Not found in user, so JavaScript looks up to person.
2️⃣ greet exists in person, so it runs console.log("Hello!").
3️⃣ If greet wasn’t in person, JavaScript would check Object.prototype.
4️⃣ If not found, it stops at null.

Visualizing Constructor Function Prototypes
javascript
Copy
Edit
Person.prototype → Object.prototype → null
     ↑
  user1 (inherits greet)
     ↑
  user2 (inherits greet)
Example:

javascript
Copy
Edit
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};

const user1 = new Person("Alice");
const user2 = new Person("Bob");

user1.greet(); // Hello, Alice
user2.greet(); // Hello, Bob


### Quick Cheat Sheet
Concept	Description
Object.create()	Creates a new object with a prototype
.prototype	Used on constructor functions to define shared methods
__proto__ (deprecated)	Access an object's prototype
Object.prototype	Base prototype for all objects

