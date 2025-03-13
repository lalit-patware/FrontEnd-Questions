### // 1-10: Basics & Type Coercion
console.log(typeof null); // ?
console.log(typeof NaN); // ?
console.log(1 + "1"); // ?
console.log(1 - "1"); // ?
console.log(true + true); // ?
console.log([] + []); // ?
console.log([] + {}); // ?
console.log({} + []); // ?
console.log(+true); // ?
console.log(!!"false" == !!"true"); // ?

### // 11-20: Hoisting & Scope
console.log(a); var a = 10; // ?
console.log(b); let b = 10; // ?
function test() { console.log(x); var x = 5; } test(); // ?
function test() { var x = 10; { let x = 20; console.log(x); } console.log(x); } test(); // ?
console.log(typeof myVar); var myVar = "hello"; // ?
let foo = function () { return "hello"; }; console.log(typeof foo()); // ?
let x = 10; { console.log(x); let x = 20; } // ?
function foo() { if (false) { var x = 10; } console.log(x); } foo(); // ?
(function() { var a = b = 3; })(); console.log(typeof b); // ?
let a = 1; { let a = 2; console.log(a); } console.log(a); // ?

### // 21-30: Closures & IIFE
var a = 10; function outer() { var b = 20; function inner() { console.log(a, b); } return inner; } var innerFn = outer(); innerFn(); // ?
for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1000); } // ?
for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1000); } // ?
function createCounter() { let count = 0; return () => console.log(++count); } const counter = createCounter(); counter(); counter();
const add = (function () { let counter = 0; return function () { return ++counter; }; })(); console.log(add()); console.log(add());
const foo = (() => { let count = 0; return () => console.log(count++); })(); foo(); foo();
const increment = () => { let counter = 0; return () => counter++; }; const inc = increment(); console.log(inc()); console.log(inc());
(function () { var a = b = 10; })(); console.log(typeof b); console.log(typeof a);
function outer() { var a = 10; return function () { console.log(a); }; } outer()();
(function () { console.log(this); })(); // ?

### // 31-40: Prototypes & `this`
function Person(name) { this.name = name; } const p1 = new Person("John"); console.log(p1.__proto__ === Person.prototype);
const obj = { name: "John", greet: function () { console.log(this.name); } }; setTimeout(obj.greet, 1000);
const obj = { name: "Alice", greet: function () { setTimeout(() => console.log(this.name), 1000); } }; obj.greet();
const person = { name: "John", sayHi: function () { console.log(`Hi ${this.name}`); } }; const greet = person.sayHi; greet();
const obj = { name: "Alice", sayHi: function () { return () => console.log(this.name); } }; const hi = obj.sayHi(); hi();
function Foo() { this.name = "Foo"; } Foo.prototype.getName = function () { return this.name; }; const obj = new Foo(); console.log(obj.getName());
function A() {} A.prototype.x = 10; const obj = new A(); console.log(obj.x);
const obj = { a: 1, b: 2, sum() { return this.a + this.b; } }; console.log(obj.sum());
const obj = { a: 5, double: function () { return () => console.log(this.a * 2); } }; obj.double()();
const obj = { a: 10, fn: function () { console.log(this.a); } }; const fnCopy = obj.fn; fnCopy();

### // 41-50: Promises & Async/Await
console.log("Start"); setTimeout(() => console.log("Timeout"), 0); Promise.resolve().then(() => console.log("Promise")); console.log("End");
async function foo() { return 10; } console.log(foo());
async function foo() { return 10; } foo().then(console.log);
console.log("Start"); async function foo() { console.log("Inside async"); } foo(); console.log("End");
console.log("Start"); setTimeout(() => console.log("Timeout"), 0); Promise.resolve().then(() => console.log("Promise")); console.log("End");
async function foo() { return Promise.resolve(42); } foo().then(console.log);
async function foo() { let result = await Promise.resolve(50); console.log(result); } foo();
console.log("Start"); Promise.resolve().then(() => console.log("Promise")); console.log("End");
async function foo() { return await Promise.resolve(100); } foo().then(console.log);
console.log("Start"); setTimeout(() => console.log("Timeout"), 0); Promise.resolve().then(() => console.log("Promise")); console.log("End");

### // 51-60: Event Loop
console.log("Start"); setTimeout(() => console.log("Timeout"), 0); Promise.resolve().then(() => console.log("Promise")); console.log("End");
console.log("A"); setTimeout(() => console.log("B"), 0); Promise.resolve().then(() => console.log("C")); console.log("D");
console.log(1); setTimeout(() => console.log(2), 1000); setTimeout(() => console.log(3), 0); console.log(4);
async function test() { console.log("A"); await Promise.resolve(); console.log("B"); } test(); console.log("C");
console.log("Start"); setTimeout(() => console.log("Timeout"), 0); new Promise((res) => res()).then(() => console.log("Promise")); console.log("End");

### // 61-70: Miscellaneous
let arr = [1, 2, 3]; arr[-1] = 10; console.log(arr.length);
console.log(0.1 + 0.2 === 0.3);
console.log("5" - - "2");
let x = {}; console.log(x.toString());
console.log(!!""); console.log(!!0);
let obj = {}; console.log(obj.toString());
console.log(typeof new Number(5));
console.log([] == []);
console.log({} + {});
console.log(1 < 2 < 3);
