
// ## 2️⃣ 50+ Practice Questions (2 hrs)

// ### 🟢 Basic (15 Qs)

// 1. Check if a number is even or odd.

//   let num=232;
//   if(num<1){
//     console.log("number is either zero or negative number");
// }else if(num%2===0){
//     console.log("Number is Even Number");

// }else{
//     console.log("Number is Odd Number");

// }

// 2. Find greater between two numbers.

//   let num1=110;
//   let num2=121;
//   if(num1>num2){
//     console.log("num1 is greater than num2");

//   }else{
//     console.log("num2 is greater than num1");

//   }

// 3. Check if a number is positive, negative, or zero.

// let num=-10;
// if(num===0){
//     console.log("Number is ZERO");

// }else if(num<0){
//     console.log("Number is Negative");

// }else{
//     console.log("Number is Positive");

// }

// 4. Print grade based on marks (A/B/C/D/F).
// marks should be <=100

// let marks=69;
// if(marks<=30){
//     console.log("Grade is Fail(F)");

// }else if(marks>=30 && marks<=40){
// console.log("Grade is pass with (D)");
// }else if(marks>40 && marks<=50){
// console.log("Grade is pass with (C)");
// }else if(marks>50 && marks<=60){
// console.log("Grade is pass with (B)");
// }else{
//     console.log("Grade is pass with (A)");
// }


// 5. Check eligibility to vote (age >= 18).
// let age = 17;
// if (age < 18) {
//     console.log("You Can't Vote");

// } else {
//     console.log("You Can Vote");

// }

// 6. Check if year is leap year.
// let year=2028;
// if((year%4===0) && ((year%100!==0) || (year%400===0))){
//     console.log("Leap Year");

// }else{
//     console.log("Not a Leap Year");

// }

// 7. Find max among 3 numbers.

// let num1 = -1;
// let num2 = -0;
// let num3 = -3;

// let max=Math.max(num1,num2,num3);
// console.log(max);

// if (num1 > num2 && num1 > num3) {
//     console.log("num1 is greater");

// } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is greater");

// } else if (num3 > num1 && num3 > num2) {
//     console.log("num3 is greater");

// } else {
//     console.log("There is a tie or all are equal");

// }

// 8. Check if character is vowel or consonant.

// let character="b";
// character=character.toLowerCase();

// if("aeiou".includes(character)){
//     console.log("Character is vowel ");

// }else{
//     console.log("Character is consonant");

// }

// 9. Compare two strings.

// let str1="apple";
// let str2="bnan";

// if(str1.length===str2.length){
//     console.log("Both String are equal");

// }else if(str1.length>str2.length){
//     console.log("String 1 is greater ");

// }else{
//     console.log("String2 is greater");

// }

// 10. Print discount based on purchase amount.

// let amount = 1200;
// let discount;
// if (amount <= 500) {
//     discount = 0;
// } else if (amount <= 1000) {
//     discount = (amount - 500) * 0.05;
// } else if (amount <= 3000) {
//     discount = (500 * 0.05) + ((amount - 1000) * 0.2);
// } else if (amount <= 5000) {
//     discount = (500 * 0.05) + (2000 * 0.2) + ((amount - 3000) * 0.3);
// } else {
//     discount = (500 * 0.05) + (2000 * 0.2) + (2000 * 0.3) + ((amount - 5000) * 0.5);
// }

// let paidAmount = amount - discount;
// console.log(`Total Purchase Amount is ${amount}: and Discount Amount is: ${discount} , Finally Paid Amount is : ${paidAmount}`);

// 11. Check if number is divisible by 3 & 5.

// let num = 12;
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("It's divisible by both 3 and 5");

// } else {
//    console.log( "It's not divisible by both 3 and 5");

// }

// 12. Assign traffic light color meaning.

// let color="GREEN";
// color=color.toLowerCase();

// if(color==="red"){
//     console.log("Stop");

// }else if(color==="yellow"){
//     console.log("Ready for GO");

// }else if(color==="green"){
//     console.log("GO...");

// }else{
//     console.log("Invalid Color");

// }

// 13. Check login (username/password match).

// let username = "raj";
// let password = 12345;

// let userInputName = "raj";
// let userInputPassword = 12345;
// if (username === userInputName && password === userInputPassword) {
//     alert("✅ LogIn Successfully");

// } else {
//     alert("❌ Incorrect username and password");

// }

// 14. Print day of week from number.

// let num = 5;
// if (num === 1) {
//     console.log("Monday");
// } else if (num === 2) {
//     console.log("Tuesday");
// } else if (num === 3) {
//     console.log("Wednesday");
// } else if (num === 4) {
//     console.log("Thursday");
// } else if (num === 5) {
//     console.log("Friday");
// } else if (num === 6) {
//     console.log("Saturday");
// } else if (num === 7) {
//     console.log("Sunday");
// } else {
//     console.log("Inavlid Number");

// }

// 15. Ternary: Check if temperature > 30 ("Hot") else ("Cool").

// let temp=10;
// let outsideTemp=(temp>30)?"Hot":"Cool";
// console.log(outsideTemp);

// ### 🟡 Intermediate (20 Qs)

// 16. Find ticket price based on age.

// let age=56;
// let basePrice=500;
// let ticketPrice;
// if(age<=5){
//  ticketPrice=0;
// }else if(age>5 && age<=55){
//     ticketPrice=basePrice;
// }else{
//     ticketPrice=basePrice*0.5;
// }
// console.log(`Ticket Price is : ${ticketPrice}`);

// 17. Calculator using switch (add/sub/mul/div).

// let calculate = "div";
// function calculates(a,b) {

//     switch (calculate) {
//         case "add":
//             console.log("Addition: ", a+b);
//             break;
//         case "sub" :
//             console.log("Subtraction: ", a-b);
//             break;
//         case "mul":
//             console.log("Multiplication: ", a*b);
//             break;
//         case "div" :
//             console.log("Division: ", (a/b).toFixed(2));
//             break;
//         default:
//             console.log("Invalid Input");
//     }
// }
// calculates(5,6);


// 18. Print number of days in a month.
// "jan,feb,mar,apr,may,june,july,aug,sep,oct,nov,dec";

// let month = "sep";
// switch (month) {
//     case "jan":
//         console.log("31 Days");
//         break;
//     case "feb":
//         console.log("28/29 Days");
//         break;
//     case "mar":
//         console.log("31 Days");
//         break;
//     case "apr":
//         console.log("30 Days");
//         break;
//     case "may":
//         console.log("31 Days");
//         break;
//     case "june":
//         console.log("30 Days");
//         break;
//     case "july":
//         console.log("31 Days");
//         break;
//     case "aug":
//         console.log("31 Days");
//         break;
//     case "sep":
//         console.log("30 Days");
//         break;
//     case "oct":
//         console.log("31 Days");
//         break;
//     case "nov":
//         console.log("30 Days");
//         break;
//     case "dec":
//         console.log("31 Days");
//         break;
//     default:
//         console.log("Invalid month");

// }

// 19. Convert number to word (1 = One).

// let number=5;
// let word;
// switch(number){
//     case 1:
//         word="One";
//         break;
//     case 2:
//         word="Two";
//         break;    
//     case 3:
//         word="Three";
//         break;
//     case 4:
//         word="Four";
//         break;    
//     case 5:
//         word="Five";
//         break;
//     case 6:
//         word="Six";
//         break;    
//     case 7:
//         word="Seven";
//         break;
//     case 8:
//         word="Eight";
//         break;    
//     case 9:
//         word="Nine";
//         break;
//     case 10:
//         word="Ten";
//         break; 
//      default:
//         console.log("Invalid Number");

// }
// console.log(`Your Number is : ${number} and word is : ${word}`);

// 20. Find min among 3 numbers using if-else.
// let num1=-2;
// let num2=2;
// let num3=9;

// let minimum=Math.min(num1,num2,num3);
// console.log(minimum);

// if(num1<num2 && num1<num3){
//     console.log(`minimum is:${num1} `);

// }else if(num2<num1 && num2<num3){
//     console.log(`minimum is : ${num2}`);

// }else if(num3<num1 && num3<num2){
//     console.log(`minimum is : ${num3}`);

// }else{
//     console.log("Either number is tie or Equal");

// }

// 21. Check if angle is acute, obtuse or right.

// let angle = 91;
// if (angle < 90) {
//     console.log("Acute Angle");

// } else if (angle === 90) {
//     console.log("Right Angle");

// } else if (angle > 90 && angle <= 180) {
//     console.log("Obtuse Angle");

// } else {
//     console.log("Invalid Angle");

// }

// 22. Print movie rating based on score.
//  let score=6;
//  let rating;
//  if(score>5){
//     alert("Score Should be Less then Equal to Five");
//  }
//  switch(score){
//     case 1:
//      rating='🔸'
//      break;
//     case 2:
//      rating='🔸 🔸'
//      break;
//     case 3:
//      rating='🔸 🔸🔸'
//      break;
//     case 4:
//      rating='🔸🔸🔸🔸'
//      break;
//     case 5:
//      rating='🔸🔸🔸🔸🔸'
//      break;
//      default:
//         console.log("Movie Flop");

//  }
//  console.log(`Movie Rating is : ${rating}`);

// 23. Ternary: Print pass/fail based on marks.
// let marks=29;
// let result=(marks<30)?"fail":"Pass";
// console.log(`Result is : ${result}`);

// 24. Check if number is 3-digit or not.
// let number=1;
// let strnum=String(number);
// let result=Number(strnum.length>=3)?"Number is 3-Digit or More":"Number is Less then 3-digit";
// console.log(result , typeof result);

// 25. Convert temperature: Celsius to Fahrenheit.

// let temp=10;
// let fahrenheit= (temp*(9/5).toFixed(2))+32;
// console.log(fahrenheit);


// 26. Check valid triangle (sum of angles = 180).

// let angle1=80;
// let angle2=20;
// let angle3=30;
// let sumOfAngle=angle1+angle2+angle3;

// if(sumOfAngle<90){
//     console.log("Acute Angle Tringle");
// }else if(sumOfAngle===90){
//     console.log("Right Angle Triange");

// }else if(sumOfAngle>90 && sumOfAngle<=180){
//     console.log("Obtuse Angle Triangle");

// }else{
//     console.log("Invalid Angle");

// }

// 27. Check if character is uppercase/lowercase.

// let character="S";
// if(character>="A" && character<="Z"){
//     console.log(`Character is in UpperCase: ${character}`);

// }else if(character>="a" && character<="z"){
//     console.log(`Character is in LowerCase: ${character}`);

// }else{
//  console.log("Invalid Character");

// }

// 28. Salary slab: calculate tax.

// let salary = 900000;
// let tax;

// if (salary <= 300000) {
//     tax = 0;
// } else if (salary <= 600000) {
//     tax = (salary - 300000) * 0.05;
// } else if (salary <= 900000) {
//     tax = (300000 * 0.05) + (salary-600000) * 0.10;
// } else if (salary <= 1500000) {
//     tax = (300000 * 0.05) + (300000 * 0.10) + ( salary-900000) * 0.15;
// } else {
//     tax = (300000 * 0.05) + (300000 * 0.10) + (600000 * 0.15) + (salary - 1500000) * 0.30;
// }
// let totalPayableAmount = salary - tax;
// console.log(`Your Income is : ${salary}`);

// console.log(`Total tax is : ${tax}`);
// console.log(`Your TotalPayableAmount is : ${totalPayableAmount}`);



// 29. Currency converter: USD to INR.
// let usd=15;
// let inr=(usd*87.48).toFixed(2);
// console.log(`${usd} USD  is equal to  = ${inr} ₹.`);

// 30. Check if string is empty.
// let str="";
// if(str.length===0){
//     console.log("String is empty");

// }else{
//     console.log("String has some content");

// }

// 31. Switch: Print season based on month.

// let spring = ["march", "april", "may"];
// let summer = ["june", "july", "august"];
// let autumn = ["september", "october", "november"];
// let winter = ["december", "january", "february"];

// let month = "february".toLowerCase();

// switch (true) {
//     case spring.includes(month):
//         console.log(`Month is ${month} : i.e Spring Season .`);
//         break;
//     case summer.includes(month):
//         console.log(`Month is ${month} : i.e Summer Season .`);
//         break;
//     case autumn.includes(month):
//         console.log(`Month is ${month} : i.e Autumn Season .`);
//         break;
//     case winter.includes(month):
//         console.log(`Month is ${month} : i.e Winter Season .`);
//         break;
//     default:
//         console.log("Invalid Month ");

// }

// 32. Calculate BMI and print category.

// let weightInKg = 70;
// let heightInMeter = 1.6;

// let bmi = (weightInKg / heightInMeter ** 2).toFixed(2)

// if (bmi < 18.5) {
//     console.log("You are UnderWeight", bmi);

// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("You are in Normal Weight", bmi);

// } else if (bmi > 24.9 && bmi <= 29.9) {
//     console.log("You are in Overweight", bmi);

// } else {
//     console.log("You are in Obese", bmi);
// }

// 33. Check palindrome number.

// let num = 212;

// if (num < 10) {
//   alert("Enter minimum 2-digit number");
// } else {
//   let originalNumStr = String(num);
//   let reverseNumStr = originalNumStr.split('').reverse().join('');

//   if (originalNumStr === reverseNumStr) {
//     console.log("✅ Number is Palindrome");
//   } else {
//     console.log("❌ Number is NOT Palindrome");
//   }
// }


// 34. Print charges based on time (AM/PM).

// let bill = 100;
// let charges;

// let currentHour = new Date().getHours();  
// let timePeriod = (currentHour > 1 && currentHour <= 12) ? "AM" : "PM";

// if (timePeriod === "AM") {
//   charges = bill * 0.2;  // 20% charges in AM
// } else {
//   charges = bill * 0.5;  // 50% charges in PM
// }

// console.log(`Time is ${timePeriod} and Charges is ${charges}, so your total bill is: ₹${bill + charges}`);

// 35. Nested if: Student grade + remark.
// let marks = 82;
// let grade;
// let remark;

// if (marks >= 0 && marks <= 100) {
//     if (marks >= 90) {
//         grade = 'A+';
//         remark = 'Excellent 👏';
//     } else if (marks >= 80) {
//         grade = 'A';
//         remark = 'Very Good 👍';
//     } else if (marks >= 70) {
//         grade = 'B';
//         remark = 'Good 😊';
//     } else if (marks >= 60) {
//         grade = 'C';
//         remark = 'Satisfactory 🙂';
//     } else if (marks >= 50) {
//         grade = 'D';
//         remark = 'Needs Improvement 😐';
//     } else {
//         grade = 'F';
//         remark = 'Fail 😞';
//     }

//     console.log(`Marks: ${marks}`);
//     console.log(`Grade: ${grade}`);
//     console.log(`Remark: ${remark}`);
// } else {
//     console.log("Invalid Marks! Please enter a number between 0 and 100.");
// }

// ### 🔴 Tricky Logic (15 Qs)

// 36. let x = 5; x = x + "5"; What’s x?
//"55"

// 37.
//  let y = "10" - 2;
// console.log(  typeof y); //number


// 38. Is null == undefined? Why?
// The double equals(==) operator in JavaScript does type coercion — it tries to convert both values to a common type before comparing.
// According to the ECMAScript specification, null and undefined are considered loosely equal:
// undefined == null → true

// 39. console.log(typeof null) // output? //object

// 40. Compare "0" == 0 // true  and "0" === 0 //false.

// 41. 0 == false?// true &&  0 === false? //false

// 42. NaN == NaN? Why?
// false:   NaN is never equal to anything — not even itself!

// 43. !!null, !!undefined, !!0 — outputs?
    //    console.log(!!null);//false
    //    console.log( !!undefined);//false
    // console.log(!!0);//false
    
       
// 44. 
//  let a = 1, b = 2; 
// console.log(a++ + ++b)//4

// 45. Truthy/Falsy list from given array.

// let values = [0, 1, "", "hello", null, undefined, NaN, " ", [], {}, false, true, -1, 42];

// let truthyValues = [];
// let falsyValues = [];

// for (let val of values) {
//     if (val) {
//         truthyValues.push(val);
//     } else {
//         falsyValues.push(val);
//     }
// }

// console.log("Truthy Values:", truthyValues);
// console.log("Falsy Values:", falsyValues);

   
// 46. Switch fall-through example.

// let num=4;
// switch(num){
//     case 1:console.log("ONE");
//     break;
//     case 2:console.log("TWO");
//     break;
//     case 3:console.log("THREE");
//     break;
//     case 4:console.log("FOUR");
//     break;
//     case 5:console.log("FIVE");
//     break;
//     default:
//     console.log("Invalid Number");
    
// }

// 47. typeof typeof 5?
    // console.log(typeof typeof 5);//string
    
// 48. 
//   let x = true + false + true;
//   console.log(x);//2
  

// 49. Short-circuit with && || examples.
// when js stops evaluating an expression as soon as the final result is determined

// console.log(true && "Hi");         // "Hi"
// console.log(1 && 0);               // 0
// console.log("JS" && 42);           // 42
// console.log(null && "React");      // null

// console.log(false || "Hello");      // "Hello"
// console.log("" || 42);              // 42
// console.log(0 || null || "JS");     // "JS"
// console.log(null || undefined);     // undefined

// 50. Nested ternary condition example.

// let marks=80;
// let result=(marks<30)?"FAil":(marks>=30 && marks<=60)?"Pass":"Topper";
// console.log(result);



