
// ## 🔹 1. Practice Questions (30 with hints)

// ### Basic Level

// 1. Create an object `student` and print all keys using `Object.keys()`.
// const student={
//     name:"raj",
//     age:26,
//     role:"Developer",
//     salary:788638,
// }
// for(let key in student){
//     console.log(key);

// }
// OR 
// console.log(Object.keys(student));

// 2. Print all values of `student` using `Object.values()`.
// const student={
//     name:"raj",
//     age:26,
//     role:"Developer",
//     salary:788638,
// }
// for(let key in student){
//     console.log(student[key]);

// }
// console.log(Object.values(student));

// 3. Print both key and value using `Object.entries()`.
// const student={
//     name:"raj",
//     age:26,
//     role:"Developer",
//     salary:788638,
// }
// for(let key in student){
//     console.log(key,student[key]);

// }
// console.log(Object.entries(student));

// 4. Loop through object with `for...in`.
// const student={
//     name:"raj",
//     age:26,
//     role:"Developer",
//     salary:788638,
// }
// for(let key in student){
//     console.log(key);

// }

// 5. Convert object `{a:10, b:20}` into JSON string.

// let obj={a:10, b:20};
// console.log(JSON.stringify(obj));

// 6. Parse JSON string back into object.

// let strObj='{"a":10,"b":20}';
// console.log(JSON.parse(strObj));

// 7. Check type before and after JSON conversion.
// let obj={a:10, b:20};
// console.log(typeof obj);

// let strObj='{"a":10,"b":20}';
// console.log(typeof strObj);

// 8. Create a function that counts properties of an object.
// const student={
//     name:"raj",
//     age:26,
//     role:"Developer",
//     salary:788638,
// }
// function countProperties(obj){
//     return Object.keys(obj).length
// }
// console.log(countProperties(student));

// 9. Write code to check if an object is empty.
// let obj={};
// let obj2={age:20,role:"engineer"}
// function checkEmpty(obj){
//     return Object.keys(obj).length===0; //JSON.stringify(obj)==="{}"
// }
// console.log(checkEmpty(obj2));

// 10. Dynamically access property(keys) of object using variable key. 

// let user={
//     name:"rajmalkhani",
//     age:37,
//     complexion:"white",
//     address:"Delhi",
//     company:"Apna Company",
//     salary:82772
// }
// let key="name";   dynamically access properties(keys), keys can be anythings.
// console.log(user[key]);

// let key="age";
// console.log(user[key]);






// ### Intermediate Level

// 11. Convert `{id:1, name:"Tinku"}` into array of `[key,value]`.
// let obj={id:1, name:"Tinku"};
// console.log(Object.entries(obj));

// 12. Convert `[["x",10],["y",20]]` back to object.
// let arrObj=[["x",10],["y",20]];
// console.log(Object.fromEntries(arrObj));//{x:10,y:20}

// 13. Write a function to sum all values of `{m1:50,m2:60,m3:70}`.

// let obj = { m1: 50, m2: 60, m3: 70 };
// let sum=Object.values(obj).reduce((acc,val)=>acc+val,0);
// console.log(sum);

// OR 
// function sumAllValues(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key]
//     }
//     return sum;
// }
// console.log(sumAllValues(obj));

// 14. Find the key with maximum value in `{a:5,b:15,c:10}`.

// let obj = { a: 5, b: 15, c: 10 };
// let maxKey = null;
// let maxVal = -Infinity;
// for (let key in obj) {
//     if (obj[key] > maxVal) {
//         maxVal = obj[key];
//         maxKey = key;
//     }
// }
// console.log(maxKey);

// 15. Write a function that swaps keys and values in object.
// let obj={a:10,b:20};

// let swapping=Object.fromEntries(Object.entries(obj).map(([k,v])=>[v,k]));
// console.log(swapping);{10:"a",20:"b"}

// OR 
// function swapKeysAndValues(obj){
//     let swapped={};
//     for(let key in obj){
//         swapped[obj[key]]=key;
//     }
//     return swapped;
// }
// console.log(swapKeysAndValues(obj));





// 16. Filter values greater than 50 from `{a:40,b:60,c:90}`.
// let obj={a:40,b:60,c:90};
// let filteredVal=Object.entries(obj).filter(([key,val])=>val>50);
// console.log(filteredVal);

// or 
// let filteredVal=Object.values(obj).filter((val)=>val>50);
// console.log(filteredVal);


// 17. Sort object values in ascending order.

// let obj={a:28,b:11,c:89,d:9,e:17,f:50};
// let sortedValue=Object.values(obj).sort((a,b)=>a-b);
// console.log(sortedValue);

// 18. Convert object of employees into array and sort by salary.

// let employees = {
//     emplysAndSalary: [
//         { name: "raj", salary: 435738 },
//         { name: "ayansh", salary: 787866 },
//         { name: "vikash", salary: 526566 },
//         { name: "uday", salary: 978236 },
//         { name: "alice", salary: 692723 },
//         { name: "himanshu", salary: 233881 },
//     ]
// }
// let arrOfObj=employees.emplysAndSalary.sort((a,b)=>a.salary-b.salary);
// console.log(arrOfObj);

// 19. Write a function that merges multiple objects dynamically.

// function mergeObject(...obj){
//     return Object.assign({},...obj);
// }
// console.log(mergeObject({a:10,age:24},{b:20,bill:200},{c:30}));

// 20. Use `Object.entries().map()` to create custom array from object.

// let obj={user:"rahul",age:24,role:"engineer",company:"Apna company"};
// let customArr=Object.entries(obj).map(([key,value])=>{
//     return {field:key,data:value};
// });
// console.log(customArr);

// ### Advanced Level

// 21. Write a function that deeply compares two objects.

// let objA = { a: 1, b: { x: 10, y: 20 } };
// let objB = { a: 1, b: { x: 10, y: 20 } };
// let objC = { a: 1, b: { x: 10, y: 25 } };

// function deeplyCompare(obj1, obj2) {
//     if (obj1 === obj2) return true;
//     if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) return false;
//     let key1 = Object.keys(obj1);
//     let key2 = Object.keys(obj2);
//     if (key1.length !== key2.length) return false;
//     for (let key of key1) {
//         if (!key2.includes(key) || !deeplyCompare(obj1[key], obj2[key])) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(deeplyCompare(objA, objB));
// console.log(deeplyCompare(objA, objC));

// function deepEqual(obj1, obj2) {
//     // If both are strictly equal (number, string, boolean, null, undefined)
//     if (obj1 === obj2) return true;


//     // If types are different or any is null
//     if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
//         return false;
//     }

//     // Get keys of both objects
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     // If length of keys is different
//     if (keys1.length !== keys2.length) return false;

//     // Recursively compare each key/value
//     for (let key of keys1) {
//         if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//             return false;
//         }
//     }

//     return true;
// }

// ✅ Testing
// let objA = { a: 1, b: { x: 10, y: 20 } };
// let objB = { a: 1, b: { x: 10, y: 20 } };
// let objC = { a: 1, b: { x: 10, y: 25 } };

// console.log(deepEqual(objA, objB)); // true
// console.log(deepEqual(objA, objC)); // false

// 22. Create a function that flattens nested object into single-level.
//  function flattenObject(obj, parentKey = "", result = {}) {
//   for (let key in obj) {
//     // build new key
//     let newKey = parentKey ? parentKey + "." + key : key;

//     // if value is object → recurse
//     if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
//       flattenObject(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }
//   return result;
// }

// // ✅ Testing
// let nestedObj = {
//   user: {
//     name: "Rahul",
//     address: {
//       city: "Delhi",
//       pin: 110011
//     }
//   },
//   role: "Engineer"
// };

// console.log(flattenObject(nestedObj));

// 23. Write a function to count frequency of values in object.

// function countFrequency(obj) {
//     let values = Object.values(obj);
//     let frequency = {};
//     for (val of values) {
//         frequency[val] = (frequency[val] || 0) + 1;
//     }
//     return frequency;
// }
// let data = { a: "raj", b: 36, c: "raj", d: "developer", e: 36 };
// console.log(countFrequency(data));


// function countValue(obj){
//   return Object.values(obj).length;
// }
// console.log(countValue({name:"raj",age:36,role:"developer",location:"India"}));

// 24. Create a function that returns keys of object whose values are even numbers.

// let obj = { a: 10, b: 26, c: 13, d: 9, e: 18, f: 11 };

// function returnKeyOfObj(obj) {
//     let res = Object.keys(obj);
//     return res.filter(key => obj[key] % 2 === 0)
// }
// console.log(returnKeyOfObj(obj));


// 25. Use destructuring + iteration to extract selective keys.

// let user = { name: "raj", age: 23, role: "developer", city: "delhi" };
// let keyToExtract = ["name", "role", "city"] ;
// let result = {};
// for (let key of keyToExtract) {
//     let { [key]: value } = user;  //destructuring
//     result[key] = value;
// }
// console.log(result);

// 26. Use JSON.stringify with 2 spaces formatting for pretty print.
// let user = {
//   id: 101,
//   name: "Tinku",
//   age: 28,
//   skills: ["HTML", "CSS", "JavaScript"],
//   address: { city: "Delhi", country: "India" }
// };

// // Pretty print with 2 spaces
// let pretty = JSON.stringify(user, null, 2);

// console.log(pretty);

// 27. Use JSON.stringify replacer to exclude one property.
//  let user = {
//   id: 101,
//   name: "Tinku",
//   age: 28,
//   skills: ["HTML", "CSS", "JavaScript"]
// };

// // Exclude "age" using replacer function
// let jsonStr = JSON.stringify(user, (key, value) => {
//   if (key === "age") return undefined;  // remove property
//   return value;
// }, 2);

// console.log(jsonStr);

// 28. Use Object.entries + reduce to calculate total sum of values.
// let data={a:11,b:24,c:42,d:56,e:98};
// let result=Object.entries(data).reduce((total,[key,val])=>total+val,0);
// console.log(result);

// 29. Convert array of objects to single object keyed by id.
// let users = [
//   { id: 1, name: "ayansh", age: 28 },
//   { id: 2, name: "deepak", age: 25 },
//   { id: 3, name: "shubham", age: 22 }
// ];
// let result=users.reduce((acc,user)=>{
//     acc[user.id]=user;
//     return acc;
// })
// console.log(result);

// 30. Use optional chaining with object iteration safely.
// let users=[
//     {id:1,profile:{name:"raj",age:25,city:"Delhi"}},
//     {id:2,profile:{name:"abhishek"}},
//     {id:3,profile:null},

// ];
// for(let user of users){
//     let name=user.profile?.name??"Unknown Person"
//     let city=user.profile?.city??"N/A"
//     console.log(`ID:${user.id}, and UserName is : ${name} , and city : ${city}`);
// }


// ## 🔹 3. Mini Project

// **🎯 Project: Product Inventory System**

// 👉 Requirements:

// * Store multiple products as an object of objects.
// * Each product has `id`, `name`, `price`, `stock`.
// * Features:

//   * `getTotalStock()` → total items.
//   * `getMostExpensive()` → returns product with highest price.
//   * `toJSON()` → export inventory as JSON string.
//   * `fromJSON()` → import back to object.

// 👉 Example:

// ```js
// let inventory = {
//   p1: { id:1, name:"Laptop", price:50000, stock:10 },
//   p2: { id:2, name:"Phone", price:20000, stock:25 },
//   p3: { id:3, name:"Tablet", price:30000, stock:15 }
// };

// function getTotalStock(inv) {
//   return Object.values(inv).reduce((sum,p)=> sum+p.stock, 0);
// }

// function getMostExpensive(inv) {
//   return Object.values(inv).reduce((max,p)=> p.price>max.price?p:max);
// }

// console.log("Total stock:", getTotalStock(inventory));
// console.log("Most Expensive:", getMostExpensive(inventory));

// let json = JSON.stringify(inventory);
// console.log(json);

// let back = JSON.parse(json);
// console.log(back);
// ```

// ---
