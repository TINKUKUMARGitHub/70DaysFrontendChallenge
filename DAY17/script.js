console.log("Array:Collection of items");


// ## ✅ 5. 🛠️ PRACTICE: 30 QUESTIONS (Basic to Medium)

// ### 🔸 Level 1 – Easy

// 1. Create an array with 5 colors and print it.
// let colors=["red","orange","black","blue","green"];
// for(let i=0;i<colors.length;i++){
//     console.log(colors[i]);

// }
// console.log(colors);

// 2. Print the 3rd item from the array `[10, 20, 30, 40, 50]`.
// let num=[10,20,30,40,50];
// console.log(num[2]);

// 3. Replace 2nd element of array `["apple", "banana", "mango"]` with `"grapes"`.

// let fruits=["apple","banana","mango"];
// fruits[1]="grapes";
// console.log(fruits);

// 4. Find the length of array `["sun", "moon", "stars"]`.
// let arr=["sun", "moon", "stars"];
// console.log(arr.length);

// 5. Loop through array `[1, 2, 3, 4, 5]` and print each element.

//  let num=[1, 2, 3, 4, 5];
//  for(let i=0;i<num.length;i++){
//     console.log(num[i]);

//  }

// 6. Create an empty array and add elements using index.

// let emptyArr=[];
// emptyArr[0]="Apple";
// emptyArr[1]="true";
// emptyArr[2]={name:"array",role:"dev"};
// emptyArr[3]=[1,2,3];
// emptyArr[4]=10;
// console.log(emptyArr);

// 7. Access last element of array using `length - 1`.

// let fruits=["apple","banana","mango"];
// let lastFruit=fruits[fruits.length-1];
// console.log(lastFruit);



// 8. Create an array with mixed data types and print all.

// let mixedArr=["Hii",{role:"developer"},[1,2],10,true,753n];

// for(let i=0;i<mixedArr.length;i++){
//     console.log(mixedArr[i]);

// }
// 9. Use `typeof` on an array and explain output.
// let arr=[1,2,3];
// console.log(arr, typeof arr); //object

// 10. Check value at index 10 of 3-element array.
// let arr=[1,2,3];
// console.log(arr[9]);

// ### 🔸 Level 2 – Moderate Logic

// 11. Print all elements of array in reverse order.

// let arr=["Hello",25,true,"ram",false];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);

// }

// 12. Find sum of array `[10, 20, 30, 40, 50]`.

// let arr=[10, 20, 30, 40, 50];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }

// console.log(sum);

// 13. Find average of numbers in array `[3, 6, 9, 12, 15]`.

// let arr=[3, 6, 9, 12, 15];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//   sum+=arr[i];
// }
//  let average=(sum/arr.length)
// console.log(average);


// 14. Print only even numbers from `[2, 5, 7, 8, 10]`.
// let arr=[2, 5, 7, 8, 10];

// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2===0){
//     console.log(arr[i]);
//   }
// }

// 15. Replace all elements > 50 with the name `"big"` in array.

// let arr=[10,65,34,54,0,76,90,65];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>50){
//     arr[i]="big"
//   }
// }
// console.log(arr);



// 16. Count how many elements are greater than 25.

// let arr=[12,37,87,63,23,13,67,89];
// let count=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>25){
//     count++;
//   }
// }
// console.log(count);

// 17. Create a new array with square of each element.
// let arr=[1,2,3,4,5];
// let newArr=[];
// for(let i=0;i<arr.length;i++){
//   newArr.push(arr[i]**2)
// }
// console.log(newArr);

// 18. Filter array `[10, 0, -5, 12]` and keep only positive numbers.
// let arr=[10, 0, -5, 12];
// let filteredArr=[];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>=0){
//    filteredArr.push(arr[i]);
//   }
// }
// console.log(filteredArr);

// 19. Print alternate elements of an array.
// let arr=[1,2,3,4,5,6,7,8,9];
// for(let i=0;i<arr.length;i+=2){
//   console.log(arr[i]);

// }

// 20. Check if a number `25` exists in array `[10, 20, 25, 30]`.

// let arr = [10, 20, 125, 30, 25, 67];
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 25) {
//     found = true;
//     break;

//   }
// }
// if (found) {
//   console.log("Number Exist");

// } else {
//   console.log("Number Don't Exist");

// }

// ---

// ### 🔸 Level 3 – Logic with Loop

// 21. Find max value in array `[1, 5, 88, 45, 12]`.
// let arr=[1, 5, 88, 45, 112];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max){
//     max=arr[i];
//   }
// }
// console.log("Max Value of an array is : ", max);

// 22. Find min value in array `[1, 5, 88, 45, 12]`.

// let arr=[1, 5, 88, -45, 112];
// let min=arr[0];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<min){
//     min=arr[i]
//   }
// }
// console.log("Minimum value of an array is : ", min);

// 23. Count number of vowels in an array of characters.

// let arr=["z","s","p","e","d","a","o","g","i"];
// let vowels=["a","e","i","o","u"];
// let count=0;
// for(let i=0;i<arr.length;i++){
//   if(vowels.includes(arr[i])){
//     count++;
//   }
// }
// console.log("Total Vowel Count in Array is : ",count);

// 24. Reverse the array manually (without reverse method).

// let arr = [1, 2, 3, 4, 5];
// let reverseArray = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reverseArray.push(arr[i])
// }
// console.log(reverseArray);

// 25. Create a new array where each value is doubled.

// let arr = [1, 2, 3, 4, 5];
// let doubledOfArr = [];
// for (let i = 0; i < arr.length; i++) {
//   doubledOfArr.push(arr[i] * 2)
// }
// console.log(doubledOfArr);

// 26. Replace all odd values with `0`.

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     arr[i] = 0;
//   }
// }
// console.log(arr);

// 27. Add 5 to each element and print new array.
// let arr = [1, 2, 3, 4, 5];
// let newArr=[];

// for(let i=0;i<arr.length;i++){
//  newArr.push(arr[i]+5)
// }
// console.log(newArr);

// 28. Create array of squares from 1 to 10.
// let arr=[];
// for(let i=1;i<=10;i++){
//  arr.push(i**2)
// }
// console.log(arr);

// 29. Sum of only odd values in array.
//  let arr = [1, 2, 3, 4, 5,7];
//  let sum=0;
//  for(let i=0;i<arr.length;i++){
//   if(arr[i]%2!==0){
//     sum+=arr[i];
//   }
//  }
//  console.log("Sum of only odd value is : ",sum);

// 30. Loop through nested array and print inner elements.

// let arr=[1,2,3,[4,5,6],7,8,9];

// for(let i=0;i<arr.length;i++){
//   for(j=0;j<arr[i].length;j++){
//     console.log(arr[i][j]);

//   }
// }

// let nestedArr = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
// ];

// for (let i = 0; i < nestedArr.length; i++) { // Outer loop for each inner array
//     for (let j = 0; j < nestedArr[i].length; j++) { // Inner loop for each element
//         console.log(nestedArr[i][j]);
//     }
// }


// ## ✅ 1. 🎯 MINI TASK – Real Use Case

// ### 🎯 Problem:

// > You are building a student score tracker. Create an array `marks = [88, 75, 92, 60, 79]`

// * Print total marks
// * Print average marks
// * Print all scores above 80
// let marks=[88, 75, 92, 60, 79];

// let totalMarks=0;
// let marksGreater80=[];
// for(let i=0;i<marks.length;i++){
//  totalMarks+=marks[i];
//  if(marks[i]>80){
//   marksGreater80.push(marks[i])
//  }
// }
// console.log(marksGreater80);

// console.log(totalMarks);//394
// let averageMarks=(totalMarks)/marks.length;
// console.log(averageMarks);//78.8

// 2. Remove all duplicates from an array

// let arr = [1,2,1,2, 3, 2, 4, 6,5,5,3, 5];
// let newArr=[...new Set(arr)];
// console.log(newArr);


// let newArr=[];
// for(let i=0;i<arr.length;i++){
//   if(!newArr.includes(arr[i])){
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr);

// 3. Merge two arrays without duplicates

// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// // let newArray=[];
// // newArray=arr1.concat(arr2);
// // console.log(newArray);

// let newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//   if (!newArr.includes(arr1[i])) {
//     newArr.push(arr1[i]);
//   }

// }
// for (let i = 0; i < arr2.length; i++) {
//   if (!newArr.includes(arr2[i])) {
//     newArr.push(arr2[i]);
//   }
// }
// console.log(newArr);


