
## **📅 Day 20 – Strings (Part 1)**

### **1. Theory – Introduction to Strings**

A **string** in JavaScript is a sequence of characters enclosed in **single quotes (`'`)**, **double quotes (`"`)**, or **backticks (\`\`)**.
Strings are **immutable**, meaning once created, they cannot be changed — any modification creates a **new string**.

#### **Why Strings are Important**

* Strings handle **text data** in programming.
* Used in **user inputs, UI messages, APIs, data processing**.
* JavaScript has **built-in string methods** to make working with text easier.



### **2. Subtopics for Today**

1. What is a String?
2. Ways to create a String (Literal, `new String()`)
3. String immutability concept
4. String length property
5. Accessing characters (indexing, `charAt()`)
6. `toUpperCase()` and `toLowerCase()`
7. `trim()`, `trimStart()`, `trimEnd()`
8. `includes()` method
9. `indexOf()` and `lastIndexOf()`
10. Template literals & string interpolation

---

### **3. Syntax & Examples**

#### **String Creation**

```javascript
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello World`; // Template literal
```

#### **Length**

```javascript
console.log("Hello".length); // 5
```

#### **Accessing Characters**

```javascript
let word = "JavaScript";
console.log(word[0]);       // J
console.log(word.charAt(4)); // S
```

#### **Uppercase & Lowercase**

```javascript
let name = "Tinku";
console.log(name.toUpperCase()); // TINKU
console.log(name.toLowerCase()); // tinku
```

#### **Trim**

```javascript
let text = "   Hello World   ";
console.log(text.trim()); // "Hello World"
```

#### **Includes**

```javascript
let msg = "I love JavaScript";
console.log(msg.includes("love")); // true
console.log(msg.includes("hate")); // false
```

#### **IndexOf**

```javascript
console.log(msg.indexOf("love")); // 2
console.log(msg.lastIndexOf("Java")); // 7
```

#### **Template Literals**

```javascript
let lang = "JavaScript";
console.log(`I am learning ${lang} in 2025.`);
```

---

### **4. Practice Questions (40 Clear Questions)**

#### **Basic Level**

1. Declare a string `"JavaScript"` and print its length.
2. Store your name in a variable and print it in uppercase.
3. Store `"HELLO"` in a variable and print it in lowercase.
4. Remove extra spaces from `"   Welcome to JS   "` using `trim()`.
5. Check if `"Frontend Developer"` contains `"Developer"`.
6. Find the index of `"JS"` in `"I love JS and React"`.
7. Get the last index of `"o"` in `"Hello World"`.
8. Access the first character of `"OpenAI"`.
9. Access the last character of `"OpenAI"`.
10. Use template literals to print: `"I am learning HTML, CSS, and JavaScript."`

#### **Intermediate Level**

11. Given: `let str = "Learn JavaScript";` — convert the first word to uppercase.
12. Given: `"   Coding is fun   "` — remove leading spaces only.
13. Given: `"   Coding is fun   "` — remove trailing spaces only.
14. Check if `"I love coding"` contains `"python"`.
15. Find the index of `"Script"` in `"JavaScript"`.
16. Get the middle character of `"Tinku"`.
17. Concatenate `"Hello"` and `"World"` using template literals.
18. Count how many times `"o"` appears in `"Javascript is cool"`.
19. Print `"JavaScript"` without the first and last character.
20. Replace spaces with `"-"` in `"JavaScript is awesome"`.

#### **Advanced Level**

21. Given: `"A quick brown fox"` — check if it starts with `"A quick"`.
22. Given: `"Frontend Mastery"` — check if it ends with `"Mastery"`.
23. Create a new string by reversing `"JavaScript"`.
24. Count vowels in `"Programming"`.
25. Check if a given string is a palindrome (e.g., `"madam"`).
26. Extract the word `"JavaScript"` from `"I am learning JavaScript in 2025"`.
27. Replace `"2024"` with `"2025"` in `"Happy New Year 2024"`.
28. Split `"HTML CSS JavaScript"` into an array.
29. Join an array `["HTML", "CSS", "JS"]` into a string separated by `" | "`.
30. Capitalize the first letter of `"developer"`.

#### **Logic Building**

31. Find the longest word in `"I am learning JavaScript daily"`.
32. Remove all vowels from `"JavaScript is powerful"`.
33. Find the number of words in `"I love frontend development"`.
34. Replace all `"a"` with `"@"` in `"banana"`.
35. Check if `"Hello"` and `"hello"` are equal ignoring case.
36. Create a username from a full name by making it lowercase and removing spaces.
37. Print a substring from `"JavaScript"` starting from index 4.
38. Count consonants in `"Frontend"`.
39. Check if `"OpenAI"` contains only alphabets.
40. Repeat `"JS"` 5 times using `repeat()`.

---

### **5. Mini Project – Username Generator**

**Description:**
Take **full name** input from user, convert it to lowercase, remove spaces, and append a random number (1–100) to create a unique username.

Example:

```
Input: "Tinku Kumar"
Output: tinkukumar57
```

---

### **6. Git & GitHub Task**

* Create a folder `Day20_Strings_Part1`
* Add today’s practice questions & mini project file (`strings_part1.js`)
* Commit with message: `"Day 20: Strings Part 1 – Basics and Methods"`
* Push to GitHub

---

### **7. AI Tools Task**

* Use ChatGPT to **generate 10 creative usernames** given a full name.
* Ask Copilot to **optimize your palindrome checking code**.

### **9. Summary**

Today, you learned:

* Basics of strings & methods
* 40 practice problems
* A small username generator project
* GitHub & AI integration
* Career gap handling


