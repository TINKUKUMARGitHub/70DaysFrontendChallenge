
# 📅 Day 26 – 17/08/2025

## 📝 Topic: **Objects in JavaScript (Part 2: Methods, Destructuring, Advanced operations)**

---

## 🔹 1. Theory

1. **Object Methods**

   * Functions stored in objects are called methods.

   ```js
   let user = {
     name: "Tejas",
     greet() { return `Hello, ${this.name}`; }
   };
   console.log(user.greet());  
   ```

2. **`this` keyword**

   * Refers to the object calling the method.

3. **Object Destructuring**

   * Extract properties into variables:

   ```js
   let car = { brand: "Tata", model: "Nexon", year: 2022 };
   let { brand, year } = car;
   console.log(brand, year);
   ```

4. **Renaming while destructuring**

   ```js
   let { model: carModel } = car;
   console.log(carModel);
   ```

5. **Default values in destructuring**

   ```js
   let { color = "black" } = car;
   console.log(color); // black
   ```

6. **Nested Destructuring**

   ```js
   let student = {
     name: "Pinku",
     address: { city: "Patna", pincode: 800001 }
   };
   let { address: { city } } = student;
   console.log(city);
   ```

7. **Rest in destructuring**

   ```js
   let { brand: b, ...others } = car;
   console.log(others);
   ```

8. **Object.assign() vs Spread Operator**

   * Both used for merging and cloning objects.

9. **Optional Chaining (?.)**

   ```js
   let person = { name: "Tejas", address: null };
   console.log(person.address?.city); // undefined (no error)
   ```

10. **Object Utility Methods**

* `Object.keys()` → keys
* `Object.values()` → values
* `Object.entries()` → \[key,value]
* `Object.fromEntries()` → convert back array to object

---

## 🔹 2. Practice Questions (30 with hints)

### Basic Level

1. Create an object `employee` with method `getDetails()` that prints name and age.
   🔑 *Hint: Use `this` inside method.*

2. Add a method `isAdult()` inside object `person` that checks if age ≥ 18.

3. Write an object `calculator` with methods `add`, `subtract`, `multiply`, `divide`.

4. Create a nested object `book` with author details. Print author’s name.

5. Use destructuring to extract `name` and `salary` from object `employee`.

6. Rename property `department` into variable `dept` while destructuring.

7. Use default value in destructuring for missing property `bonus`.

8. Destructure nested object `user.profile.city`.

9. Use rest operator to extract all properties except `id`.

10. Use optional chaining to access `student.details.marks.math`.

---

### Intermediate Level

11. Merge two objects `obj1` and `obj2` using spread.

12. Merge using `Object.assign()`.

13. Clone an object and prove original is not affected when clone changes.

14. Write a function that returns all keys of object using `Object.keys()`.

15. Write a function that returns all values using `Object.values()`.

16. Convert object `{x:1,y:2}` into array using `Object.entries()`.

17. Convert `[["a",10],["b",20]]` into object using `Object.fromEntries()`.

18. Create a method inside object that calculates area of rectangle (length, width).

19. Write a method `fullName()` inside object `person` that combines first and last name.

20. Show difference between shallow copy and deep copy with nested object.

---

### Advanced Level

21. Create a function that freezes object and test by trying to update property.

22. Seal an object and test by deleting a property.

23. Create an object of students and sort them by marks.
    🔑 *Hint: Convert object to array of entries first.*

24. Write a function that returns the highest salary from employees object.

25. Write a function that converts nested object into flat object.

26. Write a function that counts how many methods exist inside an object.

27. Use destructuring inside function parameters:

```js
function display({name, age}) { console.log(name, age); }
```

28. Write a function that swaps values of two object properties using destructuring.

29. Write a function that combines multiple objects into one (n objects).

30. Write a method `toJSON()` in object which customizes JSON.stringify() output.

---

## 🔹 3. Mini Project

**🎯 Project: Employee Management System**

👉 Requirements:

* Create `employee` object with properties: `id`, `name`, `department`, `salary`.
* Add methods:

  * `getDetails()` → returns name + dept.
  * `getAnnualSalary()` → salary × 12.
* Use **destructuring** to extract specific properties.
* Add **optional chaining** to handle missing properties (like bonus).

👉 Example:

```js
let employee = {
  id: 101,
  name: "Tinku",
  department: "IT",
  salary: 50000,
  getDetails() { return `${this.name} works in ${this.department}`; },
  getAnnualSalary() { return this.salary * 12; }
};

console.log(employee.getDetails());
console.log(employee.getAnnualSalary());

let { name, salary } = employee;
console.log(name, salary);

console.log(employee.bonus?.amount); // safe check
```

---

## 🔹 4. AI Tools Usage

* Ask **ChatGPT**: “Explain difference between shallow copy and deep copy with code.”
* Use **Copilot**: Auto-generate destructuring boilerplate.
* Use **DevTools**: Inspect JSON APIs and destructure response data directly.

---

## 🔹 5. Git & GitHub Task

1. Create folder `Day26_Objects_Part2`.
2. Add today’s practice files + mini project.
3. Initialize Git:

   ```bash
   git init
   git add .
   git commit -m "Day 26: Object methods, destructuring, advanced operations"
   git branch -M main
   git remote add origin <repo-url>
   git push -u origin main
   ```
4. Write README explaining **object methods, destructuring, optional chaining** with code snippets.

