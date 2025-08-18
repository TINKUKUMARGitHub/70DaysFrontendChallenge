
//  Practice Questions (30)**

// ### **Function Expressions**

// 1. Create a function expression to multiply two numbers.
// let multiply=function(num1,num2){
//     return num1*num2;
// }
// console.log(multiply(13,10));

// 2. Function expression to check if a number is positive.
// let checkPositive=function(num){
//     if(num>0) return "Positive"
//     else return "Negative/Zero"
// }
// console.log(checkPositive(-10));

// 3. Function expression to find the minimum of two numbers.
// let findMin=function(num1,num2){
//     return Math.min(num1,num2);
// }
// console.log(findMin(10,-20));

// 4. Store a function expression that reverses a string.

// let reverseStr = function (str) {
//     let res = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         res += str[i]
//     }
//     return res;
// }
// console.log(reverseStr("greeting"));

// 5. Create a function expression to check if a string contains a specific character.


// let containsChar=function(str,char){
//     return str.includes(char)? "Contains Character":" Donot Contains Character";
// }
// console.log(containsChar("Hello".toLowerCase(),"R".toLowerCase()));

// let containsChar = function (str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return "Character Contains"
//         }
//      }
//     return "Character Not Contains"
// }
// console.log(containsChar("Hello".toLowerCase(), "E".toLowerCase()));



// ### **Arrow Functions – Basics**

// 6. Convert the function `add(a, b)` into an arrow function.
// let add=(a,b)=>a+b;
// console.log(add(12,14));

// 7. Arrow function that returns the square of a number.
// let square=(num)=>num**2;
// console.log(square(11));

// 8. Arrow function that checks if a number is odd.
// let checOdd=(num)=>{
//     if(num<=0) return "Invalid Input"
//     if(num%2!==0) return "odd Number"
//     return "Even Number"
// }
// console.log(checOdd(13));

// 9. Arrow function to concatenate two strings.
// let concateStr=(str1,str2)=>str1+str2;
// console.log(concateStr("Hello","world"));

// 10. Arrow function that returns `"Good Morning"` with a name.
// let greet=(name)=> `Good Morning 🌞 ${name}!` ;
// console.log(greet("John"));




// ### **Arrow Functions – Advanced**

// 11. Arrow function to filter even numbers from an array.
// let filterEvenNo=(arr)=>{
//     return arr.filter((elem)=>elem%2===0)
// }
// console.log(filterEvenNo([1,2,3,4,5,10,1,11,24,45,67,89,86]));

// 12. Arrow function to return the sum of all array elements.

// let sumOfArrElem=(arr)=>{
//     return arr.reduce((acc,indx)=>acc+indx,0)
// }
// console.log(sumOfArrElem([1,2,3,4,5]));

// 13. Arrow function to count vowels in a string.
// let countVowel = (str) => {
//     let vowels = "aeiou";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// or 

// let countVowel=(str)=>str.split("").filter(ch=>"aeiou".includes(ch)).length;
// console.log(countVowel("AEIouaes".toLowerCase()));

// 14. Arrow function to find factorial of a number.
// let factorial=(num)=>{
//    let fact=1;
//    for(let i=1;i<=num;i++){
//     fact=fact*i;
//    }
//  return fact;
// }
// console.log(factorial(4));

// 15. Arrow function to find max number in an array.

// let maxNum=(arr)=>Math.max(...arr);
// console.log(maxNum([11213,12,311,41,5]));

// or 
// let maxNum=(arr)=>arr.reduce((max,elem)=>elem>max?elem:max,arr[0]);
// console.log(maxNum([11,112,31,412,5]));


// ### **Default Parameters**

// 16. Function with default parameter for name greeting.
// function greeting(name = "Lord Ganesha") {
//     return ` ${name} Ohm Shri Ganeshyayo  Namah 🙏🙏🙏 `
// }
// console.log(greeting());

// 17. Function with default tax rate for bill calculation.
// function billCalculation(amount, taxRate = 12) {
//     let bill = (amount + (amount * (taxRate / 100))).toFixed(2)
//     return bill;
// }
// console.log(billCalculation(1110));

// 18. Function that calculates area of rectangle with default width = 5.
// function calculateArea(length,width=5){
//     return (length*width);
// }
// console.log(calculateArea(10));

// 19. Function with default parameter for discount percentage.
// function discountPercentage(amount,discount=12){
//     let billAfterDiscount=amount-(amount*(discount/100));
//     return billAfterDiscount;
// }
// console.log(discountPercentage(100));

// 20. Function with default parameter to print multiplication table of 10.
// function printTable(num=10){
//     let res="";
//     for(let i=1;i<=10;i++){
//         res+=`${num}x${i}=${num*i}\n`
//     }
//     return res;
// }
// console.log(printTable(25));


// ### **Mixed Practice**

// 21. Create a calculator using arrow functions for each operation.
//    let add=(a,b)=>a+b;
//    let subtract=(a,b)=>a-b;
//    let multiply=(a,b)=>a*b;
//    let divide=(a,b)=>b!==0?a/b:"Error : Division by Zero";
//    console.log(add(10,20));

// const calculator = {
//     // key:value pairs 
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => b !== 0 ? a / b : "Error:Division by zero"
// };
// console.log(calculator.add(10,30));
// console.log(calculator.subtract(10,30));
// console.log(calculator.multiply(10,30));
// console.log(calculator.divide(10,30));

// 22. Arrow function with default parameters to calculate BMI.
// let calculateBMI = (weightInKg=60, heightInMeter=1.7) => {
//     let BMI = (weightInKg / heightInMeter ** 2).toFixed(2);
//     if (BMI < 18.5) return "under weight";
//     else if (BMI >= 18.5 && BMI <= 24.9) return "normal weight";
//     else if (BMI >= 25 && BMI <= 29.9) return "over weight";
//     else return "Obese"
// }
// console.log(calculateBMI(38, 1.6));
// console.log(calculateBMI());

// 23. Function expression that returns whether a year is leap year.
// let checkLeapYear = function (year) {
//     return ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? "Leap Year" : "Not  Leap Year";

// }
// console.log(checkLeapYear(2028));

// 24. Arrow function to generate n Fibonacci numbers.
// let fibonacci = (n) => {
//     if (n === 0) return 0;        // base case
//     if (n === 1) return 1;        // base case
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5)); // 5  (sequence: 0,1,1,2,3,5)
// or 

// let fibonacci = (n) => {
//     let series = [0, 1];
//     for (let i = 2; i < n; i++) {
//         series.push(series[i - 1] + series[i - 2])
//     }
//     return series.slice(0, n) //in case n<2
// }
// console.log(fibonacci(10));


// 25. Function expression to return initials of a name.
// let initialsOfName = function (str) {
//     let words = str.split(" ");
//     let initials = " ";
//     for (let i = 0; i < words.length; i++) {
//         initials += words[i][0].toUpperCase() + " "
//     }
//     return initials;
// }
// console.log(initialsOfName("elon"));

// 26. Arrow function to check palindrome.
// let checkPalindrome=(str)=>{
//     let revStr=str.split("").reverse().join("");
//     if(str===revStr) return "Palindrome"
//     else return "Not Palindrome"
// }
// console.log(checkPalindrome("madame".toLowerCase()));

// 27. Function expression with default parameter to greet user in uppercase.
//   let greet=function(user="vikram"){
//     return `${user}  ohm mangalam !!`
//   }
//   console.log(greet());

// 28. Arrow function to count words in a sentence.
// let countWords=(sentence)=>{
//     let words=sentence.trim().split(" ").join("")
//     return words.length;
// }
// console.log(countWords("Hii i am a good boy"));

// 29. Function expression to find intersection of two arrays.
// let intersection=function(arr1,arr2){
//     return arr1.filter(value=>arr2.includes(value))
// };
// console.log(intersection([1,2,3,4,5],[6,5,8,3,2]));

// 30. Arrow function to return average of numbers in array.
// let averageOfNum = (arr) => {
//     if(arr.length===0) return 0;
//     let res = arr.reduce((acc, elem) => acc + elem, 0);
//     let average = res / arr.length;
//     return average;
// }
// console.log(averageOfNum([18,21,232,445,9]));
