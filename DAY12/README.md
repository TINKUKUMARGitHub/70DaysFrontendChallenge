✅ **Day 12 — Frontend Mastery Challenge**
📅 **Date**: 3 August 2025
🕒 **Time**: 8 Hours (Morning 4 hrs + Afternoon 4 hrs)
🌟 **Theme**: JavaScript Mastery Day 2 — Variables, Data Types, and Type Conversion Deep Dive
🖊️ **Goal**: Strong foundation of JS variables, let/const/var, data types, and mastering type conversion through 50 questions and real examples.

---

# 📊 JS Topics Focus Today:

| Topic           | Details                                                         |
| --------------- | --------------------------------------------------------------- |
| Variables       | var vs let vs const (scope, hoisting, reassignment)             |
| Data Types      | Primitive types + typeof + special cases (null, undefined, NaN) |
| Type Conversion | Implicit vs explicit (parseInt, Number, String)                 |
| Logic Building  | Tricky coercion, comparison ops, value vs reference             |

---

# 🖒 Definitions (Institute Notes Style)

1. **Variable**: A container to store data, declared using var, let, or const.
2. **let**: Block scoped, can be reassigned.
3. **const**: Block scoped, cannot be reassigned.
4. **var**: Function scoped, hoisted, can be reassigned.
5. **Primitive Types**: String, Number, Boolean, null, undefined, Symbol, BigInt.
6. **typeof**: Operator to check data type.
7. **NaN**: Not a Number, typeof NaN === 'number'.
8. **null**: Empty value, typeof null === 'object'.
9. **Type Coercion**: Automatic conversion of data types by JS engine.
10. **Explicit Conversion**: Using Number(), String(), Boolean(), parseInt(), etc.

---

# 📖 Morning Study Plan (4 hrs)

## 1️⃣ Theory + Examples (2 hrs)

* Explain all 3 variable types with examples
* Data types with typeof examples
* Implicit coercion in + and - operators
* Use console.log to observe type changes

## 2️⃣ Practice Task (2 hrs)

### 🔵 Basic (15 Q)

1. Declare let x = 10; Print typeof x
2. Declare const PI = 3.14; Try reassign
3. typeof undefined ?
4. typeof null ?
5. Convert 123 to "123" using String()
6. parseInt("15.5") ?
7. Boolean(0) ?
8. Number("abc") ?
9. let y; Print typeof y
10. typeof true ?
11. typeof NaN ?
12. "5" + 2 ?
13. "5" - 2 ?
14. "5" * 2 ?
15. "5" / 0 ?

### 🔶 Intermediate (20 Q)

16. let x = "10"; +x ?
17. !!0 ?
18. let a = 5; let b = a; Change b, what about a?
19. const obj = {}; obj.name = "Tinku"; Allowed?
20. let num = 10 + "20"; typeof num?
21. let x = 5 > 3; typeof x?
22. typeof typeof 1 ?
23. null == undefined ?
24. null === undefined ?
25. let x = "10" - "2"; typeof x?
26. "10" + null ?
27. "10" - null ?
28. "10" + true ?
29. "10" - true ?
30. Boolean("false") ?
31. Boolean("") ?
32. Boolean("0") ?
33. Boolean(0) ?
34. NaN === NaN ?
35. isNaN("abc") ?

### 🔴 Tricky Logic (15 Q)

36. let a = 1 + "2" + 3; result?
37. let b = 1 + 2 + "3"; result?
38. let x = null + 1; result?
39. let y = undefined + 1; result?
40. let z = \[] + {}; result?
41. let z = {} + \[]; result?
42. typeof \[] ?
43. typeof {} ?
44. \[] == false ?
45. {} == false ?
46. \[] == !\[] ?
47. console.log(\[] + \[]); result?
48. console.log(\[] + {}); result?
49. console.log({} + \[]); result?
50. console.log(typeof (typeof null));

---

# 🚀 Afternoon Practice (4 hrs)

## 3️⃣ Mini Project: **Type Conversion Visualizer** (2 hrs)

* Input: User enters value and selects conversion type (to Number/String/Boolean)
* Output: Show converted value + typeof
* Tools: HTML/CSS/JS (basic), console logs

## 4️⃣ GitHub Push + README (0.5 hr)

* Folder: Day12\_TypeConversion\_Project/
* README: Theory summary + code screenshots + Q\&A + project link
* Commit: "Day12: JS Variables + Type Conversion + Mini Project"

## 5️⃣ AI Skill Task (0.5 hr)

* Prompt ChatGPT: "Explain 5 confusing JS type conversion cases"
* Use Copilot to auto-complete practice questions in VSCode

## 6️⃣ Logic Building Tips (1 hr)

* **Tip**: Always use === in comparisons
* Visualize data flow: Draw variable change
* Console.log each step to debug

---

# 🖊️ Interview Q\&A

| Question                        | Key Answer                        |
| ------------------------------- | --------------------------------- |
| Difference var vs let vs const? | Scope + Hoisting + Reassign       |
| typeof null ?                   | 'object' (bug in JS)              |
| == vs ===                       | Loose vs strict equality          |
| Convert "123" to number         | Use Number("123") or +"123"       |
| NaN === NaN ?                   | False, NaN is not equal to itself |

---

#  Q\&A:

> **Q:** Can you write clean, modern JS code with logic?
> **A:** Yes, I use let/const, strict ===, and understand data flow, coercion, and debugging via console.log. I build logic from scratch and test it efficiently.


