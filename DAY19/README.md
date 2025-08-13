
## **Day 19 – JavaScript Arrays (Advanced Level – Part 2)**

### **1. Theory**

**Topic:** JavaScript Array Methods – `map()`, `filter()`, `reduce()`, `find()`, `some()`, `every()`.

**Definition:**
An **array** is a list-like object used to store multiple values.
JavaScript provides built-in **methods** to manipulate arrays without writing complex loops.

#### **Subtopics:**

1. `map()` – Creates a new array by applying a function to each element.
2. `filter()` – Creates a new array with elements that pass a condition.
3. `reduce()` – Reduces the array to a single value by applying a function.
4. `find()` – Returns the first element that matches a condition.
5. `some()` – Returns `true` if **any** element matches the condition.
6. `every()` – Returns `true` if **all** elements match the condition.

---

### **2. Syntax & Examples**

```javascript
// Example: map()
let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// Example: filter()
let numbers = [5, 12, 8, 130, 44];
let largeNumbers = numbers.filter(num => num > 10);
console.log(largeNumbers); // [12, 130, 44]

// Example: reduce()
let arr = [1, 2, 3, 4];
let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

---

### **3. Practice Questions (40 Total)**

**Basic Level (10)**

1. Given `let nums = [1, 2, 3, 4, 5]`, use `map()` to square each number.
2. Given `let nums = [2, 4, 6, 8]`, use `map()` to convert each number to a string.
3. Given `let words = ["apple", "banana", "grape"]`, use `map()` to get the length of each word.
4. Given `let prices = [100, 200, 300]`, use `map()` to apply a 10% discount.
5. Given `let nums = [5, 10, 15, 20]`, use `filter()` to get numbers greater than 10.
6. Given `let nums = [1, 2, 3, 4, 5]`, use `filter()` to keep only even numbers.
7. Given `let words = ["cat", "lion", "tiger", "dog"]`, use `filter()` to keep words with length > 3.
8. Given `let nums = [-5, 0, 10, -2]`, use `filter()` to keep positive numbers.
9. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to find the sum.
10. Given `let nums = [2, 3, 4]`, use `reduce()` to find the product.

**Intermediate Level (15)**
11\. Given `let nums = [5, 8, 12, 15]`, use `find()` to get the first number greater than 10.
12\. Given `let nums = [1, 3, 5, 7]`, use `some()` to check if the array contains an even number.
13\. Given `let nums = [2, 4, 6]`, use `every()` to check if all numbers are even.
14\. Given `let words = ["apple", "banana", "kiwi"]`, use `some()` to check if any word has length greater than 5.
15\. Given `let nums = [5, 10, 15, 20]`, use `reduce()` to find the average.
16\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to find the largest number.
17\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to reverse the array without `reverse()`.
18\. Given `let nums = [3, 6, 9]`, first double each element using `map()` and then sum them using `reduce()`.
19\. Given `let nums = [4, 9, 16]`, use `map()` to take the square root of each number.
20\. Given `let nums = [100, 200, 300]`, use `filter()` and `map()` together to find prices > 150 and apply 20% discount.
21\. Given `let students = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 40}]`, use `filter()` to find students with marks > 50.
22\. Given same `students` array, use `map()` to extract only names.
23\. Given same `students` array, use `reduce()` to find the total marks.
24\. Given `let nums = [2, 2, 4, 4]`, use `reduce()` to count how many times each number occurs.
25\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to create a string `"1-2-3-4"`.

**Advanced Level (15)**
26\. Given `let orders = [{price: 100}, {price: 200}, {price: 300}]`, use `reduce()` to get the total price.
27\. Given `let nums = [5, 8, 1, 3]`, use `reduce()` to find both min and max in one pass.
28\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to group even and odd numbers separately.
29\. Given `let users = [{name: "A", age: 20}, {name: "B", age: 17}]`, use `some()` to check if any user is under 18.
30\. Given `let users = [{name: "A", age: 20}, {name: "B", age: 17}]`, use `every()` to check if all are above 18.
31\. Given `let nums = [10, 20, 30]`, use `reduce()` to create an object `{sum: totalSum, average: avg}`.
32\. Given `let nums = [2, 3, 4]`, write a custom `map()` function without using built-in map.
33\. Given `let nums = [1, 2, 3, 4]`, write a custom `filter()` function without using built-in filter.
34\. Given `let nums = [5, 10, 15, 20]`, use `reduce()` to find the difference between numbers.
35\. Given `let nums = [1, 1, 2, 3, 3]`, use `reduce()` to remove duplicates.
36\. Given `let nums = [1, 2, 3]`, multiply each number by its index using `map()`.
37\. Given `let words = ["a", "bb", "ccc"]`, use `reduce()` to count total characters.
38\. Given `let nums = [5, 10, 15]`, use `reduce()` to find factorial of sum of numbers.
39\. Given `let nums = [10, 20, 30, 40]`, filter numbers divisible by 20 and then find their sum.
40\. Given `let nums = [1, 2, 3, 4, 5]`, use `map()`, `filter()`, and `reduce()` together to double even numbers and sum them.

---

### **4. Mini Project**

**Title:** Student Grade Processor
**Description:**

* Take an array of students with `{name, marks}`.
* Filter students with marks >= 50.
* Map them to a new array with `{name, grade}` where grade is `"Pass"` or `"Fail"`.
* Use `reduce()` to calculate total passing students.
* Display result in HTML table.

---

### **5. Git & GitHub Task**

1. Create a new repo **day19-array-methods**.
2. Add all practice solutions and the mini project in `/src` folder.
3. Commit changes with message `"Day 19: Array Methods Practice"`.
4. Push to GitHub.

---

### **6. AI Tools Task**

* Use ChatGPT/Copilot to:

  * Generate 5 additional array method challenges.
  * Ask AI to optimize your `reduce()` code for performance.

---


