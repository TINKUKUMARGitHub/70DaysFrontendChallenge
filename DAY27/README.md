
# 📅 Day 27 – 18/08/2025

## 📝 Topic: **Objects in JavaScript (Part 3: Iteration, JSON, Real Use Cases)**

## 🔹 1. Theory

1. **Iterating Objects**

   * `for...in` → loops over keys
   * `Object.keys(obj)` → returns array of keys
   * `Object.values(obj)` → returns array of values
   * `Object.entries(obj)` → returns key-value pairs

   ```js
   let user = { name: "Tinku", age: 28, city: "Patna" };
   for (let key in user) {
     console.log(key, user[key]);
   }
   console.log(Object.keys(user));
   console.log(Object.values(user));
   console.log(Object.entries(user));
   ```

2. **Working with JSON**

   * **JSON.stringify(obj)** → object → JSON string
   * **JSON.parse(string)** → JSON string → object

   ```js
   let obj = { id: 1, name: "Pinku" };
   let str = JSON.stringify(obj);
   let back = JSON.parse(str);
   console.log(str, back);
   ```

3. **Use Cases of Object Iteration**

   * Working with API responses (always objects).
   * Converting objects into arrays for filtering/sorting.
   * Creating summary reports (like total salary, highest marks, etc.).

4. **Advanced Patterns**

   * **Object.entries() + forEach/map**
   * **Dynamic object property access**
   * **Transforming objects to arrays and back**

---

## 🔹 2. Practice Questions (30 with hints)

### Basic Level

1. Create an object `student` and print all keys using `Object.keys()`.
2. Print all values of `student` using `Object.values()`.
3. Print both key and value using `Object.entries()`.
4. Loop through object with `for...in`.
5. Convert object `{a:10, b:20}` into JSON string.
6. Parse JSON string back into object.
7. Check type before and after JSON conversion.
8. Create a function that counts properties of an object.
9. Write code to check if an object is empty.
10. Dynamically access property of object using variable key.

---

### Intermediate Level

11. Convert `{id:1, name:"Tinku"}` into array of `[key,value]`.
12. Convert `[["x",10],["y",20]]` back to object.
13. Write a function to sum all values of `{m1:50,m2:60,m3:70}`.
14. Find the key with maximum value in `{a:5,b:15,c:10}`.
15. Write a function that swaps keys and values in object.
16. Filter values greater than 50 from `{a:40,b:60,c:90}`.
17. Sort object values in ascending order.
18. Convert object of employees into array and sort by salary.
19. Write a function that merges multiple objects dynamically.
20. Use `Object.entries().map()` to create custom array from object.

---

### Advanced Level

21. Write a function that deeply compares two objects.
22. Create a function that flattens nested object into single-level.
23. Write a function to count frequency of values in object.
24. Create a function that returns keys of object whose values are even numbers.
25. Use destructuring + iteration to extract selective keys.
26. Use JSON.stringify with 2 spaces formatting for pretty print.
27. Use JSON.stringify replacer to exclude one property.
28. Use Object.entries + reduce to calculate total sum of values.
29. Convert array of objects to single object keyed by id.
30. Use optional chaining with object iteration safely.

---

## 🔹 3. Mini Project

**🎯 Project: Product Inventory System**

👉 Requirements:

* Store multiple products as an object of objects.
* Each product has `id`, `name`, `price`, `stock`.
* Features:

  * `getTotalStock()` → total items.
  * `getMostExpensive()` → returns product with highest price.
  * `toJSON()` → export inventory as JSON string.
  * `fromJSON()` → import back to object.

👉 Example:

```js
let inventory = {
  p1: { id:1, name:"Laptop", price:50000, stock:10 },
  p2: { id:2, name:"Phone", price:20000, stock:25 },
  p3: { id:3, name:"Tablet", price:30000, stock:15 }
};

function getTotalStock(inv) {
  return Object.values(inv).reduce((sum,p)=> sum+p.stock, 0);
}

function getMostExpensive(inv) {
  return Object.values(inv).reduce((max,p)=> p.price>max.price?p:max);
}

console.log("Total stock:", getTotalStock(inventory));
console.log("Most Expensive:", getMostExpensive(inventory));

let json = JSON.stringify(inventory);
console.log(json);

let back = JSON.parse(json);
console.log(back);
```

---

## 🔹 4. AI Tools Usage

* Ask **ChatGPT**: “Flatten nested objects with reduce() in JavaScript.”
* Use **Copilot**: Generate object iteration boilerplate.
* Use **DevTools**: Inspect API JSON responses, parse & iterate keys.

---

## 🔹 5. Git & GitHub Task

1. Create folder `Day27_Objects_Part3`.

2. Add today’s practice files + mini project.

3. Initialize Git:

   ```bash
   git init
   git add .
   git commit -m "Day 27: Object iteration, JSON, real use cases"
   git branch -M main
   git remote add origin <repo-url>
   git push -u origin main
   ```

4. Add README: explain **object iteration, JSON handling, and real-world use cases** with code examples.
 🎉

