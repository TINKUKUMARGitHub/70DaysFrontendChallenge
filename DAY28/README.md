
## ✅ 1. THEORY – 🌐 DOM Manipulation

### 🔹 What is DOM?

* DOM = **Document Object Model**
* It represents the structure of a webpage as a **tree of objects** (HTML elements become nodes).
* JS can **select, add, modify, or delete** elements dynamically using DOM.

---

### 🔹 Accessing DOM Elements

```js
document.getElementById("idName")     // Select by ID
document.getElementsByClassName("cls") // Select by class
document.getElementsByTagName("p")     // Select by tag
document.querySelector("#idName")      // First match
document.querySelectorAll(".cls")      // All matches
```

---

### 🔹 Modifying Content & Attributes

```js
document.getElementById("title").innerText = "Hello DOM!";
document.getElementById("box").style.background = "yellow";
document.querySelector("img").setAttribute("src", "new.png");
```

---

### 🔹 Creating & Removing Elements

```js
let newDiv = document.createElement("div");
newDiv.innerText = "I am new!";
document.body.appendChild(newDiv);   // Add new element

let oldDiv = document.getElementById("removeMe");
oldDiv.remove();  // Delete element
```

---

### 🔹 Events in DOM

```js
document.getElementById("btn").addEventListener("click", function(){
  alert("Button Clicked!");
});
```

---

### 🔹 Advanced DOM (Pro Level)

1. **Event Delegation**

   ```js
   document.getElementById("list").addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
       alert("You clicked on: " + e.target.innerText);
     }
   });

2. **Traversing DOM**

   ```js
   let parent = document.getElementById("child").parentElement;
   let children = document.getElementById("container").children;
   ```
3. **Class Manipulation**

   ```js
   element.classList.add("active");
   element.classList.remove("hidden");
   element.classList.toggle("dark-mode");
   ```
4. **Form Handling**

   ```js
   let input = document.getElementById("username").value;
   console.log(input);
   ```

---

## ✅ 2. 🔍 Examples

### ⭐ Example 1: Change Text on Button Click

```html
<h2 id="heading">Welcome</h2>
<button onclick="changeText()">Click Me</button>

<script>
function changeText(){
  document.getElementById("heading").innerText = "Text Changed!";
}
</script>
```

---

### ⭐ Example 2: Add New List Item

```html
<ul id="list">
  <li>Item 1</li>
</ul>
<button onclick="addItem()">Add Item</button>

<script>
function addItem(){
  let li = document.createElement("li");
  li.innerText = "New Item";
  document.getElementById("list").appendChild(li);
}
</script>




### ⭐ Example 3: Toggle Dark Mode

```html
<body>
  <button onclick="toggleTheme()">Toggle Dark Mode</button>
</body>

<script>
function toggleTheme(){
  document.body.classList.toggle("dark");
}
</script>

<style>
.dark { background: black; color: white; }
</style>
```

---

## ✅ 3. 💪 PRACTICE: 30 DOM Questions

1. Select a `<p>` tag and change its text.
2. Change background color of a div using JS.
3. Add a new `<li>` to an existing `<ul>`.
4. Remove the last child of a list.
5. Change an image’s `src` on button click.
6. Change font size of a paragraph.
7. Add multiple `<li>`s using loop.
8. Create a button that hides a paragraph.
9. Create a button that shows a hidden div.
10. Toggle between two classes on click.
11. Change input placeholder text.
12. Print input value in console on submit.
13. Count characters in a text input.
14. Disable a button after 1 click.
15. Change button text after clicking.
16. Add a border to an element.
17. Remove all children of a list.
18. Clone a node and add it.
19. Append multiple paragraphs at once.
20. Add inline style via JS.
21. Highlight all `<p>` tags with yellow.
22. Add mouseover event to change color.
23. Double-click event to change text.
24. Print which key is pressed in input.
25. Create a counter with + and – buttons.
26. Show live clock on screen.
27. Create dropdown, log selected value.
28. Change page background on key press.
29. Build image gallery (prev/next buttons).
30. Create "Read More / Read Less" toggle.

---

## ✅ 4. Mini Project – 💻 To-Do List App

### Features:

* Add new tasks.
* Mark task as completed.
* Delete tasks.

```html
<input id="task" placeholder="Enter task">
<button onclick="addTask()">Add</button>
<ul id="tasks"></ul>

<script>
function addTask(){
  let taskVal = document.getElementById("task").value;
  if(taskVal === "") return;

  let li = document.createElement("li");
  li.innerText = taskVal;

  li.addEventListener("click", () => li.classList.toggle("done"));

  let del = document.createElement("button");
  del.innerText = "❌";
  del.onclick = () => li.remove();

  li.appendChild(del);
  document.getElementById("tasks").appendChild(li);
  document.getElementById("task").value = "";
}
</script>

<style>
.done { text-decoration: line-through; }
</style>
```

---

## ✅ 5. Git & GitHub Task

1. Create repo: `day28-dom-manipulation`
2. Add all 30 practice questions in `dom-practice.js`
3. Add mini project in `todo-app.html`
4. Add screenshots in `README.md`
5. Commit messages:

   * `Added DOM practice problems`
   * `Added To-Do list mini project`
   * `Updated README with outputs`

---

## ✅ 6. AI Tool Use

| Tool            | Use Case                         |
| --------------- | -------------------------------- |
| ChatGPT         | Generate extra DOM project ideas |
| Copilot         | Autocomplete event handler logic |
| Chrome DevTools | Inspect DOM changes live         |
| Cursor AI       | Debugging DOM selectors          |

---

## ✅ 7. Technical Q\&A (Interview Prep – DOM)

**Q1: What is the difference between `innerText`, `innerHTML`, and `textContent`?**
👉 `innerText` respects CSS styles, `textContent` gives all raw text, `innerHTML` gives HTML markup.

**Q2: What is Event Delegation?**
👉 A technique where you attach an event to a parent element and handle all child events inside it (better performance).

**Q3: Difference between `querySelector` and `getElementById`?**
👉 `querySelector` is more flexible (supports CSS selectors), `getElementById` is faster but only works for IDs.

**Q4: Can we manipulate CSS with JS?**
👉 Yes, via `element.style.property` or `classList`.

**Q5: What is the difference between DOM and BOM?**
👉 DOM = Document structure, BOM = Browser-related objects (window, history, navigator).

---

## 🎯 FINAL GOAL of Day 28

* [x] DOM basics mastered
* [x] 30 DOM practice questions solved
* [x] 1 mini project (To-Do App) done
* [x] GitHub commits ✅
* [x] Interview-ready Q\&A ✅
