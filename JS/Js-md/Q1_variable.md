In JavaScript, `let`, `const`, and `var` are all used to declare variables, but they have distinct differences in terms of scope, hoisting, and mutability. Here’s a detailed comparison of these three keywords:

### 1. `var`

- **Scope**: `var` is function-scoped. It means that if a variable is declared within a function, it is only accessible within that function. If declared outside a function, it is globally scoped.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope, meaning they are accessible even before their declaration, though they are initialized with `undefined`.
- **Re-declaration**: Variables declared with `var` can be re-declared within the same scope without causing an error.
- **Example**:
  ```javascript
  function example() {
    console.log(x); // undefined
    var x = 10;
    console.log(x); // 10
  }
  example();
  ```

### 2. `let`

- **Scope**: `let` is block-scoped. It means that the variable is only accessible within the block in which it is declared (a block is typically defined by `{}`).
- **Hoisting**: Variables declared with `let` are also hoisted, but unlike `var`, they are not initialized. Accessing them before the declaration results in a `ReferenceError`.
- **Re-declaration**: Variables declared with `let` cannot be re-declared within the same block scope.
- **Example**:
  ```javascript
  function example() {
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 20;
    console.log(y); // 20
  }
  example();
  ```

### 3. `const`

- **Scope**: `const` is also block-scoped, similar to `let`.
- **Hoisting**: Variables declared with `const` are hoisted but are not initialized. Accessing them before the declaration results in a `ReferenceError`.
- **Re-declaration**: Variables declared with `const` cannot be re-declared within the same block scope.
- **Mutability**: `const` is used to declare variables that are not meant to be reassigned. However, if the variable is an object or an array, the contents of the object or array can be modified.
- **Example**:
  ```javascript
  function example() {
    // console.log(z); // ReferenceError: Cannot access 'z' before initialization
    const z = 30;
    console.log(z); // 30

    const obj = { a: 1 };
    obj.a = 2; // This is allowed
    console.log(obj.a); // 2

    // z = 40; // TypeError: Assignment to constant variable.
  }
  example();
  ```

### Summary Table

| Feature        | `var`                               | `let`                        | `const`                      |
| -------------- | ----------------------------------- | ---------------------------- | ---------------------------- |
| Scope          | Function-scoped                     | Block-scoped                 | Block-scoped                 |
| Hoisting       | Hoisted, initialized as `undefined` | Hoisted, but not initialized | Hoisted, but not initialized |
| Re-declaration | Allowed                             | Not allowed                  | Not allowed                  |
| Mutability     | Can be reassigned                   | Can be reassigned            | Cannot be reassigned         |

Understanding these differences is crucial for writing predictable and bug-free JavaScript code, especially as modern JavaScript development emphasizes the use of `let` and `const` over `var`.
