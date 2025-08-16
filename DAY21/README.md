
## **📅 Day 21 – Strings (Part 2)**

### **1. Theory – More String Methods**

Yesterday we covered **basic string concepts & methods**.
Today we go deeper with **advanced methods** for extracting, modifying, and working with strings efficiently.

---

#### **Advanced String Methods Overview**

1. **slice(start, end)** – Extracts part of a string.
2. **substring(start, end)** – Similar to `slice()` but doesn’t accept negative indexes.
3. **substr(start, length)** – Extracts part of a string based on length (deprecated, but still seen in old code).
4. **replace(search, newValue)** – Replaces first occurrence of search term.
5. **replaceAll(search, newValue)** – Replaces all occurrences.
6. **split(separator)** – Splits a string into an array.
7. **concat(str1, str2, …)** – Joins multiple strings.
8. **repeat(count)** – Repeats the string given number of times.
9. **startsWith(searchString)** – Checks if string starts with certain text.
10. **endsWith(searchString)** – Checks if string ends with certain text.
11. **match(regex)** – Finds matches using regex.
12. **search(regex)** – Returns index of match using regex.
13. **padStart(targetLength, padString)** – Adds padding to start.
14. **padEnd(targetLength, padString)** – Adds padding to end.
15. **charCodeAt(index)** – Returns ASCII code of character.
16. **fromCharCode(code)** – Converts ASCII code to character.

---

### **2. Syntax & Examples**

#### **slice()**

```javascript
let text = "JavaScript";
console.log(text.slice(4, 10)); // Script
console.log(text.slice(-6));    // Script
```

#### **substring()**

```javascript
console.log(text.substring(0, 4)); // Java
```

#### **replace() & replaceAll()**

```javascript
let msg = "I like JS. JS is powerful.";
console.log(msg.replace("JS", "JavaScript"));     // Replaces first
console.log(msg.replaceAll("JS", "JavaScript")); // Replaces all
```

#### **split()**

```javascript
let langs = "HTML,CSS,JS";
console.log(langs.split(",")); // ["HTML", "CSS", "JS"]
```

#### **repeat()**

```javascript
console.log("JS ".repeat(3)); // JS JS JS 
```

#### **startsWith() & endsWith()**

```javascript
let str = "Frontend Developer";
console.log(str.startsWith("Front")); // true
console.log(str.endsWith("Developer")); // true
```

#### **padStart() & padEnd()**

```javascript
let num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(4, "*"));   // "5***"
```

#### **charCodeAt() & fromCharCode()**

```javascript
console.log("A".charCodeAt(0)); // 65
console.log(String.fromCharCode(66)); // "B"
```

---

### **3. Practice Questions (40 Clear Questions)**

#### **Basic Level**

1. Extract `"Script"` from `"JavaScript"` using `slice()`.
2. Extract `"Java"` from `"JavaScript"` using `substring()`.
3. Replace `"dog"` with `"cat"` in `"The dog is barking"`.
4. Replace all `"apple"` with `"orange"` in `"apple apple apple"`.
5. Split `"HTML CSS JS"` into an array of words.
6. Repeat `"Hello"` 4 times.
7. Check if `"I am learning JS"` starts with `"I am"`.
8. Check if `"Frontend Development"` ends with `"Development"`.
9. Pad `"7"` with `"0"` at the start until length becomes 4.
10. Pad `"9"` with `"*"` at the end until length becomes 5.

#### **Intermediate Level**

11. Get ASCII code of `"Z"`.
12. Convert ASCII code `97` to a character.
13. Extract last 3 characters from `"JavaScript"`.
14. Extract first 5 characters from `"Programming"`.
15. Find index of `"code"` in `"I love to code daily"`.
16. Replace `"2023"` with `"2025"` in `"Happy 2023"`.
17. Remove spaces from `"  spaced text  "` using `trim()`.
18. Count occurrences of `"o"` in `"Hello World"`.
19. Extract `"CSS"` from `"HTML CSS JavaScript"`.
20. Check if `"hello"` equals `"HELLO"` ignoring case.

#### **Advanced Level**

21. Reverse `"developer"` using string methods.
22. Capitalize the first letter of each word in `"i am learning js"`.
23. Find longest word in `"Frontend development with JavaScript"`.
24. Mask all but last 4 digits of `"9876543210"` (e.g., `******3210`).
25. Convert `"JavaScript is fun"` into `"FUN IS JAVASCRIPT"`.
26. Remove all digits from `"abc123xyz"`.
27. Extract domain name from `"https://openai.com"`.
28. Replace vowels with `*` in `"Programming"`.
29. Split `"one-two-three"` using `"-"` and join with `"|"`.
30. Create acronym from `"Hyper Text Markup Language"` → `"HTML"`.

#### **Logic Building**

31. Check if two strings are anagrams.
32. Check if `"madam"` is palindrome using string methods.
33. Count consonants in `"JavaScript"`.
34. Extract middle word from `"I love coding"`.
35. Convert `"snake_case"` to `"camelCase"`.
36. Count number of words in `"Learn JS every day"`.
37. Print only unique characters from `"programming"`.
38. Convert `"Hello"` to ASCII codes array.
39. Convert ASCII codes array `[72,101,108,108,111]` to string `"Hello"`.
40. Remove extra spaces from `"I    love   JS"`.

---

### **4. Mini Project – Password Masker**

**Description:**
Take a phone number as input, mask all digits except the last 4, and return masked version.

Example:

```
Input: 9876543210
Output: ******3210
```

---

### **5. Git & GitHub Task**

* Create folder `Day21_Strings_Part2`
* Add today’s practice & project file (`strings_part2.js`)
* Commit with `"Day 21: Strings Part 2 – Advanced Methods"`
* Push to GitHub

---

### **6. AI Tools Task**

* Use ChatGPT to **generate regex** that extracts only numbers from a string.
* Ask Copilot to optimize your **capitalize each word** function.


### **7. Summary**

Today you learned:

* Advanced string methods
* 40 practice problems
* A masking mini-project
* Git & AI integration


