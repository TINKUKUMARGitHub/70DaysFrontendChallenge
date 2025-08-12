// ### **Basic (10 Qs)**

// 1. Add 3 numbers at the start of an array using `unshift()`.
// let arr=[1,2,3,4,5];
// let newArr=arr.unshift(-10,0,-5);
// console.log(arr);

// 2. Remove the first 2 elements from an array using `splice()`.

// let arr=[1,2,3,4,5];
// let newArr=arr.splice(0,2);
// console.log(newArr);
// console.log(arr);

// 3. Merge two arrays without changing originals.
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9];

// let mergedArr=arr1.concat(arr2);
// console.log(mergedArr);
// console.log(arr1);


// 4. Reverse an array without using `reverse()` method.
// let arr1=[1,2,3,4,5];

// let reverseArr=arr1.reverse();
// console.log(reverseArr);
// or 
// let reverseArr=[];
// for(let i=arr1.length-1;i>=0;i--){
//     reverseArr.push(arr1[i])
// }
// console.log(reverseArr);

// 5. Find the index of element `50` in `[10,20,30,40,50]`.
// let arr=[30,10,20,50,40,50];
// let findIndex=arr.findIndex((indx)=>indx===50);
// console.log(findIndex);

// 6. Convert an array of fruits into a string separated by `" & "`.

// let fruits=["apple","banana","orange","papaya","cocnut"];
// let strFruits=fruits.join(" & ");
// console.log(strFruits);

// 7. Replace the 2nd element of an array with `"JavaScript"`.

// let lang=["Java","kotlin","react","vue","nodejs"];
// let modifyLang=lang.splice(1,1,"javascript");
// console.log(lang);

// 8. Check if `"blue"` exists in `["red","green","blue"]`.

// let colors = ["red", "green", "blue"];
// let color = "red";

// let exist = colors.find((elem) => elem === color);
// if (exist!==undefined) {
//     console.log("color exist");

// } else {
//     console.log("color not exist");

// }

// 9. Extract only the middle two elements from `[1,2,3,4,5,6]`.
// let arr=[1,2,3,4,5,6];
// let extractArr=arr.splice(2,2);
// console.log(extractArr);
// console.log(arr);


// 10. Count how many times `"apple"` appears in an array.
//    let fruits=["banana","orange","apple","apple","guava","apple","orange"]
//      let count=0;
//      for(let i=0;i<fruits.length;i++){
//         if(fruits[i]==="apple".toLowerCase()){
//           count++;
//         }
//      }
//   console.log(count);


// ### **Intermediate (15 Qs)**

// 11. Given `[1,2,3,4,5]`, double each value using `map()`.

// let arr=[1,2,3,4,5];
// let doubleOfArr=arr.map((elem)=>elem*2);
// console.log(doubleOfArr);

// 12. Find all numbers > 50 in `[20,60,40,90,30]`.
// let arr=[20,60,40,90,30,51];
// let greaterNum=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>50){
//         greaterNum.push(arr[i])
//     }
// }
// console.log(greaterNum);

// 13. Find the first negative number in `[10,-2,5,-8,20]`.
// let arr=[10,-2,5,-8,20];
// let firstNegNum=arr.find((num)=>num<0);
// console.log(firstNegNum);

// 14. Check if **all** numbers are even in `[2,4,6,8]`.

// let num=[2,4,6,8];
// let evenNum=num.map((index)=>index%2===0);
// console.log(evenNum);

// 15. Check if **any** number is greater than 100.
// let num=[12,324,44,57,86,90];
// let greaterNum=num.map((index)=>index>100);
// console.log(greaterNum);

// 16. Remove all falsy values from `[0,1,false,2,"",3]`.
// let values=[0,1,false,2,"",3,6,null];

// let filteredArray=values.filter(Boolean);
// console.log(filteredArray);


// let falsyValue=[0,false,undefined,NaN,"",-0,null];
// let filteredArray=values.filter((val)=>{
//    return !falsyValue.includes(val);
// })
// console.log(filteredArray);

// 17. Flatten `[1,[2,3],[4,[5]]]` to one level.

// let arr=[1,[2,3],[4,[[5]]]];
// let flattenArr=arr.flat(Infinity);
// console.log(flattenArr);

// 18. Sort `[3,1,4,2,5]` in descending order.

// let arr=[3,1,4,2,5,11,22,12,18,26,20];
// let sortedArr=arr.sort((a,b)=>b-a);
// console.log(sortedArr);

// 19. Insert `"React"` at position 3 in `["HTML","CSS","JS","Node"]`.

// let lang=["HTML","CSS","JS","Node"];
// // lang[2]="React";
// // console.log(lang);

// let newLang=lang.splice(2,1,"React");
// console.log(lang);


// 20. Remove duplicates from `[1,2,2,3,4,4,5]`.
// let arr=[1,2,2,3,4,4,5];
// let newArr=[...new Set(arr)];
// console.log(newArr);

// 21. Get the last element of an array without using `.length - 1`.

// let arr=[1,2,3,4,5];
// let lastElem=arr.pop();
// console.log(lastElem);

// 22. Find sum of all numbers using `reduce()`.
// let arr=[1,2,3,4,5,6,7,8,9];
// let sumOfDigit=arr.reduce((elem,sum)=>sum+elem,0);
// console.log(sumOfDigit);


// 23. Create a new array from `[1,2,3]` where each element is squared.

// let arr=[1,2,3];
// let newArr=arr.map((elem)=>elem*elem);
// console.log(newArr);

// 24. Convert array of numbers to string `"1-2-3-4"`.

// let arr=[1,2,3,4];
// let strArr=arr.join("-");
// console.log(strArr);

// 25. Rotate `[1,2,3,4,5]` right by 2 positions.

// let arr=[1,2,3,4,5];
// let k=2;

// let part1=arr.slice(-k);
// console.log(part1);

// let part2=arr.slice(0,3);
// console.log(part2);

// let rotations=part1.concat(part2);
// console.log(rotations);

// ---

// ### **Advanced/Real-world (10 Qs)**

// 26. Find the top 3 highest scores from `[70,85,92,65,100,99]`.
// let score=[70,85,92,65,100,99];
// let top3Score=score.sort((a,b)=>b-a).slice(0,3);
// console.log(top3Score);


// 27. Separate even and odd numbers into two arrays.

//    let arr=[1,2,3,4,5,6,7,8,9];

//    let evenNo=arr.filter((elem)=>elem%2===0);
//    console.log(evenNo);

//    let oddNo=arr.filter((elem)=>elem%2!==0);
//    console.log(oddNo);

//    let evenNo=[];
//    let oddNo=[];
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         evenNo.push(arr[i])
//     }else{
//         oddNo.push(arr[i])
//     }
//    }
//    console.log(evenNo);
//    console.log(oddNo);


// 28. Group words by their first letter from `["apple","banana","apricot","blueberry"]`.

// let words = ["apple", "banana", "apricot", "blueberry","Guava","coconut"];

// let groupWord={};
// for(let word of words){
//     let firstLetter=word[0];
//     if(!groupWord[firstLetter]){
//         groupWord[firstLetter]=[];
//     }
//     groupWord[firstLetter].push(word);
// }
// console.log(groupWord);



// 29. Create a shopping cart total with tax using `reduce()`.
// let cart=[10,34,67,97,343,67,878];
// let price=cart.reduce((acc,p)=>acc+p,0);
// let afterTax=price+price*0.1;
// console.log(price);
// console.log(afterTax);


// 30. Find common elements between two arrays.

// let arr1=[1,2,3];
// let arr2=[3,4,5,2];

// let commonElem=arr1.filter((num)=>arr2.includes(num));
// console.log(commonElem);



// 31. Given an array of objects with `{name,age}`, filter those older than 18.
//   let arrayOfObj=[{name:"raj",age:30},{name:"sonu",age:22},{name:"monu",age:13},{name:"vibhu",age:2}];
//   let result=arrayOfObj.filter((elem)=>elem.age>18)
// //   .map((elem)=>elem.age);
//   console.log( result);




// 32. Sort students by score from highest to lowest.

// let studentScore=[56,76,57,98,78,99,65,73,88,92];
// let highToLowScore=studentScore.sort((a,b)=>b-a);
// console.log(highToLowScore);

// 33. From transaction array `[{id:1,amount:200},{id:2,amount:500}]`, get total amount.

// let transactionArray=[{id:1,amount:200},{id:2,amount:1500}];
// // let totalAmount=transactionArray.map((elem)=>elem.amount).reduce((acc,amount)=>acc+amount,0);
// // or 
// let totalAmount=transactionArray.reduce((acc,transaction)=>acc+transaction.amount,0)
// console.log(totalAmount);

// 34. Remove all `null` and `undefined` values from an array.

// let arr=[1,2,null,10,undefined,null,"",5,9];
// let newArr=arr.filter((elem)=>Boolean(elem));
// console.log(newArr);

// 35. Paginate an array into chunks of size 3.

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let chunkSize=3;
// let paginateArr=[];

// for(let i=0;i<arr.length;i+=chunkSize){
//     paginateArr.push(arr.slice(i,i+chunkSize));
// }
//  console.log(paginateArr);
 
// ---

// ## **3. Mini Project – Array Inventory Manager**

// **Description:**

// * User enters product name and price
// * Data stored in an array of objects
// * Can:

//   * Add item
//   * Remove item
//   * Show all items sorted by price
//   * Find items below a certain price

// let dataStore = [];
// while (confirm("Add a product?")) {
//   const name = prompt("Enter Product Name:");
//   if (name === null) break;
//   const price = Number(prompt("Enter Price:"));
//   if (Number.isNaN(price)) { alert("Invalid price"); continue; }
//   dataStore.push({ name, price });
// }
// console.log(dataStore);


