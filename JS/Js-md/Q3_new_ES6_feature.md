ES6, also known as ECMAScript 2015, introduced several new features to JavaScript that greatly enhance the language's capabilities and improve developer productivity. Here are some of the key features you should be familiar with for an interview:

### 1. **let and const**

- **`let`**: Block-scoped variable declaration.
- **`const`**: Block-scoped constant declaration.

```javascript
let x = 10;
const y = 20;
```

### 2. **Arrow Functions**

Arrow functions provide a shorter syntax for writing function expressions and lexically bind the `this` value.

```javascript
const add = (a, b) => a + b;
```

### 3. **Template Literals**

Template literals allow for easier string interpolation and multi-line strings.

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
```

### 4. **Default Parameters**

Default parameters allow function parameters to have default values if no argument is provided.

```javascript
function multiply(a, b = 1) {
  return a * b;
}
```

### 5. **Destructuring Assignment**

Destructuring allows for unpacking values from arrays or properties from objects into distinct variables.

```javascript
// Array destructuring
const [a, b] = [1, 2];

// Object destructuring
const { name, age } = { name: "John", age: 30 };
```

### 6. **Rest and Spread Operators**

- **Rest operator**: Collects all remaining elements into an array.
- **Spread operator**: Spreads elements of an array or object.

```javascript
// Rest operator
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

// Spread operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

### 7. **Enhanced Object Literals**

Enhanced object literals provide a shorthand for defining properties and methods.

```javascript
const name = "John";
const person = {
  name,
  greet() {
    console.log("Hello");
  },
};
```

### 8. **Classes**

Classes provide a syntactic sugar for creating constructor functions and working with prototypes.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```

### 9. **Modules**

ES6 introduced a standardized module system that allows for importing and exporting modules.

```javascript
// In person.js
export class Person {
  constructor(name) {
    this.name = name;
  }
}

// In main.js
import { Person } from "./person.js";
```

### 10. **Promises**

Promises simplify asynchronous programming by providing a cleaner way to handle asynchronous operations.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate async operation
    setTimeout(() => resolve("Data received"), 1000);
  });
};

fetchData().then((data) => console.log(data));
```

### 11. **Symbol**

Symbols are a new primitive type that can be used as unique property keys.

```javascript
const sym = Symbol("unique");
const obj = {
  [sym]: "value",
};
```

### 12. **Iterators and Generators**

Iterators provide a way to define custom iteration behavior, and generators simplify iterator creation.

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

### 13. **Map and Set**

`Map` and `Set` are new data structures that provide more efficient and intuitive ways to store collections of values.

```javascript
const map = new Map();
map.set("key", "value");
console.log(map.get("key")); // value

const set = new Set([1, 2, 3, 3]);
console.log(set.size); // 3
```

### 14. **WeakMap and WeakSet**

`WeakMap` and `WeakSet` provide similar functionality to `Map` and `Set`, but they do not prevent garbage collection of the keys/values they store.

```javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "value");
console.log(weakMap.get(obj)); // value
```

### 15. **For-of Loop**

The `for-of` loop provides an easy way to iterate over iterable objects, such as arrays and strings.

```javascript
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
```

### 16. **Block-Scoped Functions**

Functions declared within blocks are now scoped to that block.

```javascript
{
  function scopedFunction() {
    return "scoped";
  }
  console.log(scopedFunction()); // 'scoped'
}
console.log(typeof scopedFunction); // 'undefined'
```

Being familiar with these features will help you not only write more modern and efficient JavaScript code but also prepare you for technical interviews where these concepts are commonly discussed.
