✅ **Day 15 – Frontend Mastery Challenge**
🗕️ **Date**: 06 August 2025
🕒 **Time**: 8 Hours (Morning 4 hrs + Afternoon 4 hrs)
🌟 **Theme**: JavaScript Conditionals Mastery
📌 **Goal**: Master all JS conditional statements + solve 50+ logic questions + mini project

---

# 🎯 Today’s Outcome Summary

| Skill             | Outcome                                                        |
| ----------------- | -------------------------------------------------------------- |
| JS Conditionals   | Mastery of `if`, `else if`, `else`, `switch`, ternary operator |
| Logic Building    | 50 practice Qs (easy to tricky)                                |
| Mini Project      | Ticket Price Calculator (with multiple conditions)             |
| GitHub            | Repo Push: `tinku/day15_conditionals`                          |
| Interview Q\&A    | Output-based + concept clarity                                 |
| Career Gap Answer | Conditional logic real-world use                               |

---

# 🕓 Morning Session (4 Hours)

## 1️⃣ Theory: JS Conditionals (2 hrs)

### 🔹 **Key Topics Covered**

* `if`, `else if`, `else`
* Nested `if`
* `switch-case`
* Ternary operator
* Logical Operators: `&&`, `||`, `!`

### 🔹 **Best Definitions (Like Institute Notes)**

| Concept           | Definition Example                           |
| ----------------- | -------------------------------------------- |
| `if`              | Executes block if condition is true          |
| `else if`         | Checks next condition if previous is false   |
| `else`            | Executes when all above conditions are false |
| `switch`          | Matches value against multiple `case` values |
| Ternary           | Short form: condition ? true : false         |
| Logical Operators | Combine multiple conditions (AND, OR, NOT)   |

### ✅ Examples:

```js
let age = 20;
if(age < 18) {
  console.log("Minor");
} else if(age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
```

```js
let ticket = "premium";
switch(ticket) {
  case "standard": console.log("₹500"); break;
  case "premium": console.log("₹1000"); break;
  default: console.log("₹200");
}
```

---

## 2️⃣ 50+ Practice Questions (2 hrs)

### 🟢 Basic (15 Qs)

1. Check if a number is even or odd.
2. Find greater between two numbers.
3. Check if a number is positive, negative, or zero.
4. Print grade based on marks (A/B/C/D/F).
5. Check eligibility to vote (age >= 18).
6. Check if year is leap year.
7. Find max among 3 numbers.
8. Check if character is vowel or consonant.
9. Compare two strings.
10. Print discount based on purchase amount.
11. Check if number is divisible by 3 & 5.
12. Assign traffic light color meaning.
13. Check login (username/password match).
14. Print day of week from number.
15. Ternary: Check if temperature > 30 ("Hot") else ("Cool").

### 🟡 Intermediate (20 Qs)

16. Find ticket price based on age.
17. Calculator using switch (add/sub/mul/div).
18. Print number of days in a month.
19. Convert number to word (1 = One).
20. Find min among 3 numbers using if-else.
21. Check if angle is acute, obtuse or right.
22. Print movie rating based on score.
23. Ternary: Print pass/fail based on marks.
24. Check if number is 3-digit or not.
25. Convert temperature: Celsius to Fahrenheit.
26. Check valid triangle (sum of angles = 180).
27. Check if character is uppercase/lowercase.
28. Salary slab: calculate tax.
29. Currency converter: USD to INR.
30. Check if string is empty.
31. Switch: Print season based on month.
32. Calculate BMI and print category.
33. Check palindrome number.
34. Print charges based on time (AM/PM).
35. Nested if: Student grade + remark.

### 🔴 Tricky Logic (15 Qs)

36. let x = 5; x = x + "5"; What’s x?
37. let y = "10" - 2; typeof y?
38. Is null == undefined? Why?
39. console.log(typeof null) // output?
40. Compare "0" == 0 and "0" === 0.
41. 0 == false? 0 === false?
42. NaN == NaN? Why?
43. !!null, !!undefined, !!0 — outputs?
44. let a = 1, b = 2; console.log(a++ + ++b)?
45. Truthy/Falsy list from given array.
46. Switch fall-through example.
47. typeof typeof 5?
48. let x = true + false + true?
49. Short-circuit with && || examples.
50. Nested ternary condition example.

---

# 🕕 Afternoon Session (4 Hours)

## 3️⃣ Mini Project – Ticket Price Calculator (2 hrs)

| Input Fields | Logic                                     |
| ------------ | ----------------------------------------- |
| Name (text)  | User inputs                               |
| Age (number) | Age-based discount                        |
| Ticket Type  | General, Standard, Premium – switch logic |

### Final Ticket Logic:

* Base Price = ₹1000
* Discount: Age < 5 (free), <=18 (10%), <=55 (35%), >55 (80%)
* Ticket Type: General (+0), Standard (+₹200), Premium (+₹500)

### Output:

* Show base price, discount, final price.
* DOM Manipulation + event listeners + append result.

---

## 4️⃣ GitHub Push + README (0.5 hr)

* Commit: `Day15: JS Conditionals + Ticket Calculator`
* README: Include logic, screenshots, Q\&A.

---

## 5️⃣ Interview Q\&A (0.5 hr)

| Question              | Key Answer                                      |
| --------------------- | ----------------------------------------------- |
| Difference: == vs === | == converts type, === checks type & value       |
| switch vs if-else     | switch for equality, cleaner for multiple cases |
| Ternary when useful?  | Short decisions in one line                     |
| Output: typeof null   | "object" (JS quirk)                             |
| Truthy/Falsy values   | 0,"",null,undefined,NaN,false => falsy          |

---



> **Q:** Can you apply logic to real problems?
> **A:** Yes, I build conditional logic-based apps (ex: ticket calculator), improving decision-making using JS.

---

## 🧠 AI Task

* Prompt: "Give optimization tips for my JS condition-based project"
* Copilot: Auto-suggest switch block for ticket logic
