// console.log("JavaScript Part 2 ");


// ### **3. Practice Questions (40 Total)**

// **Basic Level (10)**

// 1. Given `let nums = [1, 2, 3, 4, 5]`, use `map()` to square each number.
// let nums = [1, 2, 3, 4, 5];
// let squareNum=nums.map((num)=>num**2);
// console.log(squareNum);

// 2. Given `let nums = [2, 4, 6, 8]`, use `map()` to convert each number to a string.
// let nums = [2, 4, 6, 8];

// let strNum=nums.map((num)=>String(num));
// console.log(strNum);

// or 
// let strNum=nums.join(",");
// console.log(strNum ,typeof strNum);

// 3. Given `let words = ["apple", "banana", "grape"]`, use `map()` to get the length of each word.
// let words = ["apple", "banana", "grape"];
// let lengthOfEachWords=words.map((word)=>word.length);
// console.log(lengthOfEachWords);

// 4. Given `let prices = [100, 200, 300]`, use `map()` to apply a 10% discount.
// let prices = [100, 200, 300];
// let discountPrice=prices.map((price)=>price-price*0.1);
// console.log(discountPrice);

// 5. Given `let nums = [5, 10, 15, 20]`, use `filter()` to get numbers greater than 10.
// let nums = [5, 10, 15, 20];
// let numGreater10=nums.filter((num)=>num>10);
// console.log(numGreater10);

// 6. Given `let nums = [1, 2, 3, 4, 5]`, use `filter()` to keep only even numbers.
// let nums = [1, 2, 3, 4, 5,6,7,8];
// let evenNo=nums.filter(function(num){
//     return num%2===0;
// });
// console.log(evenNo);


// 7. Given `let words = ["cat", "lion", "tiger", "dog"]`, use `filter()` to keep words with length > 3.
// let words = ["cat", "lion", "tiger", "dog"];
// let wordLengthGreater3=words.filter((word)=>word.length>3);
// console.log(wordLengthGreater3);

// 8. Given `let nums = [-5, 0, 10, -2]`, use `filter()` to keep positive numbers.
// let nums = [-5, 0, 10, -2];
// let positiveNum=nums.filter((num)=>num>0);
// console.log(positiveNum);

// 9. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to find the sum.
// let nums = [1, 2, 3, 4];
// let sumOfNum=nums.reduce((total,num)=>total+num,0);
// console.log(sumOfNum);

// 10. Given `let nums = [2, 3, 4]`, use `reduce()` to find the product.
// let nums = [2, 3, 4];
// let productOfNum=nums.reduce((acc,num)=>acc*num);
// console.log(productOfNum);


// **Intermediate Level (15)**

// 11\. Given `let nums = [5, 8, 12, 15]`, use `find()` to get the first number greater than 10.
// let nums = [5, 8, 12, 15];
// let findNum=nums.find((num)=>num>10);
// console.log(findNum);

// 12\. Given `let nums = [1, 3, 5, 7]`, use `some()` to check if the array contains an even number.
// let nums = [1, 3, 5, 7];
// let evenNo=nums.some((num)=>num%2===0);
// console.log(evenNo);

// 13\. Given `let nums = [2, 4, 6]`, use `every()` to check if all numbers are even.
// let nums = [2, 4, 6];
// let evenNo=nums.every((num)=>num%2===0);
// console.log(evenNo);

// 14\. Given `let words = ["apple", "banana", "kiwi"]`, use `some()` to check if any word has length greater than 5.
// let words = ["apple", "banana", "kiwi"];
// let lengthGreaterThanFive=words.some((word)=>word.length>5);
// console.log(lengthGreaterThanFive);

// 15\. Given `let nums = [5, 10, 15, 20]`, use `reduce()` to find the average.
// let nums = [5, 10, 15, 20];
// let averageOfNo=nums.reduce((acc,num)=>acc+num,0)/nums.length;
// console.log(averageOfNo);

// or
// let sumOfNo=nums.reduce((total,num)=>(total+num),0);
// let average=sumOfNo/nums.length;
// console.log(average);


// 16\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to find the largest number.
// let nums = [1, 2, 3, 4];
// let largestNum=nums.reduce((max,num)=>num>max?num:max,nums[0]);
// console.log(largestNum);
// or 
// let largestNum=nums.reduce((a,b)=>Math.max(a,b));
// console.log(largestNum);


// 17\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to reverse the array without `reverse()`.
// let nums = [1, 2, 3, 4];
// let reverseNum=nums.reverse();
// OR 
// let reverseNum=nums.reduce((acc,num)=>{
//     acc.unshift(num);
//     return acc;
// },[])
// console.log(reverseNum);

// 18\. Given `let nums = [3, 6, 9]`, first double each element using `map()` and then sum them using `reduce()`.
// let nums = [3, 6, 9];
// let doubleNumAndSum=nums.map((num)=>num*2).reduce((total,numss)=>total+numss,0);
// console.log(doubleNumAndSum);

// 19\. Given `let nums = [4, 9, 16]`, use `map()` to take the square root of each number.
// let nums = [4, 9, 16];
// let squareRootNum=nums.map((num)=>Math.sqrt(num));
// console.log(squareRootNum);

// 20\. Given `let nums = [100, 200, 300]`, use `filter()` and `map()` together to find prices > 150 and apply 20% discount.
// let nums = [100, 200, 300];
// let finalResult=nums.filter((num)=>num>150).map((nums)=>nums*0.8);
// console.log(finalResult);

// 21\. Given `let students = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 40}]`, 
// use `filter()` to find students with marks > 50.

// let students = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 40}];
// let studentMarksGreaterThanFifty=students.filter(student=>student.marks>50);
// console.log(studentMarksGreaterThanFifty);


// 22\. Given same `students` array, use `map()` to extract only names.
// let students = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 40}];

// let studentNames=students.map(student=>student.name);
// console.log(studentNames);

// 23\. Given same `students` array, use `reduce()` to find the total marks.
// let students = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 40}];
// let totalMarks=students.reduce((total,std)=>total+std.marks,0)
// // OR 
// // let totalMarks=students.map((std)=>std.marks).reduce((total,marks)=>total+marks,0)
// console.log(totalMarks);


// 24\. Given `let nums = [2, 2, 4, 4]`, use `reduce()` to count how many times each number occurs.
// let nums = [2, 2, 4, 4];
// let countNo=nums.reduce((acc,num)=>{
//   acc[num]=(acc[num]||0)+1;
//   return acc;
// },{});
// console.log(countNo);

// 25\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to create a string `"1-2-3-4"`.

// let nums = [1, 2, 3, 4];
// let strNums=nums.join("-");
// or
// let strNum=nums.reduce((acc,num)=>{
//     return acc +"-"+ num;
// })
// console.log(strNum, typeof strNum);

// **Advanced Level (15)**
// 26\. Given `let orders = [{price: 100}, {price: 200}, {price: 300}]`, use `reduce()` to get the total price.

// let orders = [{price: 100}, {price: 200}, {price: 300}];
// let totalPrice=orders.reduce((total,order)=>total+order.price,0);
// console.log(totalPrice);

// 27\. Given `let nums = [5, 8, 1, 3]`, use `reduce()` to find both min and max in one pass.

// let nums = [5, 8, 1, 3];
// let minMax = nums.reduce((acc, num) => {
//     if (num < acc.min) acc.min = num;
//     if (num > acc.max) acc.max = num;
//     return acc;
// }, { min: Infinity, max: -Infinity })
// console.log(minMax);

// 28\. Given `let nums = [1, 2, 3, 4]`, use `reduce()` to group even and odd numbers separately.

// let nums = [1, 2, 3, 4];
// let evenOddNum = nums.reduce((acc, num) => {
//     if (num % 2 === 0) {
//         acc.even.push(num);
//     } else {
//         acc.odd.push(num)
//     }
//     return acc;

// }, { even: [], odd: [] })
// console.log(evenOddNum);

// 29\. Given `let users = [{name: "A", age: 20}, {name: "B", age: 17}]`, use `some()` to check if any user is under 18.
// let users = [{name: "A", age: 20}, {name: "B", age: 17}];
// let userUnder18=users.some((user)=>user.age<18);
// console.log(userUnder18);

// 30\. Given `let users = [{name: "A", age: 20}, {name: "B", age: 17}]`, use `every()` to check if all are above 18.
// let users = [{name: "A", age: 20}, {name: "B", age: 17}];
// let userAbove18=users.every((user)=>user.age>18);
// console.log(userAbove18);

// 31\. Given `let nums = [10, 20, 30]`, use `reduce()` to create an object `{sum: totalSum, average: avg}`.

// let nums = [10, 20, 30, 40, 50];
// let obj = nums.reduce((acc, num, index, array) => {
//     acc.sum += num;
//     if (index === array.length - 1) {
//         acc.average = acc.sum / array.length;
//     }
//     return acc;

// }, { sum: 0, average: 0 })

// console.log(`The result of Object is : ${JSON.stringify(obj)}`);

// 32\. Given `let nums = [2, 3, 4]`, write a custom `map()` function without using built-in map.

// let doubleNum=nums.map((num)=>num*2);

// let nums = [2, 3, 4];

// function customMap(array, callback) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(array[i], i, array));
//     }
//     return result;
// }

// // Example: multiply each element by 2
// let doubled = customMap(nums, function(value, index, arr) {
//     return value * 2;
// });

// console.log(doubled); 
// Output: [4, 6, 8]

// 33\. Given `let nums = [1, 2, 3, 4]`, write a custom `filter()` function without using built-in filter.

// let nums = [1, 2, 3, 4];

// function customFilter(array, callback) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// // Example: get only even numbers
// let evens = customFilter(nums, function(value, index, arr) {
//     return value % 2 === 0;
// });

// console.log(evens);
// Output: [2, 4]

// 34\. Given `let nums = [5, 10, 15, 20]`, use `reduce()` to find the difference between numbers.
// let nums = [5, 10, 15, 20];
// let diffNum=nums.reduce((acc,num,index,array)=>{
//    if(index<array.length-1){
//    acc.push(array[index+1]-num)
//    }
//    return acc;
// },[])
// console.log(diffNum);

// 35\. Given `let nums = [1, 1, 2, 3, 3]`, use `reduce()` to remove duplicates.

// let nums = [1, 1, 2, 3, 3];
// let removeDuplicate = nums.reduce((acc, num) => {
//     if (acc.indexOf(num) === -1) {
//         acc.push(num)
//     }
//     return acc;
// }, [])
// console.log(removeDuplicate);

// 36\. Given `let nums = [1, 2, 3]`, multiply each number by its index using `map()`.
//   let nums = [1, 2, 3];
//   let multiplyNum=nums.map((num,index)=>{
//     return num*index
//   })
//   console.log(multiplyNum);

// 37\. Given `let words = ["a", "bb", "ccc"]`, use `reduce()` to count total characters.
// let words = ["a", "bb", "ccc"];
// let totalChar=words.reduce((acc,char)=>{
//     acc+=char.length;
//     return acc;
// },0)
// console.log(totalChar);


// 38\. Given `let nums = [5, 10, 15]`, use `reduce()` to find factorial of sum of numbers.
// let nums = [5, 10, 15];
// let factorialOfSumOfNum = nums.reduce((total, num) => total + num, 0)
// let fact = 1;
// for (let i = 1; i <= factorialOfSumOfNum; i++) {
//     fact *= i;
// }

// console.log(factorialOfSumOfNum);
// console.log(fact);


// 39\. Given `let nums = [10, 20, 30, 40]`, filter numbers divisible by 20 and then find their sum.
// let nums = [10, 20, 30, 40];
// let result=nums.filter((num)=>num%20===0).reduce((total,num)=>total+num,0);
// console.log(result);

// 40\. Given `let nums = [1, 2, 3, 4, 5]`, use `map()`, `filter()`, and `reduce()` together to double even numbers and sum them.
//  let nums = [1, 2, 3, 4, 5];
//  let result=nums.map(num=>num*2).filter(num=>num>5).reduce((total,num)=>total+num,0);
//  console.log(result);
 

// ### **4. Mini Project**

// **Title:** Student Grade Processor
// **Description:**

// * Take an array of students with `{name, marks}`.
// let std=[{name:"raj",marks:70},{name:"mohan",marks:43},{name:"sohan",marks:76},{name:"ganesh",marks:55},{name:"raja",marks:17},{name:"zarin",marks:62},];
// let res=std.filter((student)=>student.marks>50).reduce((total,stdnt)=>total+stdnt.marks,0);
// console.log(res);

// * Filter students with marks >= 50.
// * Map them to a new array with `{name, grade}` where grade is `"Pass"` or `"Fail"`.
// * Use `reduce()` to calculate total passing students.
// * Display result in HTML table.