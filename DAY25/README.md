
# 📅 Day 25 – 16/08/2025

## 📝 Topic: **Objects in JavaScript (Part 1)**

---

## 🔹 1. Theory: JavaScript Objects

1. **Definition**:

   * Objects are collections of **key-value pairs**.
   * Keys are called **properties**, and values can be **any data type** (string, number, array, another object, or even a function).

2. **Why Objects?**

   * To group related data together.
   * To represent real-world entities (user, car, product, etc.).

3. **Ways to create objects**:

   ```js
   // 1. Object literal
   let person = { name: "Tinku", age: 28 };

   // 2. Using new Object()
   let obj = new Object();
   obj.name = "AI Student";

   // 3. Constructor function
   function User(name, age) {
     this.name = name;
     this.age = age;
   }
   let u1 = new User("Pinku", 30);

   // 4. Object.create()
   let student = Object.create({ role: "learner" });
   student.name = "Tinku";
   ```

4. **Accessing properties**:

   * Dot notation: `person.name`
   * Bracket notation: `person["name"]`

5. **Adding / Updating / Deleting properties**:

   ```js
   person.city = "Delhi";   // add
   person.age = 29;         // update
   delete person.city;      // delete
   ```

6. **Nested Objects**:

   ```js
   let user = {
     name: "Tinku",
     address: {
       city: "Patna",
       pincode: 800001
     }
   };
   console.log(user.address.city);
   ```

7. **Objects with functions (methods)**:

   ```js
   let calculator = {
     add: function(a, b) { return a + b; },
     multiply(a, b) { return a * b; } // shorthand
   };
   ```

---

## 🔹 2. Practice Questions (30 with hints)

### Basic Level

1. Create an object `car` with properties `brand`, `model`, and `year`. Print it.
   🔑 *Hint: Use object literal.*

2. Access the `brand` of `car` object using both dot and bracket notation.

3. Add a new property `color` to `car` object.

4. Update the `year` property of `car`.

5. Delete the `model` property from `car`.

6. Check if property `"brand"` exists in `car`.
   🔑 *Hint: Use `"brand" in car`.*

7. Create an object `student` with properties: `name`, `age`, `marks (object with 3 subjects)`. Access one subject’s marks.

8. Loop through all properties of an object using `for...in`.

9. Get all keys of an object using `Object.keys()`.

10. Get all values of an object using `Object.values()`.

---

### Intermediate Level

11. Get both keys and values using `Object.entries()`.

12. Create a nested object `person` → `address` → `city`. Access `city`.

13. Freeze an object so no property can be added/updated.
    🔑 *Hint: `Object.freeze(obj)`*

14. Seal an object so no property can be added/removed but can be updated.
    🔑 *Hint: `Object.seal(obj)`*

15. Merge two objects `{a:1}` and `{b:2}` into one.
    🔑 *Hint: Use `Object.assign()` or spread `{...}`.*

16. Clone an object without reference.
    🔑 *Hint: Use spread `let newObj = {...oldObj}`.*

17. Check if two objects are equal in values.
    🔑 *Hint: Convert to JSON and compare strings.*

18. Write a function that counts how many properties are in an object.

19. Store a function inside an object as `greet()`. Call it.

20. Use `this` inside an object to access its own property.

---

### Advanced Level

21. Create an object of products (id, name, price). Print names of all products.

22. Write a function that returns the most expensive product from the products object.

23. Convert object `{name:"Tinku", age:28}` into an array of `[key, value]`.

24. Convert back array `[["name","Tinku"],["age",28]]` into an object.

25. Write a function that removes a property from an object dynamically.

26. Create a function that checks if an object is empty.

27. Create a nested object `company` with `employees` array of objects. Print first employee’s name.

28. Write a function that calculates total salary of employees from object `{e1:2000,e2:3000,e3:4000}`.

29. Convert object to JSON string using `JSON.stringify()`.

30. Parse back JSON string into object using `JSON.parse()`.

---

## 🔹 3. Mini Project (Object Practice)

**🎯 Project: Student Report Card**

👉 Requirements:

* Store student details (`name`, `rollNo`, `marks` object with 3 subjects).
* Write functions inside object:

  * `getTotal()` → returns total marks.
  * `getPercentage()` → returns percentage.
  * `getGrade()` → returns grade based on percentage.

👉 Example:

```js
let student = {
  name: "Tinku",
  rollNo: 101,
  marks: { math: 80, science: 70, english: 90 },
  getTotal() {
    return this.marks.math + this.marks.science + this.marks.english;
  },
  getPercentage() {
    return this.getTotal() / 3;
  },
  getGrade() {
    let per = this.getPercentage();
    if(per >= 90) return "A+";
    else if(per >= 75) return "A";
    else if(per >= 50) return "B";
    else return "C";
  }
};

console.log(student.getTotal());  
console.log(student.getPercentage());  
console.log(student.getGrade());
```

---

## 🔹 4. AI Tools Usage

* Ask **ChatGPT**: “Explain objects with real-world examples.”
* Use **Copilot**: Generate object boilerplate code (`product`, `employee`, etc.).
* Use **DevTools**: Inspect JSON responses (API gives objects).

---

## 🔹 5. Git & GitHub Task

1. Create a new folder `Day25_Objects`.
2. Add today’s practice files + mini project.
3. Initialize Git:

   ```bash
   git init
   git add .
   git commit -m "Day 25: Objects basics, 30 questions, mini project"
   git branch -M main
   git remote add origin <repo-url>
   git push -u origin main
   ```
4. Create a proper README explaining today’s object concepts + mini project.

