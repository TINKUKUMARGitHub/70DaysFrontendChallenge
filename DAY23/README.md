## 📅 **Day 23 – 14/08/2025**

**Topic:** Functions in JavaScript – Part 2
**Goal:** Learn different ways of creating functions, understand arrow functions, and master default parameters for cleaner and modern JavaScript code.

---

## **1. Theory – Advanced Function Syntax**

### **1. Function Expressions**

A function stored inside a variable.

* **Does not have a name** (anonymous) or can have a name (named function expression).
* Must be defined **before** calling (no hoisting for function expressions).

**Syntax:**

```javascript
const greet = function(name) {
    return `Hello, ${name}`;
};
console.log(greet("Amit"));
```

### **2. Arrow Functions (ES6)**

A shorter syntax for writing functions.

* Always anonymous.
* `this` behaves differently (takes from surrounding context).
* Best for small, one-line functions.

**Syntax:**

```javascript
const greet = (name) => `Hello, ${name}`;
console.log(greet("Amit"));
```

### **3. Default Parameters**

Allows you to set default values for parameters in case no argument is passed.

**Syntax:**

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet()); // "Hello, Guest"

### **Comparison Table**

| Feature        | Function Declaration | Function Expression            | Arrow Function                |
| -------------- | -------------------- | ------------------------------ | ----------------------------- |
| Hoisting       | ✅ Yes                | ❌ No                           | ❌ No                          |
| Syntax         | Long                 | Medium                         | Short                         |
| `this` Binding | Own                  | Own                            | Inherits from parent          |
| Use Case       | General purpose      | When passing functions as data | Short callbacks, simple logic |

---

## **2. Subtopics Covered Today**

* Function Expressions
* Arrow Functions (Single parameter, multiple parameters, implicit return)
* Default Parameters
* When to use arrow functions vs normal functions
* Limitations of arrow functions (`this`, `arguments`)

---

## **3. Practice Questions (30)**

### **Function Expressions**

1. Create a function expression to multiply two numbers.
2. Function expression to check if a number is positive.
3. Function expression to find the minimum of two numbers.
4. Store a function expression that reverses a string.
5. Create a function expression to check if a string contains a specific character.

### **Arrow Functions – Basics**

6. Convert the function `add(a, b)` into an arrow function.
7. Arrow function that returns the square of a number.
8. Arrow function that checks if a number is odd.
9. Arrow function to concatenate two strings.
10. Arrow function that returns `"Good Morning"` with a name.

### **Arrow Functions – Advanced**

11. Arrow function to filter even numbers from an array.
12. Arrow function to return the sum of all array elements.
13. Arrow function to count vowels in a string.
14. Arrow function to find factorial of a number.
15. Arrow function to find max number in an array.

### **Default Parameters**

16. Function with default parameter for name greeting.
17. Function with default tax rate for bill calculation.
18. Function that calculates area of rectangle with default width = 5.
19. Function with default parameter for discount percentage.
20. Function with default parameter to print multiplication table of 10.

### **Mixed Practice**

21. Create a calculator using arrow functions for each operation.
22. Arrow function with default parameters to calculate BMI.
23. Function expression that returns whether a year is leap year.
24. Arrow function to generate n Fibonacci numbers.
25. Function expression to return initials of a name.
26. Arrow function to check palindrome.
27. Function expression with default parameter to greet user in uppercase.
28. Arrow function to count words in a sentence.
29. Function expression to find intersection of two arrays.
30. Arrow function to return average of numbers in array.

---

## **4. Mini Project – To-Do List Utility Functions**

**Description:**
Create small **utility functions** for a to-do list app using **function expressions** and **arrow functions**:

* `addTask(task)` → adds task to array.
* `removeTask(index)` → removes task from array.
* `listTasks()` → displays all tasks.

**Example:**

```javascript
let tasks = [];

const addTask = task => tasks.push(task);
const removeTask = index => tasks.splice(index, 1);
const listTasks = () => console.log(tasks);

addTask("Learn JS");
addTask("Practice Git");
listTasks(); // ["Learn JS", "Practice Git"]
removeTask(0);
listTasks(); // ["Practice Git"]
```

---

## **5. AI Tools Task**

* Use **ChatGPT** to:

  1. Convert 10 of your old functions into arrow functions.
  2. Ask ChatGPT to optimize your code using default parameters.
  3. Use Copilot in VS Code to generate quick utility arrow functions.

---

## **6. Git & GitHub Task**

1. Create a new folder `day23-functions-part2`.
2. Save all practice question solutions in `functions-advanced.js`.
3. Create a `README.md` with:

   * Definitions
   * Syntax examples
   * Advantages and limitations
4. Commit & push:

```bash
git add .
git commit -m "Day 23: Function Expressions, Arrow Functions, Default Parameters"
git push
```
