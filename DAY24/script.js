// ##  30 Practice Questions (with Hints)

// ### Basic (1–10)

// 1. Write a function `sayHello` that prints `"Hello World"`.
//    🔹 *Hint: use `console.log` inside function.*

//    function sayHello(){
//     console.log("Hello world");

//    }
//    sayHello();

// 2. Create a function `square` that returns the square of a number.
//    🔹 *Hint: `return num * num`.*
// function square(num){
//     return num*num;
// }
// console.log(square(15));

// 3. Write a function `isEven` that checks if a number is even.
//    🔹 *Hint: Use modulus `%`.*
// function isEven(num){
//     if(num<=0) return "Invalid Input";
//     if(num%2===0) return "Even Number";
//     return "Odd Number"
// }
// console.log(isEven(2));


// 4. Write a function `greetUser` that takes a name and prints `"Hello, <name>"`.
//    🔹 *Hint: Use string template literals.*
// function greetUser(name){
//     console.log(`Hello ${name}`);

// }
// greetUser("John !")

// 5. Create a function `sumArray` that takes `[1,2,3,4]` and returns the sum.
//    🔹 *Hint: loop OR `reduce`.*
// function sumArray(arr){
//     return arr.reduce((acc,elem)=>acc+elem,0);
// }
// console.log(sumArray([1,2,3,4]));

// 6. Write a function `findMax` that returns the maximum from `[10, 25, 3, 50]`.
//    🔹 *Hint: loop with condition OR `Math.max(...arr)`.*

// function findMax(arr){
//     return Math.max(...arr)
// }
// console.log(findMax([10,25,3,50]));


// 7. Create a function `countVowels` that returns vowels count in `"Frontend"`.
//    🔹 *Hint: loop through string + check `"aeiou"`.*
// function countVowels(str) {
// let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let vowels = "aeiou";
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Frontend".toLowerCase()));


// 8. Write a function `reverseString` that reverses `"JavaScript"`.
//    🔹 *Hint: use `split("")`, `reverse()`, `join("")`.*
// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("JavaScript"));

// 9. Write a function `multiplyArray` that multiplies all numbers in `[2,3,4]`.
//    🔹 *Hint: initialize `1`, loop OR `reduce`.*
// function multiplyArray(arr){
//     return arr.reduce((acc,elem)=>acc*elem,1);
// }
// console.log(multiplyArray([2,3,4]));


// 10. Write a function `isPalindrome` to check if `"madam"` is palindrome.
//     🔹 *Hint: compare string with reversed version.*
// function isPalindrome(str){
//     let revStr=str.split("").reverse().join("");
//     if(str===revStr) return "Palindrome";
//     else return "Not Palindrome"
// }
// console.log(isPalindrome("madam"));

// ---

// ### Intermediate (11–20)

// 11. Create a higher-order function `applyOperation(arr, operation)` that applies an operation (like square, double) to each element.
//     🔹 *Hint: loop or `map` with callback.*

// function applyOperation(arr, operation) {
//     return arr.map(operation);
// }
// function square(num) {
//     return num*num;
// }
// function double(num) {
//     return num*2;
// }
// console.log(applyOperation([1, 2, 3], square));
// console.log(applyOperation([1, 2, 3], double));


// 12. Write a function `filterEven` that filters even numbers from `[1,2,3,4,5,6]`.
//     🔹 *Hint: use `filter` with condition.*

// function filterEven(arr){
//     return arr.filter(elem=>elem%2===0);
// }
// console.log(filterEven([1,2,3,4,5,6]));


// 13. Create a function `findLongWords` that returns words > 5 letters from `["AI","Frontend","Mastery","JS"]`.
//     🔹 *Hint: use `filter`.*

// function findLongWords(arr) {
//     return arr.filter(words => words.length > 5);
// }
// console.log(findLongWords(["AI", "Frontend", "Mastery", "JS"]));

// 14. Write a function `doubleNumbers` that doubles numbers in `[1,2,3,4]`.
//     🔹 *Hint: use `map`.*

// function doubleNumbers(arr){
//     return arr.map(num=>num*2);
// }
// console.log(doubleNumbers([1,2,3,4]));


// 15. Write a function `calculateTotal` that adds prices `[100,200,300]`.
//     🔹 *Hint: use `reduce`.*

// function calculateTotal(arr) {
//     return arr.reduce((acc, num) => acc + num, 0)
// }
// console.log(calculateTotal([100, 200, 300]));

// 16. Create a function `firstLetterCaps` that capitalizes first letter of each word in `"i love javascript"`.
//     🔹 \*Hint: use `split(" ")`, `map`, `charAt(0).toUpperCase()`. \*
// function firstLetterCaps(str) {
//     return str.split(" ").map(words => words[0].toUpperCase() + words.slice(1)).join(" ")
// }
// console.log(firstLetterCaps("i love javascript"));


// 17. Write a function `sortNumbers` to sort `[5,2,9,1]`.
//     🔹 *Hint: use `sort((a,b)=>a-b)`.*
// function sortNumbers(arr){
//    return  arr.sort((a,b)=>a-b);
// }
// console.log(sortNumbers([5,2,9,1]));

// 18. Write a function `wordCount` that counts words in `"Frontend Mastery Challenge"`.
//     🔹 *Hint: use `split(" ")` and length.*
// function wordCount(str){
//     return str.trim().split(/\s+/).length;
// }
// console.log(wordCount("Frontend Mastery Challenge"));

// 19. Create a callback example where `processArray([1,2,3], square)` returns `[1,4,9]`.
//     🔹 *Hint: loop + callback function.*

// function processArray(arr,callback){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         result.push(callback(arr[i])) //callback on each element
//     }
//     return result;
// }
//  function square(num){
//         return num*num;
//     }
// console.log(processArray([1,2,3],square));

//  function processArray(arr,callback){
//     return callback(arr);
//  }
//  function square(arr){
//   return arr.map(elem=>elem*elem)
//  }
//  console.log(processArray([1,2,3],square));

// 20. Write a function `findMin` using `reduce()` for `[8,-3,10,1]`.
//     🔹 *Hint: compare accumulator and current.*

// function findMin(arr){
//     return arr.reduce((acc,elem)=>acc>elem?elem:acc,arr[0])  //ternary operator
// }
// console.log(findMin([8,-3,-110,-11]));

// ---

// ### Advanced (21–30)

// 21. Write a function `compose` that takes two functions and composes them (e.g., `double(square(3))`).
//     🔹 *Hint: return function calling inside another.*

// function compose(fn1, fn2) {
//     return function (num) {
//         return fn1(fn2(num))
//     }
// }
// function double(n) {
//     return n * 2;
// }
// function square(n) {
//     return n * n;
// }
// console.log(compose(double, square)(3));

//Trick:
// compose(fn1, fn2)(x) → fn1(fn2(x))
// Agar order ulta kar do (fn2, fn1), result bhi badal jaata hai.

// 22. Create `customMap(arr, callback)` that works like `map()`.
//     🔹 *Hint: loop through array + push callback result.*

// function customMap(arr,callback){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr));
//     }
//     return result;
// }
// function square(num){
//     return num*num;
// }
// console.log(customMap([1,2,3,4],square));


// 23. Create `customFilter(arr, callback)` like `filter()`.
//     🔹 *Hint: if condition true → push element.*
// function customFilter(arr,callback){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//       if(callback(arr[i],i,arr)){ //if condition is true
//         result.push(arr[i]);
//       }
//     }
//     return result;
// }
// function oddNum(num){
//     return num%2!==0;
// }
// console.log(customFilter([1,2,3,4,5,6],oddNum));

// 24. Write `executeAfterDelay(callback, time)` that runs callback after delay.
//     🔹 *Hint: use `setTimeout`.*

// function executeAfterDelay(callback,time){
//     setTimeout(callback,time)
// }
// function greet(){
//     console.log("Hello ji kaise ho");
// }
// console.log(executeAfterDelay(greet,3000));


//  setTimeout(function(){
//     console.log("Hello World!!");

//  },2000)

// 25. Create `chainOperations(arr, [f1,f2,f3])` that applies multiple functions on array.
//     🔹 *Hint: loop through functions array.*

// function chainOperations(arr, fncs) {
//     let result=arr;
//     for (let fn of fncs) {
//         result = result.map(fn)
//     }
//     return result;
// }
// function double(num) {
//     return num * 2;
// }
// function square(num) {
//     return num * num;
// }
// function increment(num) {
//     return num+1;
// }
// console.log(chainOperations([1,2,3,4,5],[double,square,increment]));

// 26. Write `countOccurrences(arr)` that counts how many times each element occurs in `[1,2,2,3,1,4]`.
//     🔹 *Hint: use object/map.*

// function countOccurrences(arr){
//     let count={};
//     arr.map(no=>{
//         count[no]=(count[no]||0)+1;
//     })
//     return count;
// }
// console.log(countOccurrences([1,2,2,3,1,4,2,4,6,7]));

// 27. Write `groupByLength(words)` that groups words by length from `["AI","code","mastery","frontend"]`.
//     🔹 *Hint: loop + object push.*

// function groupByLength(words) {
//     let group = {};
//     words.forEach(word => {
//         let len = word.length;
//         if (!group[len]) {
//             group[len] = [];
//         }
//         group[len].push(word)
//     });
//     return group;
// }
// console.log(groupByLength(["AI", "code", "mastery", "frontend"]));

// 28. Write `sortByProperty(arr, prop)` that sorts array of objects by property.
//     🔹 *Hint: use `sort((a,b)=>a[prop]-b[prop])`.*
// function sortByProperty(arr, prop) {
//     return arr.sort((a, b) => {
//         if (a[prop] < b[prop]) return -1;
//         if (a[prop] > b[prop]) return 1;
//         return 0; // equal case
//     });
// }

// // Example usage
// let people = [
//     { name: "Tinku", age: 28 },
//     { name: "Pinku", age: 22 },
//     { name: "Rinku", age: 30 }
// ];

// console.log(sortByProperty(people, "age"));

// function sortByProperty(arr, prop) {
//     return arr.sort((a, b) => a[prop] - b[prop]);
// }

// 29. Write `debounce(func, delay)` function to limit function execution.
// //     🔹 *Hint: use `setTimeout`, `clearTimeout`.*
// function debounce(func, delay) {
//     let timer; // store timer id

//     return function(...args) {
//         // agar timer already hai → clear kar do
//         clearTimeout(timer);

//         // naya timer set karo
//         timer = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }

// // Example Usage:
// function logMessage(msg) {
//     console.log("Executed:", msg);
// }

// const debouncedLog = debounce(logMessage, 1000);

// // Agar bar-bar call karte ho
// debouncedLog("Hello");
// debouncedLog("Frontend");
// debouncedLog("Mastery");
// Sirf "Mastery" execute hoga 1 second baad


// 30. Write `throttle(func, delay)` function to limit calls at intervals.
//     🔹 *Hint: use `Date.now()` + condition.*
// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }

// // Example: Scroll
// function onScroll() {
//   console.log("Scroll event handled at", new Date().toLocaleTimeString());
// }

// const throttledScroll = throttle(onScroll, 2000);

// // Simulating scroll events
// setInterval(() => {
//   throttledScroll();
// }, 500); // call every 500ms

// ---
// ## 3️⃣ Mini Project – Task Scheduler with Callbacks

// **Goal:** Create a small program where:
// function added(task, callback) {
//     console.log(`task added : ${task}`);

//     //after 3 sec 
//     setTimeout(() => {
//         callback(task)

//     }, 3000)

// }
// function markCompleted() {
//     console.log("✅ task completed");

// }
// added("JAVA", markCompleted)

// * User inputs task name.
// * Task gets added to a list.
// * After 3 seconds, the task is marked as `"Completed"` using callback.

// 🔹 *Hint: use `setTimeout` + array + callback function.*

