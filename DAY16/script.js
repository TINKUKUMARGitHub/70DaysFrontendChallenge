// for(let i = 1; i <= 3; i++){
//   for(let j = 1; j <= 2; j++){
//     console.log(i, j);
//   }
// }

// ## ✅ 3. 💪 PRACTICE: 50 Loop-Based Questions (Only New Today)

// These are fresh for Day 16 advanced logic training.*

// ````js
// 1. Print sum of squares from 1 to 10

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i ** 2;

// }
// console.log(sum);

// 2. Reverse a given number (1234 → 4321)

// let number = 1234;
// let strNum  = String(number);
// let result = "";
// for (let i = strNum.length - 1; i >= 0; i--) {
//     result +=strNum[i];
// }
// console.log("Reverse number is : ",Number(result));

// 3. Count even and odd digits in a number
// let number= 1212323;
// let strNum=String(number);
// let evenCount=0;
// let oddCount=0;

// for(let i=0;i<strNum.length;i++){
//     let digit=Number(strNum[i]);//convert character to number
//     if(digit<=0){
//         console.log("Its not a even or odd number ");

//     }else if(digit%2===0){
//         evenCount++;
//     }else{
//         oddCount++;
//     }

// }
// console.log(`Total even count is :  ${evenCount} , and total odd count is : ${oddCount} in a given number`);

// 4. Count how many 0s in a number (e.g. 10203)
// let number=10203;
// let strNum=String(number);
// let countZeroes=0;

// for(let i=0;i<strNum.length;i++){
//   if(strNum[i]==="0"){
//     countZeroes++;
//   }
// }
// console.log(`Total Count of Zeroes in a number is : ${countZeroes}`);


// 5. Count digits in number

// let number=12323;
// let strNum=String(number);
// let countDigit=0;
// for(let i=0;i<strNum.length;i++){
//     countDigit++;
// }
// console.log(countDigit);

// 6. Find product of digits of a number

// let number=123;
// let strNum=String(number);
// let productOfNum=1;
// for(let i=0;i<strNum.length;i++){
//   productOfNum=productOfNum*Number(strNum[i]);
// }
// console.log(`Product of Number is : ${productOfNum}`);


// 7. Sum of digits of a number (123 → 6)

// let number=123;
// let strNum=String(number);
// let sum=0;
// for(let i=0;i<strNum.length;i++){
//  sum+=Number(strNum[i]);
// }
// console.log(`Sum of a number is : ${sum}`);

// 8. Find LCM of two numbers

// let num1 = 6;
// let num2 = 12;
// let lcm;
// for (let i = 1; i <= num1 * num2; i++) {
//     if (i % num1 === 0 && i % num2 === 0) {
//         lcm = i;
//         break;
//     }
//     lcm++;
// }
// console.log(lcm);


// 9. Find GCD of two numbers

// let num1=6;
// let num2=9;
// let gcd=1;

// for(let i=1;i<=Math.min(num1,num2);i++){
//     if(num1%i===0 && num2%i===0){
//         gcd=i;
//     }

// }
// console.log(gcd);




// 10. Print Fibonacci series upto 10 terms

// let n=10;
// let fib=[0,1];
// for(let i=2;i<n;i++){
//     fib[i]=fib[i-1]+fib[i-2];
// }
// console.log(fib.join(","));


// 11. Check whether a number is palindrome

// let number = 121;
// let strNum = String(number);
// let reversedStr = "";
// for (let i = strNum.length - 1; i => 0; i--) {
//     reversedStr += strNum[i];

// }
// if (reversedStr === strNum[i]) {
//     console.log("Number is Palindrome");

// } else {
//     console.log("Number is not a Palindrome");

// }

// 12. Check whether a number is Armstrong (153)

// let num = 153;
// let strNum = String(num);

// let armSum = 0;
// for (let i = 0; i < strNum.length; i++) {
//     armSum += Number(strNum[i]) ** strNum.length
// }
// if (num === armSum) {
//     console.log("Number is Armstrong ");

// } else {
//     console.log("Number is not  Armstrong");
// }


// 13. Find average of N numbers
// let n=5;
// let sum=0;
// for(let i=1;i<=n;i++){
//  sum+=i;
// }
// let average=sum/n;
// console.log(average);

// 14. Find sum of odd numbers from 1–100

// let sum=0;
// for(let i=1;i<=100;i++){
//     if(i%2!==0){
//         sum+=i
//     }
// }
// console.log(sum);

// 15. Find sum of even numbers from 1–100

// let sum=0;
// for(let i=1;i<=100;i++){
//     if(i%2===0){
//         console.log(i);

//         sum+=i
//     }
// }
// console.log(sum);

// 16. Print multiplication table of any number
// let n = 182;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);

// }

// 17. Print all numbers divisible by 7 between 1–100

// console.log(" All Number Divisible by 7 is: ");

// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0) {
//         console.log(` ${i}`);

//     }
// }
// or 

// for(let i=7;i<=100;i+=7){
//     console.log(i);

// }

// 18. Print table from 1 to 10 using nested loop

// for(let i=1;i<=10;i++){
//     console.log("-------------");

//     for(j=1;j<=10;j++){
//         console.log(`${i}x${j}=${i*j}`);

//     }
// }


// 19. Print prime numbers from 1 to 50

// for(let j=2;j<=50;j++){
//     let isPrime=true;
//     for(let i=2;i<=Math.sqrt(j);i++){
//         if(j%i===0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(j);

//     }
// }


// 20. Check if a number is prime

// let num = 9;
// if (num < 2) {
//     console.log("Number should be greater then equal to 2.")

// } else {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;

//         }
//     }
//     if (isPrime) {
//         console.log(`Number is Prime and number is : ${num}`);

//     } else {
//         console.log("Number is not Prime");

//     }
// }

// 21. Convert binary number to decimal

// let binary = 1010;
// let strBinary = String(binary);
// let binaryNum = 0;
// for (let i = 0; i < strBinary.length; i++) {
//     let power = strBinary.length - 1 - i;
//     let digit = Number((2 ** power) * strBinary[i]);
//     binaryNum += digit;
// }
// console.log(binaryNum, typeof binaryNum);

// 22. Convert decimal to binary using loop

// let decimal=13;
// let binary="";
// let num=decimal;

// while(num>0){
//     let remainder=num%2;
//     binary=remainder+binary;
//     num=Math.floor(num/2);

// }
// console.log(`Decimal value of ${decimal} = ${binary} Binary number`);


// 23. Count vowels in a string using loop

// let str="apple";
// str=str.toLowerCase();
// let vowel=["a","e","i","o","u"];
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(vowel.includes(str[i])){
//      count++;
//     }
// }
// console.log(`Count of vowel is : ${count}`);


// 24. Print pattern:
//     ```
//     1
//     2 3
//     4 5 6
//     ```

// let count = 1;

// for (let i = 1; i <= 3; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += count + " ";
//         count++;
//     }
//     console.log(line);

// }


// 25. Inverted triangle of numbers

// for (let i = 5; i >= 0; i--) {
//     let line = "";
//     for (j = 1; j <= i; j++) {
//         line += j + " ";
//     }
//     console.log(line);

// }

// 26. Hollow rectangle using `*`

// for (let i = 1; i <= 4; i++) {
//     let stars = "";
//     for (let j = 1; j <= 4; j++) {
//         if (i === 1 || i === 4 || j === 1 || j === 4) {
//             stars += "*";
//         } else {
//             stars += " ";
//         }

//     }
//     console.log(stars);

// }


// 27. Print:
//     ```
//     A
//     A B
//     A B C
//     ```


// for (let i = 1; i <= 3; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += String.fromCharCode(65 + (j - 1)) + " ";
//     }
//     console.log(line.trim());

// }

// 28. Find factorial of number using loop

// let number=10;
// let fact=1;
// for(let i=1;i<=number;i++){
//  fact=fact*i;
// }
// console.log(`factorial of a number ${number} = ${fact}`);

// 29. Find power of number using loop (2^3 = 8)

// let power = 3;
// let num = 3;
// let result = 1;
// for (let i = 1; i <= power; i++) {
//     result = result * num;
// }
// console.log(result);

// 30. Remove all digits >= 5 in number (e.g. 548392 → 432)

// let num=548392;
// let strNum=String(num);
// let result="";
// for(let i=0;i<strNum.length;i++){
//     if(strNum[i]<5){
//      result+=strNum[i];
//     }
// }
// console.log(Number(result));

// 31. Sum digits until it becomes single digit (e.g. 987 → 9+8+7 = 24 → 2+4 = 6)

// let digit = 987;
// while (digit >= 10) {
//     let strDigit = String(digit);
//     let result = 0;
//     for (let i = 0; i < strDigit.length; i++) {
//         result += Number(strDigit[i]);
//     }
//     digit = result;
// }
// console.log(digit);


// 32. Addition , alternate digits of a number

// let number = 1234567;
// let strNum=String(number);
// let sum=0;
// for (let i = 0; i <strNum.length; i += 2) {
//     sum+= Number(strNum[i]);
// }
// console.log(sum);

// 33. Print triangle of `#` using nested loop


// for (let i = 1; i <= 3; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += "#"
//     }
//     console.log(line);

// }

// 34. Calculate compound interest using loop

// let principal=1000;
// let rate=5;
// let time=3;

// let amount=principal;

// for(let i=1;i<=time;i++){
//    let interest=(amount*rate)/100;
//    amount+=interest;
//    console.log(`Year ${i} amount =  ${amount.toFixed(2)}`);
// }
// let compoundInterest=amount-principal;
// console.log("Total Compound Interest Amount  is : ",compoundInterest.toFixed(2));


// 35. Check if number is Harshad number

// let number=19;
// let strNum=String(number);
// let sumOfDigit=0;
// for(let i=0;i<strNum.length;i++){
//  sumOfDigit+=Number(strNum[i]);
// }
// if(number%sumOfDigit===0){
//     console.log("Harshad Number");

// }else{
//     console.log("Not Harshad Number");

// }

// 36. Print:
//     ```
//     *
//     * *
//     * * *
//     * * * *
//     ```

// for(let i=1;i<=4;i++){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+="*"
//     }
//     console.log(line);
// }

// 37. Print:
//     ```
//     1
//     2 2
//     3 3 3
//     ```
// for(let i=1;i<=3;i++){
//     let line=" ";
//     for(let j=1;j<=i;j++){
//         line+=i+" ";
//     }
//     console.log(line);

// }

// 38. Convert string to reverse using loop

//  let str="abcdefghi";
//  let revStr="";
//  for(let i=str.length-1;i>=0;i--){
//     console.log(str[i]);
//     revStr+=str[i]

//  }
// console.log(revStr);

// 39. Count how many characters in string without using `.length`

// let str="apple";
// let count=0;

// for(let i=0; str[i]!==undefined;i++){
//  count++;
// }
// console.log(count);

// 40. Print X pattern

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let rows = "";
//     for (let j = 0; j < n; j++) {
//         if (j === i || j === n - i - 1) { //diagonal print x
//             rows += "x"
//         } else {
//             rows += " ";
//         }
//     }
//     console.log(rows);

// }

// 41. Remove all vowels from a string using loop

// let vowel = ["a", "e", "i", "o", "u"];
// let str = "orange";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//     if (!vowel.includes(str[i])) {
//         result += str[i];

//     }
// }
// console.log(result);

// 42. Print 2D grid of numbers using nested loop

// let row = 3;
// let col = 3;
// let num = 1;
// for (let i = 1; i <= row; i++) {
//     let line = "";
//     for (let j = 1; j <= col; j++) {
//         line += num + " ";
//         num++;
//     }
//     console.log(line);

// }

// 43. Print table of squares using loop

// for(let i=1;i<=10;i++){
//     let rows="";
//     for(let j=1;j<=10;j++){
//         rows+=(j**2)+"\n"

//     }
//     console.log(rows);

// }

// 44. Find which digit appears most in a number

// let number=12344722;
// let strNum=String(number);

// let mostAppearsNum=strNum[0];
// let maxCount=0;

// for(let i=0;i<strNum.length;i++){
//     let count=0;
//  for(let j=0;j<strNum.length;j++){
//     if(strNum[i]===strNum[j]){
//         count++;
//     }
//  }
//  if(count>maxCount){
//     maxCount=count;
//     mostAppearsNum=strNum[i];
//  }
// }
// console.log(mostAppearsNum);

// 45. Check if number is automorphic (25 → 25² = 625 → ends with 25)
// let num = 25;
// let square = num * num;

// let isAutomorphic = true;
// let tempNum = num;
// let tempSquare = square;

// Compare digits from the end

// while (tempNum > 0) {
//     if (tempNum % 10 !== tempSquare % 10) {
//         isAutomorphic = false;
//         break;
//     }
//     tempNum = Math.floor(tempNum / 10);
//     tempSquare = Math.floor(tempSquare / 10);
// }

// if (isAutomorphic) {
//     console.log(`${num} is an Automorphic number`);
// } else {
//     console.log(`${num} is NOT an Automorphic number`);
// }

// 46. Print first 10 palindromes
// let count = 0;

// for (let num = 1; count < 10; num++) {
//     let temp = num;
//     let reverse = 0;

//     // Reverse the number
//     for (let t = temp; t > 0; t = Math.floor(t / 10)) {
//         reverse = reverse * 10 + (t % 10);
//     }

//     // Check if palindrome
//     if (num === reverse) {
//         console.log(num);
//         count++;
//     }
// }


// 47. Print even numbers in reverse (100 to 1)

// for(let i=100;i>=1;i-=2){
//     console.log(i);

// }

// 48. Print pattern:
//     ```
//     * * * *
//       * * *
//         * *
//           *
//     ```

// for (let i = 3; i >= 0; i--) {
//     let stars = "";
//     for (let j = i; j >= 0; j--) {
//         stars += " "+ "*" 
//     }
//     console.log(stars);

// }

// for (let i = 4; i >= 1; i--) {  // 4 stars in first row
//     let line = "";

//     // Add spaces for indentation
//     for (let space = 0; space < 4 - i; space++) {
//         line += "  "; // double space for alignment
//     }

//     // Add stars
//     for (let star = 1; star <= i; star++) {
//         line += "* ";
//     }

//     console.log(line);
// }


// 49. Convert lowercase to uppercase without `.toUpperCase()`

// let str="apple";
// let upperCaseOfStr=str.toUpperCase();
// console.log(upperCaseOfStr);


// let result = "";

// for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);

//     if (code >= 97 && code <= 122) { // lowercase check
//         result += String.fromCharCode(code - 32); // convert to uppercase
//     } else {
//         result += str[i]; // keep as is
//     }
// }

// console.log(result); 

// 50. Build pyramid of numbers using nested loop


// for (let i = 1; i <= 5; i++) {
//     let rows = "";
    
//     // spaces before numbers
//     for (let s = 1; s <= 5 - i; s++) {
//         rows += " ";
//     }
    
//     // numbers
//     for (let j = 1; j <= i; j++) {
//         rows += i + " ";
//     }
    
//     console.log(rows);
// }

// ---

// ## ✅ 4. Mini Project – 💻 Pattern Generator (User Input)

// ```js
// function printPattern(){
// let rows = Number(prompt("Enter rows"));
// let pattern = "";

// for(let i = 1; i <= rows; i++){
//   for(let j = 1; j <= i; j++){
//     pattern += "* ";
//   }
//   pattern += "\n";
// }

// console.log(pattern);
// }
// printPattern();
// printPattern();
// ````

// 📌 Convert this to reusable function



