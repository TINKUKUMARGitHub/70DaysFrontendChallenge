// ## 🟢 **Basic Questions (20)**

// 1. Print numbers from 1 to 10 using for loop

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// 2. Print even numbers 1–20

// for(let i=2;i<=20;i+=2){
//     console.log(i);

// }

// 3. Print reverse from 10 to 1

// for(let i=10;i>=1;i--){
//     console.log(i);

// }

// 4. Sum of numbers from 1 to 100

// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i;
// }
// console.log(sum);

// 5. Multiply all numbers from 1–10

// let multiply=1;
// for(let i=1;i<=10;i++){
//     multiply=multiply*i;
// }
// console.log(multiply);

// 6. Table of 5

// for(let i=1;i<=10;i++){
//     console.log(`5*${i}=${5*i}`);

// }

// 7. Table of any number (user input)

// let userNum=Number(prompt("Enter Any Number for Table"));

// for(let i=1;i<=10;i++){
//     console.log(`${userNum}*${i}=${userNum*i}`);

// }

// 8. Print first 10 odd numbers

// let i=1;
// let count=0;
// do{
//     console.log(i);
//     i+=2;
// count++;
// }while(count<10);

// 9. Factorial of 5 using loop

// let fact=1;
// for(let i=1;i<=5;i++){
//     fact=fact*i;
// }
// console.log(fact);

// 10. Print "Hello" 5 times

// for(let i=1;i<=5;i++){
//     console.log("Hello");

// }

// 11. Find sum of even numbers between 1–50

// let sum=0;
// for(let i=2;i<=50;i+=2){
//     console.log(i);
//     sum=sum+i;
// }
// console.log(sum);

// 12. Print squares of numbers 1–10

// for(let i=1;i<=10;i++){
//     console.log(`Square of ${i}=${i**2}`);

// }

// 13. Print cube of 1–10

// for(let i=1;i<=10;i++){
//     console.log(`cube of ${i}=${i**3}`);

// }

// 14. Print all numbers divisible by 3 between 1–30

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// 15. Take input n and print 1 to n

// let n=Number(prompt("enter a number"))
// for(let i=1;i<=n;i++){
// console.log(i);
// }

// 16. While loop: Print 1–5

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// 17. Do while loop: Print 1–5

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// 18. Print numbers from 100 to 1

// for(let i=100;i>0;i--){
//     console.log(i);

// }

// 19. Check if number is positive or negative (use loop to allow retry)

// let retry = true;

// while (retry) {
//   let num = Number(prompt("Enter a number:"));

//   if (num < 0) {
//     console.log("Number is Negative");
//   } else if (num === 0) {
//     console.log("Number is Zero");
//   } else {
//     console.log("Number is Positive");
//   }

//   let again = prompt("Do you want to try again? (yes/no)");
//   if (again.toLowerCase() !== "yes") {
//     retry = false;
//   }
// }

// 20. Print numbers between two inputs (start, end)

// let num1 = Number(prompt("enter first number"));
// let num2 = Number(prompt("enter second number"));

// if (num1 === num2) {
//   console.log("Both number are equals");
// } else if (num1 < num2) {
//   for (let i = num1 + 1; i < num2; i++) {
//     console.log(i);
//   }
// } else {
//   for (let i = num2 + 1; i < num1; i++) {
//     console.log(i);
//   }
// }

// ## 🟡 Intermediate Questions (20)

// 21. Nested loop: print pattern `* * * *`
//when  printing pattern --- think rows and column wise;

//  for(let row=1;row<=1;row++){
//   let line="";
//   for(let col=1;col<=4;col++){
//    line+="*"
//   }
//   console.log(line);

//  }

// 22. Print 1 to 10 with for loop inside while loop

// let condition=true;
// while(condition){
//   for(let i=1;i<=10;i++){
//     console.log(i);

//   }
//   condition=false;
// }

// 23. Sum of digits of a number

// let number = 345;
// let sum = 0;
// let strNum = String(number);
// for (let i = 0; i < strNum.length; i++) {
//   sum+= Number(strNum[i]);
// }
// console.log(sum);

// 24. Reverse a number

// let number = 123456789;
// let stringNumber = String(number);

// for (let i = stringNumber.length-1; i >= 0; i--) {
//   console.log(Number(stringNumber[i]));
// }

// 25. Check if number is palindrome

// let number = 244;
// let strNum = String(number);
// let reverseNum = ""; //empty string

// for (let i = strNum.length - 1; i >= 0; i--) {
//   reverseNum += strNum[i];
// }
// if (number === Number(reverseNum)) {
//   //string change into number
//   console.log("✅ Number is Palindrome");
// } else {
//   console.log("❌ Number is Not Palindrome");
// }

// 26. Print multiplication tables from 1 to 10

// let num=1;
// for(let i=1;i<=10;i++){
//   for(let j=1;j<=10;j++){
//       console.log(`${num}*${j}=${num*j}`);
//   }
//   num++;
// }

// other way

// for(let i=1;i<=10;i++){
//   for(let j=1;j<=10;j++){
//       console.log(`${i}*${j}=${i*j}`);
//   }
// }

// 27. Array: print all elements using for loop

// let arr=[2,7,8,3,5,6,9];
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);

// }

// 28. Array sum using for loop

// let arr=[8,53,8,7,10];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//   sum+=arr[i];
// }
// console.log(sum);

// 29. Find max/min in array

// let arr = [-2, 6, 32,0, 129, 11, 1, 16];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("Maximum value is:", max);

//
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log("Minimum value is:", min);

// let arr = [11, 26, 3, 409, 5];

// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(`Max of arr is : ${max} , and Min of arr is ${min}`);

// 30. Count even/odd in array

// let arr=[1,12,3,4,5,10,10,6,8];
// let evenCount=0;
// let oddCount=0;

// for(let i=0;i<arr.length;i++){
//   if(arr[i]<=0){
//     console.log("Either this number is negative or zero");

//   }else if(arr[i]%2===0){
//     evenCount++;
//   }else{
//     oddCount++;
//   }

// }
// console.log(`Total even count is: ${evenCount}, total odd count is:  ${oddCount}`);

// 31. Find if number exists in array

// let arr = [1, 2, 3, 4, 5];
// let num = 15;
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log(`Number is present in an array : ${num}`);
// } else {
//   console.log(`Number is Not  present in an array : ${num}`);
// }

// 32. Print characters of string using for loop

// let str="vegetables";
// for(let i=0;i<str.length;i++){
//   console.log(str[i]);

// }

// 33. Sum of first n natural numbers
// let n=10;
// let sum=0;
// for(let i=1;i<=n;i++){
//   sum+=i;
// }
// console.log("sum of n natural number is: ",sum);

// 34. Sum of squares from 1 to  n;

// let n=5;
// let sum=0;

// for(let i=1;i<=n;i++){
//   sum+=i**2;
// }
// console.log(sum);



// 35. Count vowels in string using loop

// let str="appile";
// str=str.toLowerCase();
// let count=0;
// for(let i=0;i<str.length;i++){

//   if(
//     str[i]==="a"||
//     str[i]==="e" ||
//     str[i]==="i" ||
//     str[i]==="o" ||
//     str[i]==="u" 
//   ){
//   count++;
//   }

//   }

// console.log("Number of Vowel Count is : ",count);

// or 

// let str = "apple";
// str = str.toLowerCase();
// let vowel = "aeiou";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (vowel.includes(str[i])) {
//     count++;
//   }
// }
// console.log("Number of Vowel Count is : ", count);

// 36. Check prime number using loop
//A prime number is a number which has only 2 factors i.e 1 and itself.prime number starts from 2;

// let num = 17;
// let isPrime = true;

// if (num < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if(isPrime){
//   console.log(num+ " It is a Prime Number");

// }else{
//   console.log(num + " It is not a prime number");

// }

//
// 37. Print all prime numbers from 1–100

// for (let num = 2; num <= 100; num++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(num); j++) {
//     if (num % j === 0) {
//       isPrime = false;
//       break;

//     }
//   }
//   if (isPrime) {
//     console.log(num);

//   }
// }

// 38. Print Fibonacci series using loop

// let n = 10;
// let first = 0;
// let second = 1;

// for (let i = 1; i <= n; i++) {
//   console.log(first);
//   let next = first + second;
//   first = second;
//   second = next;
// }

// let Fibonacci=[];
// for(let i=1;i<=n;i++){
//   Fibonacci.push(first);
//   let next=first+second;
//   first=second;
//   second=next
// }
// console.log(Fibonacci.join(","));



// 39. Pattern: Triangle
//using nested loop for pattern

// let rows = 5;
// for (let row = 1; row <= rows; row++) {
//   let pattern = "";
//   for (let i = 1; i <= row; i++) {
//     pattern += "*";
//   }
//   console.log(pattern);

// }

// 40. Print multiplication table using nested loop

// let num = 10;
// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= num; j++) {
//    console.log(`${i}*${j}=${i * j}`);

//   }

// }

// ## 🔴 Logic Builder (10)

// 41. Print this pattern:

// ```
// *
// * *
// * * *
// * * * *
// ```

// let row = 4;

// for (let i = 1; i <= row; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);

// }

// 42. Sum of even digits in a number

// let num=[1,2,3,3,4,5,8,12,7,10];
// let sum=0;
// for(let i=0;i<num.length;i++){
//   if(num[i]%2===0){
//     sum+=num[i];
//   }
// }
// console.log("Sum of even number is : ", sum);

// 43. Find sum till n where n is user input

//  let n= Number(prompt("enter a number"));
// let sum=0;
// for(let i=1;i<=n;i++){
//  sum+=i
// }
// console.log(sum);


// 44. Reverse a string using loop

// let str="lion";
// for(let i=str.length-1;i>=0;i--){
//   console.log(str[i]);

// }

// 45. Find GCD of two numbers using loop

// let num1=12;
// let num2=18;
// let gcd=1;

// for(let i=1;i<=Math.min(num1,num2);i++){
//   if(num1%i===0 && num2%i===0){
//     gcd=i;
//   }
// }
// console.log(gcd);

// 46. Find LCM using loop

// let num1 = 4;
// let num2 = 6;
// let lcm = Math.max(num1, num2);
// while (true) {
//   if (lcm % num1 === 0 && lcm % num2 === 0) {
//     break;
//   }
//   lcm++;
// }
// console.log(lcm);

// 47. Count digits in a number

// let number=123457936;
// let count=String(number).length;

// console.log("total count is: ", count);

// 48. Print factorial of n

// let n=5;
// let fact=1;
// for(let i=1;i<=n;i++){
//   fact=fact*i;
// }
// console.log(fact);

// 49. Calculate power: 2^3 using loop
// console.log(Math.pow(2,3));

// let base=2;
// let power=3;
// let result=1;

// for(let i=1;i<=power;i++){
//   result=result*base;
// }
// console.log(result);



// 50. Find first n prime numbers

// let n = 10;  // Number of prime numbers to print
// let count = 0;  // Count of primes found
// let num = 2;    // Start checking from 2 (first prime)

// while (count < n) {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//     count++;  // Found a prime, increase count
//   }

//   num++;  // Check next number
// }
