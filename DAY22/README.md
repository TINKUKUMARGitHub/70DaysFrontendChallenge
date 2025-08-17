

## 📅 **Day 22 – 13/08/2025**

**Topic:** Functions in JavaScript – Part 1
**Goal:** Understand what functions are, why they’re used, how to define & call them, parameters, arguments, return values. Build strong logic for future React & Node.js work.

---

## **1. Theory – Functions in JavaScript**

### **Definition**

A **function** is a block of reusable code designed to perform a specific task. It helps in organizing code, avoiding repetition, and improving readability.

---

### **Why Functions Are Important**

* **Reusability:** Write once, use multiple times.
* **Modularity:** Break large problems into smaller, manageable parts.
* **Maintainability:** Easy to debug and update.
* **Readability:** Gives meaningful structure to the code.

---

### **Basic Syntax**

```javascript
function functionName(parameters) {
    // code to be executed
    return value; // optional
}
```

---

### **How Functions Work**

1. **Define** the function (create it).
2. **Call** the function (execute it).
3. **Pass** values through parameters.
4. **Return** results with the `return` keyword.

---

### **Key Terms**

* **Function Declaration:** Defining a function with the `function` keyword.
* **Function Call:** Executing the function by using its name followed by `()`.
* **Parameter:** Variable listed inside parentheses during function definition.
* **Argument:** Actual value passed to the function when calling it.
* **Return Statement:** Sends a value back from the function to where it was called.


### **Example**

```javascript
function greet(name) {  // 'name' is parameter
    return `Hello, ${name}!`;
}

console.log(greet("Tinku")); // "Tinku" is argument
```

---

### **Types of Functions (Part 1 Scope)**

1. **Function Declaration**
2. **Function with Parameters**
3. **Function with Return Value**
4. **Function without Parameters**
5. **Function without Return Value**

---

### **Real-World Analogy**

Think of a **vending machine**:

* **Machine name** → Function name.
* **Money inserted** → Argument.
* **Snack returned** → Return value.

---

## **2. Subtopics Covered Today**

* What is a function?
* Why use functions?
* Syntax of function declaration.
* Parameters vs arguments.
* Using return values.
* Calling functions multiple times.
* Storing return values in variables.

---

## **3. Practice Questions (30)**

### **Basic – Understanding Functions**

1. Create a function `sayHello()` that prints "Hello World".
2. Write a function `square(num)` that returns the square of a number.
3. Create a function that adds two numbers and returns the result.
4. Make a function `isEven(num)` that returns `true` if the number is even, otherwise `false`.
5. Create a function `greet(name)` that returns `"Hello, <name>!"`.

### **Intermediate – Parameters & Return**

6. Function that returns the area of a rectangle (length × width).
7. Function that returns the cube of a number.
8. Function `calculateBill(amount, taxRate)` that adds tax to amount.
9. Function `convertToFahrenheit(celsius)` to convert Celsius to Fahrenheit.
10. Function `findMax(a, b)` to return the larger number.

### **Logic Practice**

11. Function `sumOfThree(a, b, c)` returning their sum.
12. Function `isPositive(num)` returning true if positive.
13. Function `daysToWeeks(days)` returning number of weeks.
14. Function that returns factorial of a number using loop.
15. Function `isDivisibleBy(num, divisor)` returning true/false.

### **Mini Problem Solving**

16. Function that takes two strings and returns them concatenated.
17. Function that takes a number and returns its multiplication table (1–10).
18. Function `isLeapYear(year)` returning true/false.
19. Function to reverse a string without using built-in methods.
20. Function `getFullName(firstName, lastName)` returning full name.

### **Advanced Thinking**

21. Function that checks if a number is prime.
22. Function to count vowels in a string.
23. Function that returns the sum of all numbers from 1 to n.
24. Function `getGrade(marks)` returning A/B/C/F based on marks.
25. Function to check if a given string is a palindrome.
26. Function to calculate compound interest.
27. Function `getFactorialRecursion(n)` using recursion.
28. Function that returns the minimum of three numbers.
29. Function to generate first `n` Fibonacci numbers.
30. Function to check if a given year is a century year.

---

## **4. Mini Project – Function-based Calculator**

**Description:**
Build a calculator that:

* Uses **functions** for each operation (`add`, `subtract`, `multiply`, `divide`).
* Takes user input for two numbers and operation type.
* Returns result using `return` statement.

**Example:**

```javascript
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Cannot divide by zero"; }

console.log(add(5, 3));       // 8
console.log(divide(10, 2));  // 5
```

---

## **5. AI Tools Task**

* Use **ChatGPT** to:

  1. Generate 10 different function-based problems for practice.
  2. Ask ChatGPT to debug a function with an error.
  3. Use Copilot to autocomplete function logic inside VS Code.

---

## **6. Git & GitHub Task**

1. Create a new folder `day22-functions-part1`.
2. Save all practice question solutions in `functions.js`.
3. Create a `README.md` explaining today’s topic and examples.
4. Commit & push:

```bash
git add .
git commit -m "Day 22: Functions Part 1 – basics, parameters, return values"
git push
```
