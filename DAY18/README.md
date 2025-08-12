# 📅 Day 18 – 09/08/2025

## **JavaScript Arrays – Part 2 (Advanced Concepts & Operations)**

---

## **1. Theory – Advanced Array Concepts**

We already covered basics in **Part 1** (creation, access, modification, looping).
Today, we go **deeper** into real-world, pro-level array handling.

---

### **1.1. Array Mutator Methods (Change Original Array)**

| Method      | Purpose                                | Example             |
| ----------- | -------------------------------------- | ------------------- |
| `push()`    | Add elements to **end**                | `arr.push(4,5)`     |
| `pop()`     | Remove element from **end**            | `arr.pop()`         |
| `unshift()` | Add elements to **start**              | `arr.unshift(0)`    |
| `shift()`   | Remove element from **start**          | `arr.shift()`       |
| `splice()`  | Add/Remove at specific index           | `arr.splice(2,1)`   |
| `reverse()` | Reverse order                          | `arr.reverse()`     |
| `sort()`    | Sort elements (string by default)      | `arr.sort()`        |
| `fill()`    | Fill all or some elements with a value | `arr.fill(0, 1, 3)` |

---

### **1.2. Array Accessor Methods (Do NOT change original)**

| Method          | Purpose                | Example              |
| --------------- | ---------------------- | -------------------- |
| `concat()`      | Merge arrays           | `arr1.concat(arr2)`  |
| `slice()`       | Extract part of array  | `arr.slice(1,3)`     |
| `includes()`    | Check if value exists  | `arr.includes(5)`    |
| `indexOf()`     | First index of value   | `arr.indexOf(5)`     |
| `lastIndexOf()` | Last index of value    | `arr.lastIndexOf(5)` |
| `join()`        | Convert array → string | `arr.join("-")`      |
| `toString()`    | Convert array → string | `arr.toString()`     |

---

### **1.3. Array Iteration Methods**

* **`forEach()`** → Loops through elements (no return)
* **`map()`** → Creates a new array from existing elements
* **`filter()`** → Creates new array with condition
* **`reduce()`** → Reduces array to single value
* **`find()`** → Returns first element matching condition
* **`findIndex()`** → Returns index of first match
* **`some()`** → Returns true if at least 1 element passes condition
* **`every()`** → Returns true if all elements pass condition

---

### **1.4. Real-world Example**

```javascript
let prices = [200, 300, 150, 400, 100];

// Filter items less than 300
let cheapItems = prices.filter(price => price < 300);

// Increase all prices by 10%
let updatedPrices = prices.map(price => price * 1.1);

// Total price using reduce
let total = prices.reduce((sum, price) => sum + price, 0);

console.log(cheapItems); 
console.log(updatedPrices);
console.log(total);
```

---

## **2. 35 Fresh Practice Questions (No Repeats from Day 17)**

---

### **Basic (10 Qs)**

1. Add 3 numbers at the start of an array using `unshift()`.
2. Remove the first 2 elements from an array using `splice()`.
3. Merge two arrays without changing originals.
4. Reverse an array without using `reverse()` method.
5. Find the index of element `50` in `[10,20,30,40,50]`.
6. Convert an array of fruits into a string separated by `" & "`.
7. Replace the 2nd element of an array with `"JavaScript"`.
8. Check if `"blue"` exists in `["red","green","blue"]`.
9. Extract only the middle two elements from `[1,2,3,4,5,6]`.
10. Count how many times `"apple"` appears in an array.

---

### **Intermediate (15 Qs)**

11. Given `[1,2,3,4,5]`, double each value using `map()`.
12. Find all numbers > 50 in `[20,60,40,90,30]`.
13. Find the first negative number in `[10,-2,5,-8,20]`.
14. Check if **all** numbers are even in `[2,4,6,8]`.
15. Check if **any** number is greater than 100.
16. Remove all falsy values from `[0,1,false,2,"",3]`.
17. Flatten `[1,[2,3],[4,[5]]]` to one level.
18. Sort `[3,1,4,2,5]` in descending order.
19. Insert `"React"` at position 3 in `["HTML","CSS","JS","Node"]`.
20. Remove duplicates from `[1,2,2,3,4,4,5]`.
21. Get the last element of an array without using `.length - 1`.
22. Find sum of all numbers using `reduce()`.
23. Create a new array from `[1,2,3]` where each element is squared.
24. Convert array of numbers to string `"1-2-3-4"`.
25. Rotate `[1,2,3,4,5]` right by 2 positions.

---

### **Advanced/Real-world (10 Qs)**

26. Find the top 3 highest scores from `[70,85,92,65,100,99]`.
27. Separate even and odd numbers into two arrays.
28. Group words by their first letter from `["apple","banana","apricot","blueberry"]`.
29. Create a shopping cart total with tax using `reduce()`.
30. Find common elements between two arrays.
31. Given an array of objects with `{name,age}`, filter those older than 18.
32. Sort students by score from highest to lowest.
33. From transaction array `[{id:1,amount:200},{id:2,amount:500}]`, get total amount.
34. Remove all `null` and `undefined` values from an array.
35. Paginate an array into chunks of size 3.

---

## **3. Mini Project – Array Inventory Manager**

**Description:**

* User enters product name and price
* Data stored in an array of objects
* Can:

  * Add item
  * Remove item
  * Show all items sorted by price
  * Find items below a certain price

---

## **4. Interview Q\&A**

1. **Difference between `slice()` and `splice()`?**
2. **Why `sort()` behaves unexpectedly with numbers?**
3. **How does `reduce()` work internally?**
4. **When to use `map()` vs `forEach()`?**
5. **How to check if a variable is an array?**

---

## **5. Git & GitHub Daily Task**

```bash
git init
git add .
git commit -m "Day 18 – JS Arrays Part 2 complete"
git branch array-operations
git checkout array-operations
git push origin array-operations
```

