// // object creation 

// //object literal
// // let obj={
// //     name:"raj",
// //     age:25
// // }
// // console.log(obj.name);

// //using new Object
// // let obj=new Object();
// // obj.name="raj";
// // obj.age=25;
// // console.log(obj);

// //using constructor function
// // function User(name,age,city){
// //     this.name=name;
// //     this.age=age;
// //     this.city=city;
// // }
// // let u1=new User("rahul",25,"Delhi");
// // console.log(u1);

// //object.create();

// // let student=Object.create({learner:"yes"});
// // student.name="raj";
// // student.age=23;
// // student.city="Delhi";
// // console.log(student);

// //object with functions(methods)

// // let calculator={
// //     add:function(a,b){return a+b},
// //     multiply(a,b){return a*b}
// // }
// // console.log(calculator.add(2,3));
// // console.log(calculator.multiply(2,3));

// ## 🔹 1. Practice Questions (30 with hints)

// ### Basic Level

// 1. Create an object `car` with properties `brand`, `model`, and `year`. Print it.
//    🔑 *Hint: Use object literal.*
// 2. Access the `brand` of `car` object using both dot and bracket notation.
// const car={
//     brand:"Audi",
//     model:"Audi X11-S",
//     year:2025
// }
// console.log(car);
// console.log(car.brand);
// console.log(car["brand"]);
// console.log(car["year"]);



// 3. Add a new property `color` to `car` object.
// const car={
//     brand:"Audi",
//     model:"Audi X11-S",
//     year:2025
// }
// car.color="Black";
// console.log(car);

// 4. Update the `year` property of `car`.
// const car={
//     brand:"Audi",
//     model:"Audi X11-S",
//     year:2025
// }
// car.color="Black";
// car.year=2026;
// console.log(car);
// 5. Delete the `model` property from `car`.
// const car={
//     brand:"Audi",
//     model:"Audi X11-S",
//     year:2025
// }
// car.color="Black";
// car.year=2026;
// delete car.model
// console.log(car);

// 6. Check if property `"brand"` exists in `car`.
//    🔑 *Hint: Use `"brand" in car`.*
// const car={
//     brand:"Audi",
//     model:"Audi X11-S",
//     year:2025
// }
// car.color="Black";
// car.year=2026;
// delete car.model
// console.log(car.brand);

// 7. Create an object `student` with properties: `name`, `age`, `marks (object with 3 subjects)`. Access one subject’s marks.
// let student={
//     name:"rahul",
//     age:26,
//     marks:{
//         science:78,
//         math:90,
//         english:89
//     }
// }
// console.log(student.marks.english);

// 8. Loop through all properties of an object using `for...in`.

// let student = {
//     name: "rahul",
//     age: 26,
//     marks: {
//         science: 78,
//         math: 90,
//         english: 89
//     }
// }
// for (let key in student) {
//     console.log(key, ":", student[key]);
// }


// 9. Get all keys of an object using `Object.keys()`.
// let student = {
//     name: "rahul",
//     age: 26,
//     marks: {
//         science: 78,
//         math: 90,
//         english: 89
//     }
// }
// console.log(Object.keys(student));


// 10. Get all values of an object using `Object.values()`.

// let student = {
//     name: "rahul",
//     age: 26,
//     marks: {
//         science: 78,
//         math: 90,
//         english: 89
//     }
// }

// console.log(Object.values(student));


// ### Intermediate Level

// 11. Get both keys and values using `Object.entries()`.

// let user = {
//     name: "john",
//     age: 24,
//     city: "Delhi",
//     pincode: 110001,
//     language: {
//         java: true,
//         javascript: false,
//         isDeveloper: "No",
//         isTeacher: "Yes"
//     }
// }
// // console.log(user);
// console.log(Object.entries(user));



// 12. Create a nested object `person` → `address` → `city`. Access `city`.
// let person={
//     name:"Sahil",
//     age:67,
//     address:{
//         city:"Noida",
//         sector:105
//     }
// }
// console.log(person.address["city"]);

// 13. Freeze an object so no property can be added/updated.
//     🔑 *Hint: `Object.freeze(obj)`*
// let person={
//     name:"Sahil",
//     age:67,
//     address:{
//         city:"Noida",
//         sector:105
//     }
// }
// console.log(person);
// Object.freeze(person)
// person.color="white";
// person.name="John";
// person.age=34
// console.log(person);


// 14. Seal an object so no property can be added/removed but can be updated.
//     🔑 *Hint: `Object.seal(obj)`*
// let person={
//     name:"Sahil",
//     age:67,
//     address:{
//         city:"Noida",
//         sector:105
//     }
// }
// console.log(person);
// Object.seal(person)
// person.color="white";
// delete person.name;
// person.age=34
// console.log(person);
// 15. Merge two objects `{a:1}` and `{b:2}` into one.
//     🔑 *Hint: Use `Object.assign()` or spread `{...}`.*
// let obj1={a:1};
// let obj2={b:2};
// console.log(Object.assign(obj1,obj2));

// let merge={...obj1,...obj2};
// console.log(merge);

// 16. Clone an object without reference.
//     🔑 *Hint: Use spread `let newObj = {...oldObj}`.*
// let oldObj={
//     carName:"Audi",
//     model:2025,
//     price:4500000,
//     onRoad:true
// }
// // console.log(oldObj);
// let newObj={...oldObj};
// console.log(newObj);


// 17. Check if two objects are equal in values.
//     🔑 *Hint: Convert to JSON and compare strings.*
//  let obj1={a:1,b:2};
//  let obj2={a:1,b:2};
//  console.log(obj1===obj2);//false due to reference type ,object {} is reference data type it compares memory not value 

// console.log(JSON.stringify(obj1)===JSON.stringify(obj2));//json.stringify()[orders matter in json] converts object into strings,and as u know strings are primitive data type ,its comapres value .




// 18. Write a function that counts how many properties are in an object.

// function countsProperties(obj){
//     return Object.keys(obj);
// }
// let student={
//     name:"John",
//     age:20,
//     study:12,
//     address:{
//         city:"Mumbai",
//         pin:220962
//     }
// }
// console.log(countsProperties(student).length);

// 19. Store a function inside an object as `greet()`. Call it.
// let sayHello={
//     name:"raj",
//     age:25,
//     school:"DPS",
//     greet:function(){
//       return `Good Morning 🌞 ${this.name} !!`;

//     }
// }
// console.log(sayHello.greet());


// 20. Use `this` inside an object to access its own property.
// let student={
//     name:"Abhijit",
//     age:19,
//     study:"Graduation",
//     introduction:function(){
//         return `My Name is ${this.name} and My age is ${this.age} , Right now i am Studying in  ${this.study} at Delhi University. `
//     }
// }
// console.log(student.introduction());

// ### Advanced Level

// 21. Create an object of products (id, name, price). Print names of all products.

// let products = [
//     {
//         name: "milk",
//         id: 121,
//         price: 10
//     },
//     {
//         name: "butter",
//         id: 231,
//         price: 112
//     },
//     {
//         name: "ghee",
//         id: 357,
//         price: 450
//     }

// ]
// console.log(products.map(product=>`${product.name}-₹${product.price}`).join("  "));

// let obj1 = {
//     name: "milk",
//     id: 121,
//     price: 10
// }
// let obj2 = {
//     name: "butter",
//     id: 231,
//     price: 112
// }
// let obj3 = {
//     name: "ghee",
//     id: 357,
//     price: 450
// }
// console.log(obj1.name);
// console.log(obj2.name);
// console.log(obj3.name);


// 22. Write a function that returns the most expensive product from the products object.
// let products = [
//     {
//         name: "milk",
//         id: 121,
//         price: 10
//     },
//     {
//         name: "butter",
//         id: 231,
//         price: 112
//     },
//     {
//         name: "ghee",
//         id: 357,
//         price: 250
//     }

// ]
// console.log(products.reduce((prev,curr)=>prev.price>curr.price ? prev:curr));



// 23. Convert object `{name:"Tinku", age:28}` into an array of `[key, value]`.
// let obj={name:"Tejas", age:28};
// console.log(Object.entries(obj));

// OR 
// let res=[];
// for(key in obj){
//     res.push(key,obj[key])
// }
// console.log(res);



// 24. Convert back array `[["name","Tinku"],["age",28]]` into an object.
// let obj=[["name","Tinku"],["age",28]];
// let arrToObj=Object.fromEntries(obj)
// console.log(arrToObj);

//universal object to array convertor and its viceversa

// function conversion(data) {
//     // convert object into array 
//     if (typeof data === "object" && !Array.isArray(data)) {
//         return Object.entries(data);
//     } else if (Array.isArray(data)) {
//         return Object.fromEntries(data)
//     }
//     else {
//         return "Invalid data"
//     }
// }
// let arr = [ ["name", "Tinku"], ["age", 28] ];

// let obj = { name: "Tinku", age: 28 };
// console.log(conversion(obj));
// console.log(conversion(arr));

// 25. Write a function that removes a property from an object dynamically.
// let obj={
//     name:"raj",
//     age:25,
//     gender:"male",
//     city:"delhi",
//     pincode:110001
// }
// function removeProperty(obj,prop){
//    if(prop in obj){
//    delete obj[prop];
//    return obj;
//    }else{
//     return `${prop} is not found in objects.`
//    }

// }
// console.log(removeProperty(obj,"city"));



// 26. Create a function that checks if an object is empty.
// function checksEmpty(obj){
//     return Object.keys(obj).length===0;
// }
// console.log(checksEmpty({}));
// console.log(checksEmpty({name:"raj"}));

// function checksEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }
// console.log(checksEmpty({}));
// console.log(checksEmpty({city:"bhopal"}));

// function checksEmpty(obj){
//     return JSON.stringify(obj)==="{}";
// }
// console.log(checksEmpty({}));
// console.log(checksEmpty({age:23}));


// 27. Create a nested object `company` with `employees` array of objects. Print first employee’s name.
// let company = {
//     employees: [
//         { name: "Arjun", company: "HCL" },
//         { name: "John", company: "TCS" },
//         { name: "Alice", company: "Google" }
//     ]
// };
// function findEmployeeName(company) {
//     return company.employees[0].name;
// }
// console.log(findEmployeeName(company));

// 28. Write a function that calculates total salary of employees from object `{e1:2000,e2:3000,e3:4000}`.
// let obj={e1:2000,e2:3000,e3:4000};

// function calculateSalary(obj){
//  return Object.values(obj).reduce((total,salary)=>total+salary,0)
// }
// console.log(calculateSalary(obj));

// OR 

// function calculateSalary(obj){
//     let total=0;
//     for(let key in obj){
//         total+=obj[key]
//     }
//     return total;
// }
// console.log(calculateSalary(obj));


// 29. Convert object to JSON string using `JSON.stringify()`.
// let obj={name:"rahul",age:25,city:"Bhopal"};
// console.log(JSON.stringify(obj)); //{"name":"rahul","age":25,"city":"Bhopal"}


// 30. Parse back JSON string into object using `JSON.parse()`.
// let obj='{"name":"rahul","age":25,"city":"Bhopal"}';
// console.log(JSON.parse(obj));

// ## 🔹 3. Mini Project (Object Practice)

// **🎯 Project: Student Report Card**

// 👉 Requirements:

// * Store student details (`name`, `rollNo`, `marks` object with 3 subjects).
// * Write functions inside object:

// let studentDetails={
//     name:"Ayansh",
//     rollNo:2,
//     marks:{math:80,science:87,english:90},
//     getTotal(){
//       return this.marks.math+this.marks.science+this.marks.english
//     },
//     getPercentage(){
//        return this.getTotal()/3;
//     },
//     getGrade(){
//         let percentages=this.getPercentage();
//          if(percentages>=95){
//             return "Grade A+"
//         }else if(percentages>=80){
//             return "Grade A"
//         }else if(percentages>=70){
//             return "Grade B"
//         }else{
//             return "Grade C"
//         }
//     }

// }
// console.log("Name:",studentDetails.name);
// console.log("RollNo: ",studentDetails.rollNo);
// console.log("Marks: ", studentDetails.marks);

// console.log("Total Marks Obtained :", studentDetails.getTotal());
// console.log("Overall Percentage: ", studentDetails.getPercentage().toFixed(2));"", 
// console.log("Overall Grade : ", studentDetails.getGrade());

//   * `getTotal()` → returns total marks.
//   * `getPercentage()` → returns percentage.
//   * `getGrade()` → returns grade based on percentage.

