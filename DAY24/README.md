

# 📅 Day 24 (15/08/2025) – Functions in JavaScript Part 3 (Higher-Order Functions & Callbacks)


## 1️⃣ Theory (Deep Explanation)

### 🔹 Functions Recap

* A **function** is a reusable block of code designed to perform a task.
* Functions can take **parameters**, return values, and be reused anywhere in the code.

### 🔹 Higher-Order Functions (HOF)

* A function that **takes another function as an argument** or **returns a function** is called a Higher-Order Function.
* Useful for **callbacks, array methods, and functional programming**.

Examples:

```js
function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  let name = "john";
  return callback(name);  // return a function i.e callback(name) with parameter name;
}

console.log(processUserInput(greet)); // Hello john


### 🔹 Callback Functions

* A **callback** is a function passed into another function to be executed later.
* Common in **asynchronous operations** like `setTimeout`, API calls, etc.

```js
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
```

---

## 2️⃣ 30 Practice Questions (with Hints)

### Basic (1–10)

1. Write a function `sayHello` that prints `"Hello World"`.
   🔹 *Hint: use `console.log` inside function.*
  

2. Create a function `square` that returns the square of a number.
   🔹 *Hint: `return num * num`.*

3. Write a function `isEven` that checks if a number is even.
   🔹 *Hint: Use modulus `%`.*

4. Write a function `greetUser` that takes a name and prints `"Hello, <name>"`.
   🔹 *Hint: Use string template literals.*

5. Create a function `sumArray` that takes `[1,2,3,4]` and returns the sum.
   🔹 *Hint: loop OR `reduce`.*

6. Write a function `findMax` that returns the maximum from `[10, 25, 3, 50]`.
   🔹 *Hint: loop with condition OR `Math.max(...arr)`.*

7. Create a function `countVowels` that returns vowels count in `"Frontend"`.
   🔹 *Hint: loop through string + check `"aeiou"`.*

8. Write a function `reverseString` that reverses `"JavaScript"`.
   🔹 *Hint: use `split("")`, `reverse()`, `join("")`.*

9. Write a function `multiplyArray` that multiplies all numbers in `[2,3,4]`.
   🔹 *Hint: initialize `1`, loop OR `reduce`.*

10. Write a function `isPalindrome` to check if `"madam"` is palindrome.
    🔹 *Hint: compare string with reversed version.*

---

### Intermediate (11–20)

11. Create a higher-order function `applyOperation(arr, operation)` that applies an operation (like square, double) to each element.
    🔹 *Hint: loop or `map` with callback.*

12. Write a function `filterEven` that filters even numbers from `[1,2,3,4,5,6]`.
    🔹 *Hint: use `filter` with condition.*

13. Create a function `findLongWords` that returns words > 5 letters from `["AI","Frontend","Mastery","JS"]`.
    🔹 *Hint: use `filter`.*

14. Write a function `doubleNumbers` that doubles numbers in `[1,2,3,4]`.
    🔹 *Hint: use `map`.*

15. Write a function `calculateTotal` that adds prices `[100,200,300]`.
    🔹 *Hint: use `reduce`.*

16. Create a function `firstLetterCaps` that capitalizes first letter of each word in `"i love javascript"`.
    🔹 \*Hint: use `split(" ")`, `map`, `charAt(0).toUpperCase()`. \*

17. Write a function `sortNumbers` to sort `[5,2,9,1]`.
    🔹 *Hint: use `sort((a,b)=>a-b)`.*

18. Write a function `wordCount` that counts words in `"Frontend Mastery Challenge"`.
    🔹 *Hint: use `split(" ")` and length.*

19. Create a callback example where `processArray([1,2,3], square)` returns `[1,4,9]`.
    🔹 *Hint: loop + callback function.*

20. Write a function `findMin` using `reduce()` for `[8,3,10,1]`.
    🔹 *Hint: compare accumulator and current.*

---

### Advanced (21–30)

21. Write a function `compose` that takes two functions and composes them (e.g., `double(square(3))`).
    🔹 *Hint: return function calling inside another.*

22. Create `customMap(arr, callback)` that works like `map()`.
    🔹 *Hint: loop through array + push callback result.*

23. Create `customFilter(arr, callback)` like `filter()`.
    🔹 *Hint: if condition true → push element.*

24. Write `executeAfterDelay(callback, time)` that runs callback after delay.
    🔹 *Hint: use `setTimeout`.*

25. Create `chainOperations(arr, [f1,f2,f3])` that applies multiple functions on array.
    🔹 *Hint: loop through functions array.*

26. Write `countOccurrences(arr)` that counts how many times each element occurs in `[1,2,2,3,1,4]`.
    🔹 *Hint: use object/map.*

27. Write `groupByLength(words)` that groups words by length from `["AI","code","mastery","frontend"]`.
    🔹 *Hint: loop + object push.*

28. Write `sortByProperty(arr, prop)` that sorts array of objects by property.
    🔹 *Hint: use `sort((a,b)=>a[prop]-b[prop])`.*

29. Write `debounce(func, delay)` function to limit function execution.
    🔹 *Hint: use `setTimeout`, `clearTimeout`.*

30. Write `throttle(func, delay)` function to limit calls at intervals.
    🔹 *Hint: use `Date.now()` + condition.*

---

## 3️⃣ Mini Project – Task Scheduler with Callbacks

**Goal:** Create a small program where:

* User inputs task name.
* Task gets added to a list.
* After 3 seconds, the task is marked as `"Completed"` using callback.

🔹 *Hint: use `setTimeout` + array + callback function.*

---

## 4️⃣ AI Tools Task

* Use **ChatGPT** to generate 5 real-world examples of callbacks in frontend projects (e.g., event listeners, API calls).
* Use **Copilot** to autocomplete your custom `map()` function.

---

## 5️⃣ Git & GitHub Task

* Create repo `day24-functions`.
* Add your **30 solutions + mini project**.
* Commit message: `"Day24: Higher Order Functions & Callbacks completed"`.
* Push to GitHub.


---
Scope, Hoisting, Lexical Scope, Closures, and Recursion**

## ✅ 1. THEORY – ⚡ Advanced Function Concepts

### 🔹 **Scope in JavaScript**

Scope defines **where variables are accessible**.

1. **Global Scope** – accessible everywhere.
2. **Function Scope** – variables declared inside a function are not accessible outside.
3. **Block Scope (`let`, `const`)** – accessible only within `{ }`.

```js
let globalVar = "I am global";

function demo() {
  let localVar = "I am local";
  console.log(globalVar); // ✅ accessible
  console.log(localVar);  // ✅ accessible
}
console.log(globalVar);   // ✅
console.log(localVar);    // ❌ error
```

---

### 🔹 **Hoisting**

* Hoisting = JavaScript moves **function & variable declarations** to the top of scope before execution.
* Function declarations are **hoisted fully** (can call before defining).
* Variables with `var` are hoisted but undefined, `let` & `const` are not initialized.

```js
sayHello(); // ✅ works

function sayHello() {
  console.log("Hello!");
}
```

---

### 🔹 **Lexical Scope**

* A function can access variables from **its parent scope**, but parent cannot access child variables.

```js
function outer() {
  let x = 10;
  function inner() {
    console.log(x); // ✅ 10
  }
  inner();
}
outer();
```

---

### 🔹 **Closures**

* A **closure** is formed when an inner function “remembers” variables from its outer function, even after the outer function has finished executing.

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let add = counter();
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
```

---

### 🔹 **Recursion**

* A function calling itself until a condition is met.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

📌 Use recursion when a problem can be broken into smaller, similar problems (trees, factorial, Fibonacci).

---

## ✅ 2. 🔍 Examples & Use Cases

1. **Scope Example:** Nested blocks with `let` vs `var`.
2. **Hoisting Example:** Calling a function before defining it.
3. **Closure Example:** Data privacy with `get` and `set` functions.
4. **Recursion Example:** Fibonacci sequence, factorial, directory traversal.

---

## ✅ 3. 💪 PRACTICE: 30 Advanced Function Questions

1. Print variable from global and local scope.
2. Demonstrate block scope using `let` & `var`.
3. Call a function before its declaration (hoisting).
4. Difference between function declaration & expression with hoisting.
5. Write a closure for generating unique IDs.
6. Create a counter with increment and decrement using closures.
7. Closure-based private bank account (deposit, withdraw).
8. Use closure to remember user’s name and greet them later.
9. Recursive function to print numbers 1 to 10.
10. Recursive factorial function.
11. Recursive Fibonacci function.
12. Check if a string is palindrome using recursion.
13. Reverse a string using recursion.
14. Find sum of digits using recursion.
15. Calculate power of number using recursion.
16. Demonstrate lexical scope with nested functions.
17. Write closure that returns multiplication of given base number.
18. Explain difference between lexical scope & closure using code.
19. Write recursive function for GCD (Euclidean Algorithm).
20. Recursive function to flatten nested arrays.
21. Closure for setting and getting a password.
22. Closure-based timer (countdown).
23. Recursive function to calculate length of string.
24. Closure to store last 5 function calls.
25. Recursive function to print binary representation of a number.
26. Closure for maintaining shopping cart items.
27. Recursive function for factorial with memoization.
28. Closure for caching API results (mock example).
29. Recursive function to check sum of array elements.
30. Recursive function to generate nested object keys.

---

## ✅ 4. Mini Project – 🔥 Closure-based Task Manager

📌 Build a **Task Manager** where:

* `addTask(task)` → adds a task.
* `getTasks()` → returns all tasks.
* `removeTask(task)` → removes a task.

```js
function taskManager() {
  let tasks = [];
  return {
    addTask: (task) => tasks.push(task),
    getTasks: () => tasks,
    removeTask: (task) => tasks = tasks.filter(t => t !== task)
  };
}

let myTasks = taskManager();
myTasks.addTask("Learn JS");
myTasks.addTask("Build Project");
console.log(myTasks.getTasks()); // ["Learn JS", "Build Project"]
myTasks.removeTask("Learn JS");
console.log(myTasks.getTasks()); // ["Build Project"]
```

---

## ✅ 5. Git & GitHub Task (Daily)

1. Create folder `day-24-functions-advanced`.
2. Save practice solutions in `scope-closure-recursion.js`.
3. Add mini project `task-manager.js`.
4. Update `README.md` with definitions + code examples.
5. Commit with messages:

```
git add .
git commit -m "Day 24: Functions Part 3 – Scope, Closures, Recursion"
git push
```

---

## ✅ 6. AI Tool Use (ChatGPT + Copilot)

| Tool            | Use Case                                       |
| --------------- | ---------------------------------------------- |
| ChatGPT         | Generate 5 closure-based interview questions.  |
| Copilot         | Autocomplete recursion solutions.              |
| Chrome DevTools | Test scope, hoisting, and closures in console. |

---

## ✅ 7. Technical Q\&A (Interview Prep)

**Q1. What is the difference between lexical scope and closure?**
**Q2. Can closures be used for data privacy? Example?**
**Q3. Why is recursion sometimes preferred over loops?**
**Q4. What happens if recursion has no base case?**
**Q5. How does hoisting work differently for `var`, `let`, and `const`?**

---

## 🎯 FINAL GOAL of Day 24:

* [x] Strong grasp of **scope, hoisting, closures, recursion**
* [x] 30 new problems solved
* [x] 1 mini project built
* [x] GitHub commits pushed
* [x] Interview-ready answers ✅

---
