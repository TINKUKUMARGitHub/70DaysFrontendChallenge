console.log("Js Mastery Day13");

// #  50 Practice Questions (Basic → Tricky)

// ### 🟢 Basic (20 Q)
// 1. Declare a variable "age" and check if it's above 18.

// let age = 10;
// if (age >= 18) {
//   console.log("it can vote");
// } else {
//   console.log("it can't vote");
// }

// 2. Check if a number is even or odd.

//  let num=101;
//  if(num===0){
//     console.log("it's a zero");
// }else if(num<0){
//     console.log("it's a negative number");

// }else if(num%2===0){
//     console.log("it's a even number");

// }else{
//     console.log("it's a odd number");

// }

// 3. Compare two numbers, print the larger.

// let num1 = 110;
// let num2 = 121;
// if (num1 > num2) {
//   console.log("num1 is greater");
// } else {
//   console.log("num2 is greater");
// }

// 4. Check if a number is positive, negative, or zero.

// let num=-10;
// if(num<0){
//     console.log("it's a negative number");

// }else if(num===0){
//     console.log("it's a zero");

// }else{
//     console.log("it's a positive");

// }

// 5. Assign a grade (A/B/C) based on marks using if/else.

//   let marks=71;
//   if(marks>0 && marks<=30){
//     console.log("Grade C");

//   }else if(marks>=30 && marks<=70){
//     console.log("Grade B");

//   }else if(marks>70 && marks<=100){
//     console.log("Grade A");

//   }else{
//      console.log("Fail");
//   }

// 6. Check if a year is a leap year.

// let years = 2027;
// if ((years % 4 === 0) && ((years % 100 !== 0) || (years % 400 === 0))) {
//   console.log(`${years} is a leap year`);
// } else {
//   console.log(`${years} is not a leap yaer`);
// }

// 7. Check if a string is empty or not.

// let str = "";
// if (str.length === 0) {
//   console.log("String is empty");
// } else {
//   console.log("String is not empty");
// }

// 8. Print "Good Morning" if hour < 12, else "Good Evening".

//  let currentTime=new Date().getgetHours();
//  if(currentTime<12){
//   console.log("Good Morning");
//  }else{
//   console.log("Good Evening");
//  }

// 9. Check if a number is divisible by 3 and 5.

// let numbers=18;
// if((numbers%3===0) &&(numbers%5===0)){
//   console.log("✅ This numbers  is divisible by 3 and 5 both ");

// }else{
//     console.log("❌  This numbers is not divisible by 3 and 5 both ");
// }

// 10. Use ternary to assign "adult" or "minor".

// let age=13;
// // (age>0 && age<18)?console.log("Minor"):console.log("Adult");

// let status=(age>=18) ? "Adult":"Minor";
// console.log(status);

// 11. Check if a number is in range 10–20.

// let num = 22;
// if (num >= 10 && num <= 20) {
//   console.log(`${num} is in range`);
// } else {
//   console.log(`${num} is not  in range`);
// }

// 12. Convert Celsius to Fahrenheit.

// let Celsius=5;
// let Fahrenheit=(Celsius*9/5)+32;
// console.log(`${Celsius}°C=${Fahrenheit}°F`);

// 13. Print the sign of a number.

// let number=0;
// if(number<0){
//   console.log("negative");
// }else if(number>0){
//   console.log("positive");
// }else{
//   console.log("zero");
// }

// 14. Check if number is multiple of 4.

// let num=217;
// if(num%4===0){
//   console.log(`✅ ${num} is multiple of 4`);
// }else{
//   console.log(`❌ ${num} is not multiple of 4`);
// }

// 15. Find max of three numbers using if/else.

// let num1 = 1;
// let num2 = 1;
// let num3 = 1;

// if (num1 >= num2 && num1 >= num3) {
//   console.log(`${num1} is max of all three numbers`);
// } else if (num2 >= num3 && num2 >= num1) {
//   console.log(`${num2} is max of all three numbers`);
// }  else {
//   console.log(`${num3} is max of all three numbers`);
// }

// 16. Check if a character is vowel or consonant.

// let letter = "c";
// letter=letter.toLowerCase();
// if (
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u"
// ) {
//   console.log(`${letter} is a vowel`);
// } else {
//   console.log(`${letter} is consonant`);
// }

// 17. Compare two strings for equality.

// let str1="Apple";
// let str2="applE";
// if(str1.toLowerCase()===str2.toLowerCase()){
//   console.log("Both Strings are equal");

// }else{
//   console.log("Strings are not equal");

// }

// 18. Check if password length > 8.

// let password="1234ajdks";
// if(password.length>8){
//   console.log("Password length is greater than 8");

// }else{
//   console.log("Password length is less than 8");
// }

// 19. Print day type: weekday or weekend.

// let day = "Sunday";
// day = day.toLowerCase();

// if (day === "sunday" || day === "saturday") {
//   console.log(`${day} is weekend`);
// } else {
//   console.log(`${day} is weekday`);
// }

// 20. Assign bonus: if salary > 50000, bonus 10%, else 5%.

// let salary = 50000;
// if (salary <= 50000) {
//   salary = salary + (salary * 5) / 100;
//   console.log(`your total salary is ${salary}`);
// } else {
//   salary = salary + (salary * 10) / 100;
//   console.log(`your total salary is ${salary}`);
// }

// let salary=51000;
// let bonus;

// if(salary>50000){
//   bonus=salary*0.10;
// }else{
//   bonus=salary*0.05;
// }
// let totalSalary=salary+bonus;
// console.log(totalSalary);

// ### 🟡 Intermediate (20 Q)

// 21. Switch: Day number (1–7) to day name.

// let day=5;
// switch(day){
//   case 1:
//     console.log("Monday");
//   break;
//   case 2:
//     console.log("Tuesday");
//   break;
//   case 3:
//     console.log("Wednesday");
//   break;
//   case 4:
//     console.log("Thursday");
//   break;
//   case 5:
//     console.log("Friday");
//   break;
//   case 6:
//     console.log("Saturday");
//   break;
//   case 7:
//     console.log("Sunday");
//   break;
//   default:
//     console.log("Invalid Day");

// }

// 22. Switch: Month number to month name.

// let monthNumber=8;
// switch(monthNumber){
//   case 1:
//     console.log("January");
//   break;
//   case 2:
//     console.log("February");
//   break;
//   case 3:
//     console.log("March");
//   break;
//   case 4:
//     console.log("April");
//   break;
//   case 5:
//     console.log("May");
//   break;
//   case 6:
//     console.log("June");
//   break;
//   case 7:
//     console.log("July");
//   break;
//   case 8:
//     console.log("August");
//   break;
//   case 9:
//     console.log("September");
//   break;
//   case 10:
//     console.log("October");
//   break;
//   case 11:
//     console.log("November");
//   break;
//   case 12:
//     console.log("December");
//   break;
//   default:
//     console.log("Invalid Month");

// }

// 23. Check if number is prime.

// let num = 67;
// if (num <= 1) {
//   console.log(`${num} is not a prime number`);
// } else {
//   let isPrime = true;

//   let i = 2;
//   while (i < num) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//     i++;
//   }
//   if (isPrime) {
//     console.log(`${num} is a prime number`);
//   } else {
//     console.log(`${num} is not a prime number`);
//   }
// }

// 24. Use switch to handle user roles: admin, guest, user.

// let userRole = "user";
// userRole = userRole.toLowerCase();

// switch (userRole) {
//   case "admin":
//     console.log("you are Manager ");
//     break;
//   case "guest":
//     console.log("you are Intern");
//     break;
//   case "user":
//     console.log("you are  Developer ");
//     break;
//   default:
//     console.log("Invalid Users");
// }

// 25. Use ternary to compare two numbers.

// let num1=10;
// let num2=110;
// let result=(num1>=num2) ? true:false;
// console.log(result);

// 26.  if: check eligibility (age > 18, hasID).

// let age=18;
// let hasID;
// if(age>18){
//  hasID=true;
// }else{
//   hasID=false;
// }
// console.log(hasID);

// 27. Print even numbers from 1–10 using loop + if.

// let num=1;
// while(num<=10){
//   if(num%2===0){
//     console.log(num);

//   }
//   num++;
// }

// 28. Convert hours to minutes if valid input.

// let hour=new Date().getHours();
// let totalMinutes=hour*60;
// console.log(`${hour} hour= ${totalMinutes} Minutes`);

// 29. Calculate electricity bill based on units.
// 1-50==5,50-70===7,70>==9

// let unit = 80;
// let bill;

// if (unit <= 50) {
//   bill = unit * 5;
// } else if (unit <= 70) {
//   bill = 50 * 5 + (unit - 50) * 7;
// } else {
//   bill = 50 * 5 + (70 - 50) * 7 + (unit - 70) * 9;
// }
// console.log(
//   `your unit is ${unit} and your total electricity bill is ${bill} ₹`
// );

// 30. Validate username: min 5 chars, no spaces.

// let username = "rajes";
// username = username.trim();
// if (username.length > 5) {
//   console.log("valid username");
// } else {
//   console.log("invalid username");
// }

// 31. Check if a character is uppercase or lowercase.

// let char = "z";
// if (char >= "A" && char <= "Z") {
//   console.log(`${char} is in UpperCase`);
// } else if (char >= "a" && char <= "z") {
//   console.log(`${char} is in LowerCase`);
// } else {
//   console.log(`${char} is not a valid character`);
// }

// 32. Calculate BMI and categorize.

// let weightInKg = 58;
// let heightInMeter = 1.6;
// let bmi = (weightInKg / (heightInMeter * heightInMeter)).toFixed(2);

// if (bmi < 18.5) {
//   console.log("Your weight is underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("Your weight is normal");
// } else if (bmi > 24.9 && bmi <= 29.9) {
//   console.log("Your weight is overweight");
// } else {
//   console.log("Your weight is obese");
// }

// 33. Switch: Food menu – user enters number, print item.

// let number = 5;
// switch (number) {
//   case 1:
//     console.log("User choice is Burger");
//     break;
//   case 2:
//     console.log("User choice is Roll");
//     break;
//   case 3:
//     console.log("User choice is Momos");
//     break;
//   case 4:
//     console.log("User choice is Papdi");
//     break;
//   case 5:
//     console.log("User choice is Golgappa");
//     break;
//   default:
//     console.log("Invalid user choice");
// }

// 34. Find whether number is Armstrong.
// if sum of each digit raised to the power of total digits equal to the original number.
// eg: 153=1^3+5^3+3^3=153;

// let num = 153;
// let originalNum = num;
// let strNum = num.toString();
// let digits = strNum.length;
// let sum = 0;

// for (let i = 0; i < digits; i++) {
//   let digit = Number(strNum[i]);
//   sum += digit ** digits;
// }
// if (originalNum === sum) {
//   console.log("its a Armstrong Number");
// } else {
//   console.log("❌ its not a Armstrong Number");
// }

// 35. Calculate tax: income slabs.
// Income Range (₹)	Tax Rate
// 0 – 3,00,000	Nil
// 3,00,001 – 6,00,000	5%
// 6,00,001 – 9,00,000	10%
// 9,00,001 – 12,00,000	15%
// 12,00,001 – 15,00,000	20%
// Above 15,00,000	30%

// let incomeInRupee = 4000000;
// let tax = 0;

// if (incomeInRupee <= 300000) {
//   tax = 0;
// } else if (incomeInRupee <= 600000) {
//   tax = (incomeInRupee - 300000) * 0.05;
// } else if (incomeInRupee <= 900000) {
//   tax = 300000 * 0.05 + (incomeInRupee - 600000) * 0.1;
// } else if (incomeInRupee <= 1200000) {
//   tax = 300000 * 0.05 + 300000 * 0.1 + (incomeInRupee - 90000) * 0.15;
// } else if (incomeInRupee <= 1500000) {
//   tax =
//     300000 * 0.05 +
//     300000 * 0.1 +
//     300000 * 0.15 +
//     (incomeInRupee - 1200000) * 0.2;
// } else {
//   tax =
//     300000 * 0.05 +
//     300000 * 0.1 +
//     300000 * 0.15 +
//     300000 * 0.2 +
//     (incomeInRupee - 1500000) * 0.3;
// }

// let amountAfterTax = incomeInRupee - tax;

// console.log("Income", incomeInRupee);
// console.log("Tax", tax);
// console.log("AmountAfterTax", amountAfterTax);

// 36. Use logical && || with if/else.

// let income=300000;
// let hasCitizenshipCard=false;

// if((income<=300000) ||(income<=500000)&&(hasCitizenshipCard)){
//     console.log("No tax for you.");

// }else{
//     console.log("You need to pay tax.");

// }

// // 37. Guess number game: user input vs random.

// // alert("Guess the number between 1-10")
// let randomNum = Math.floor(Math.random() * 10) + 1;
// let userGuessNum = 5;

// if (userGuessNum === randomNum) {
//   console.log("You win the game, random number is : " + randomNum);
// } else {
//   console.log("Your Guess is Wrong ,Please Try Again");
// }

// 38. Ticket price logic (age based).
// let age = 45;  

// if (age >= 0 && age <= 5) {
//     console.log("Ticket is Free.");
// } else if (age <= 18) {
//     console.log("Ticket Price: ₹100");
// } else if (age <= 60) {
//     console.log("Ticket Price: ₹200");
// } else if (age > 60) {
//     console.log("Ticket Price: ₹150");
// } else {
//     console.log("Invalid age.");
// }

// 39. Compare lengths of two strings.

// let str1 = "apples";
// let str2 = "banana";
// if (str1.length === str2.length) {
//   console.log("Both strings has equal lengths." , str1.length||str2.length);
// } else {
//   console.log("Strings doesnot has equal length.");
// }

// 40. Check if email contains "@" and valid format.

// let email = "rahulgmail.com";
// if (email.includes("@")) {
//   console.log("email contains @ ");
// } else {
//   console.log("email doesnot contains @");
// }

// ### 🔴 Tricky Logic (10 Q)

// 41. let x = 5; x = x + "5"; What is x?

//    let x=5;
//    x=x+"5";
//    console.log(x,typeof x);// "55" string

// 42.
// let y = "10" - 2; //NaN
// console.log((typeof y));//number

// 43. Switch without break – test fall-through.

// let age = 5;
// switch (age) {
//   case 5:
//     console.log("u r 5 years old");
//   //  break;
//   case 7:
//     console.log("u r 7 years old");
//   //  break;

//   case 9:
//     console.log("u r 9 yaers old");
//  //break
//   default:
//     console.log("u r adult");
// }

// 44. Multiple ternary operations.
 
// let result=(5>12) ? true:(12>5)? "Yes":"No";
// console.log(result);


// 45. Check if null == undefined.
// console.log(null==undefined);//true

// 46. typeof NaN?
// console.log(typeof NaN);//number

// 47. Write clean if/else to assign grade (90+, 80+, 70+).
//min passing marks is 60;

// let marks=10;
// if(marks>70 && marks<=80){
//     console.log("Grade B+");
    
// }else if(marks>80 && marks<=90){
//   console.log("Grade A");
  
// }else if(marks>90 && marks<=100){
//     console.log("Grade A++");
    
// }else{
//     console.log("Pass");
    
// }


// 48. Check falsy values: 0, "", null, undefined.

//  let num=0;
//  if(num){
//     console.log("truthy value");
    
//  }else{
//     console.log("falsy value");
    
//  }

// 49. Switch: temperature ranges (cold, warm, hot).
        
// let temp=16;
// switch(true){
//     case (temp>30 && temp<=40):
//         console.log("hot");
//     break;    
//     case (temp>20 && temp<=30):
//         console.log("warm");
//     break;    
//     case (temp>15 && temp<=20):
//         console.log("cold");
//     break;
//     default:
//         console.log("Ice outside");
            
// }

// 50. Check if string includes substring.

// let strings="i am a 'little champ' guys u know?";
// console.log(strings);
// console.log(strings.includes("little champ"));
// console.log(strings.includes("little boy"));



// # 3️⃣ Logic Task (0.5 hr)

// Write with **if/else** + **ternary version**.
// **Problem**: Calculate ticket price:

// * Age < 5: Free
// * Age 5–18: 50%
// * Age > 18: Full price

// let ticketPriceInRupee=1200;
// let ageInYears=20;
// let finalPriceOfTicket;

// if(ageInYears<5){
//    finalPriceOfTicket=0;
// }else if(ageInYears<=18){
//    finalPriceOfTicket=ticketPriceInRupee*0.50;
// }else{
//     finalPriceOfTicket=ticketPriceInRupee;
// }
// console.log("ticketPriceInRupee" , ticketPriceInRupee ,"finalPriceOfTicket",finalPriceOfTicket);
 
// Write with **if/else** + **ternary version nested ternary **.

// let finalPriceOfTicket=(ageInYears<5)?"Free":(ageInYears<=18) ? ticketPriceInRupee*0.50 : ticketPriceInRupee;
// console.log(finalPriceOfTicket);
