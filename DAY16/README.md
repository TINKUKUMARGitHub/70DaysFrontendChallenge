
# ✅ **Day 16: JavaScript Loop Mastery – Part 3 (Advanced + Pattern + Real Use)**

📅 Date: 07 August 2025 (Wednesday)
👨‍💻 **#70DaysFrontendChallenge – Day 16**
🧠 *Goal: Deep loop logic + Nested loops + Pattern problems + Real-world logic building*

---

## ✅ 1. THEORY – 🔁 Advanced Loops, Nested Logic, Pattern Printing

### 🔹 What are Nested Loops?

Loop inside another loop.

```js
for(let i = 1; i <= 3; i++){
  for(let j = 1; j <= 2; j++){
    console.log(i, j);
  }
}
```

### 🔹 Why We Use Nested Loops:

* Pattern printing
* Grid-based problems
* Complex data iteration (like 2D arrays, React table rendering)

---

## ✅ 2. 🔍 Examples: Nested Loop & Pattern Problems

### ⭐ Example 1: Number Triangle

```
1  
1 2  
1 2 3  
```

```js
for(let i=1; i<=3; i++){
  let row = "";
  for(let j=1; j<=i; j++){
    row += j + " ";
  }
  console.log(row);
}
```

---

### ⭐ Example 2: Inverted Right Triangle

```
* * * *  
* * *  
* *  
*  
```

```js
for(let i=4; i>=1; i--){
  let row = "";
  for(let j=1; j<=i; j++){
    row += "* ";
  }
  console.log(row);
}
```

---

### ⭐ Example 3: Pyramid Pattern

```
   *  
  * *  
 * * *  
```

```js
let n = 3;
for(let i=1; i<=n; i++){
  let space = " ".repeat(n - i);
  let star = "* ".repeat(i);
  console.log(space + star);
}
```

---

## ✅ 3. 💪 PRACTICE: 50 Loop-Based Questions (Only New Today)

> 🚨 *No repeats from Day 14–15. These are fresh for Day 16 advanced logic training.*

````js
1. Print sum of squares from 1 to 10
2. Reverse a given number (1234 → 4321)
3. Count even and odd digits in a number
4. Count how many 0s in a number (e.g. 10203)
5. Count digits in number
6. Find product of digits of a number
7. Sum of digits of a number (123 → 6)
8. Find LCM of two numbers
9. Find GCD of two numbers
10. Print Fibonacci series upto 10 terms
11. Check whether a number is palindrome
12. Check whether a number is Armstrong (153)
13. Find average of N numbers
14. Find sum of odd numbers from 1–100
15. Find sum of even numbers from 1–100
16. Print multiplication table of any number
17. Print all numbers divisible by 7 between 1–100
18. Print table from 1 to 10 using nested loop
19. Print prime numbers from 1 to 50
20. Check if a number is prime
21. Convert binary number to decimal
22. Convert decimal to binary using loop
23. Count vowels in a string using loop
24. Print pattern:  
    ```
    1  
    2 3  
    4 5 6
    ```
25. Inverted triangle of numbers
26. Hollow rectangle using `*`
27. Print:
    ```
    A  
    A B  
    A B C
    ```
28. Find factorial of number using loop
29. Find power of number using loop (2^3 = 8)
30. Remove all digits > 5 in number (e.g. 548392 → 432)
31. Sum digits until it becomes single digit (e.g. 987 → 9+8+7 = 24 → 2+4 = 6)
32. Add alternate digits of a number
33. Print triangle of `#` using nested loop
34. Calculate compound interest using loop
35. Check if number is Harshad number
36. Print:
    ```
    *  
    * *  
    * * *  
    * * * *
    ```
37. Print:
    ```
    1  
    2 2  
    3 3 3  
    ```
38. Convert string to reverse using loop
39. Count how many characters in string without using `.length`
40. Print X pattern
41. Remove all vowels from a string using loop
42. Print 2D grid of numbers using nested loop
43. Print table of squares using loop
44. Find which digit appears most in a number
45. Check if number is automorphic (25 → 25² = 625 → ends with 25)
46. Print first 10 palindromes
47. Print even numbers in reverse (100 to 1)
48. Print pattern:
    ```
    * * * *  
      * * *  
        * *  
          *
    ```
49. Convert lowercase to uppercase without `.toUpperCase()`
50. Build pyramid of numbers using nested loop

---

## ✅ 4. Mini Project – 💻 Pattern Generator (User Input)

```js
let rows = Number(prompt("Enter rows"));
let pattern = "";

for(let i = 1; i <= rows; i++){
  for(let j = 1; j <= i; j++){
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);
````

📌 Convert this to reusable function
📌 Try to print different types (numbers, alphabets, stars)

---

## ✅ 5. Git & GitHub Task (Daily)

1. Create folder `day-16-loops-patterns`
2. Add all 50 loop questions in `loop-practice.js`
3. Add pattern mini project in `pattern-generator.js`
4. Write detailed README with patterns screenshot
5. Use 3 proper commits:

   * `Added 50 loop problems – Day 16`
   * `Added pattern generator mini project`
   * `Updated README with pattern outputs`
6. Push to GitHub (1 repo for all loop practice till now)

---

## ✅ 6. AI Tool Use (ChatGPT + DevTools)

| Tool               | Use                                   |
| ------------------ | ------------------------------------- |
| ChatGPT            | Generate 5 new pattern problems daily |
| Chrome DevTools    | Paste patterns, check browser console |
| Copilot (optional) | Suggest variations to loop patterns   |

---

## ✅ 7. Technical Q\&A (Interview Prep – Loop & Logic Based)

**Q1. What is the difference between `for`, `while`, and `do...while`?**
**Q2. Can we use `break` and `continue` inside nested loops?**
**Q3. How does `return` work inside nested loops inside functions?**
**Q4. Why are nested loops costly in performance?**
**Q5. How to convert nested loop into single loop? (Optimization)**



## 🎯 FINAL GOAL of Day 16:

* [x] 100% mastery of nested loop + pattern + logic
* [x] 50+ unique questions done
* [x] 1 mini project done
* [x] GitHub commits ✅
* [x] Resume section updated ✅

---

### 🪄 Reminder:

Tomorrow (Day 17) ➝ **"Array – Part 1"** start karenge from **zero to advanced**
Aaj loop ka **final** and **strongest** practice done! ✅

