
// ## **3. Practice Questions (30)**

// ### **Basic – Understanding Functions**

// 1. Create a function `sayHello()` that prints "Hello World".
// function sayHello(){
//     return "Hello World!"
// }
// console.log(sayHello());

// 2. Write a function `square(num)` that returns the square of a number.
// function square(num){
//     return num*num;
// }
// console.log(square(5));

// 3. Create a function that adds two numbers and returns the result.
// function adds(num1,num2){
//     return num1+num2;
// }
// console.log(adds(4,5));

// 4. Make a function `isEven(num)` that returns `true` if the number is even, otherwise `false`.
// function isEven(num) {
//     if (num <= 0) return "Number should be greater than zero";
//     if (num % 2 === 0) {
//         return "Even Number";

//     } else {
//         return "Odd Number";

//     }
// }
// console.log(isEven(123));

// 5. Create a function `greet(name)` that returns `"Hello, <name>!"`.
// function greet(name){
//     return `Hello ${name}!`
// }
// console.log(greet("Anjali"));


// ### **Intermediate – Parameters & Return**

// 6. Function that returns the area of a rectangle (length × width).
// function areaOfRectangle(l,w){
//     return l*w;
// }
// console.log(areaOfRectangle(5,4));

// 7. Function that returns the cube of a number.
// function cubeOfNum(num){
//     return num**3;
// }
// console.log(cubeOfNum(13));

// 8. Function `calculateBill(amount, taxRate)` that adds tax to amount.
// function calculateBill(amount,taxRate){
//     return amount+(amount*taxRate)/100;
// }
// console.log(calculateBill(1000,5));

// 9. Function `convertToFahrenheit(celsius)` to convert Celsius to Fahrenheit.
// function convertToFahrenheit(celsius){
//     return (celsius*(9/5))+32;
// }
// console.log(convertToFahrenheit(15));

// 10. Function `findMax(a, b)` to return the larger number.
// function findMax(a,b){
//     if(a>b) return `${a} is Max`;
//     else return `${b} is max`;
// }
// console.log(findMax(-115,-112));


// ### **Logic Practice**

// 11. Function `sumOfThree(a, b, c)` returning their sum.
// function sumOfThree(a,b,c){
//     return a+b+c;
// }
// console.log(sumOfThree(12,3,4));

// 12. Function `isPositive(num)` returning true if positive.
// function isPositive(num){
//     if(num<=0) return "Number is less than or equal to zero";
//     else return true;
// }
// console.log(isPositive(10));

// 13. Function `daysToWeeks(days)` returning number of weeks.

//  function daysToWeeks(days){
//  let result=Math.floor(days/7) ; //Math.ceil(days/7);
//  return result + " full weeks ";

//  }
//  console.log(daysToWeeks(362));

// 14. Function that returns factorial of a number using loop.
// function findFactorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//       fact=fact*i;
//     }
//     return fact;
// }
// console.log(findFactorial(10));

// 15. Function `isDivisibleBy(num, divisor)` returning true/false.
// function isDivisibleBy(num,divisor){
//     // return (num%divisor===0)?true:false;
//      return num%divisor===0  //or 
// }
// console.log(isDivisibleBy(12,7));


// ### **Mini Problem Solving**

// 16. Function that takes two strings and returns them concatenated.
// function mergeStr(str1,str2){
//     return str1.concat(str2);
//    // or  return str1+str2;
// }
// console.log(mergeStr("Hello"," World"));

// 17. Function that takes a number and returns its multiplication table (1–10).
// function table(num) {
//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//         result += `${num}x${i}=${num * i}\n`;

//     }
//     return result;
// }
// console.log(table(15));

// 18. Function `isLeapYear(year)` returning true/false.
// function isLeapYear(year){
//     return ((year%4===0) && (year%100!==0)|| (year%400===0))

// }
// console.log(isLeapYear(2028));

// 19. Function to reverse a string without using built-in methods.
// function reverseStr(str){
//     let revStr="";
//     for(let i=str.length-1;i>=0;i--){
//     revStr+=str[i];
//     }
//     return revStr;
// }
// console.log(reverseStr("mahendra automatics"));

// 20. Function `getFullName(firstName, lastName)` returning full name.
// function getFullName(firstName,lastName){
//     return firstName+lastName;
// }
// console.log(getFullName("tejas"," desai"));


// ### **Advanced Thinking**

// 21. Function that checks if a number is prime.

// function isPrime(num) {
//     if(num<=1) return false;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0) return false;
//     }
//     return true
// }
// console.log(isPrime(20));
// console.log(isPrime(2));

// 22. Function to count vowels in a string.
//  function countVowel(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         let vowels="aeiou";
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
//  }
//  console.log(countVowel("AEIOU".toLowerCase()));

// 23. Function that returns the sum of all numbers from 1 to n.
// function sumOfNumber(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfNumber(10));

// 24. Function `getGrade(marks)` returning A/B/C/F based on marks.
//   function getGrade(marks){
//     if(marks>=90) return " Grade A";
//     if(marks>=60) return "Grade B";
//     if(marks>=30) return "Grade C";
//     else return "Grade F"
//   }
//   console.log(getGrade(99));

// 25. Function to check if a given string is a palindrome.
// function checkPalindrome(str) {
//     str=str.toLowerCase();
//     let res = str.split("").reverse().join("");
//     if (res === str) {
//         return "Palindrome"
//     }
//     return "Not Palindrome"
// }
// console.log(checkPalindrome("Madam"));

// 26. Function to calculate compound interest.
// function calculateCompoundInterest(p, r, t) {
//     let amount = p * ((1 + (r / 100)) ** t);
//     let interest = amount - p;
//     return interest.toFixed(2);
// }
// console.log(calculateCompoundInterest(1000, 12, 15));

// 27. Function `getFactorialRecursion(n)` using recursion.
// function getFactorialRecursion(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     return n* getFactorialRecursion(n-1);
// }
// console.log(getFactorialRecursion(5));

// 28. Function that returns the minimum of three numbers.
// function findMinOfThreeNo(num1,num2,num3){
//     return Math.min(num1,num2,num3);
// }
// console.log(findMinOfThreeNo(11,1,10));
// or 
// function findMinOfThreeNo(num1, num2, num3) {
//     if (num1 <= num2 && num1 <= num3) return num1;
//     if (num2 <= num1 && num2 <= num3) return num2;
//     return num3;
// }
// console.log(findMinOfThreeNo(11,12,13));

// 29. Function to generate first `n` Fibonacci numbers.

// function generateFibonacci(num){
//     if(num<=0) return [];
//     if(num===1) return [0];
//     let fib=[0,1];
//     for(let i=2;i<num;i++){
//         fib.push(fib[i-1]+fib[i-2]);
//     }
//     return fib;
// }
// console.log(generateFibonacci(15));


// 30. Function to check if a given year is a century year.
// function isCenturyYear(year) {
//     return (year % 100 === 0) ? "Century Year" : "Not a Century Year";
// }
// console.log(isCenturyYear(2003));


// ## **4. Mini Project – Function-based Calculator**

// **Description:**
// Build a calculator that:

// * Uses **functions** for each operation (`add`, `subtract`, `multiply`, `divide`).
// * Takes user input for two numbers and operation type.
// * Returns result using `return` statement.
// **Example:**

// ```javascript
// function add(a, b) { return a + b; }
// function subtract(a, b) { return a - b; }
// function multiply(a, b) { return a * b; }
// function divide(a, b) { return b !== 0 ? a / b : "Cannot divide by zero"; }

// console.log(add(5, 3));       // 8
// console.log(divide(10, 2));  // 5

// let num1 = Number(prompt("Enter First Number"));
// let num2 = Number(prompt("Enter second Number"));
// let operation=prompt("Enter operation name : add , subtract , multiply , divide");

// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return (num2 !== 0) ? num1 / num2 : "Cannot divide by zero"
// }

// let result;
// if(operation==="add"){
//     result=add(num1,num2)
// }else if(operation==="subtract"){
//     result=subtract(num1,num2)
// }else if(operation==="multiply"){
//     result=multiply(num1,num2)
// }else if(operation==="divide"){
//     result=divide(num1,num2)
// }else{
//     result="Invalid Operation"
// }
// console.log("Result : ", result);


