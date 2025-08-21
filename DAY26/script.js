
// let user={
//     name:"raj",
//     greet(){
//         return `🖐 Hello ${this.name}`
//     }
// }
// console.log(user);
// console.log(user.greet());

// ## 🔹 2. Practice Questions (30 with hints)

// ### Basic Level

// 1. Create an object `employee` with method `getDetails()` that prints name and age.
//    🔑 *Hint: Use `this` inside method.*
// let employee={
//     name:"Alice",
//     age:35,
//     role:"Software Engineer",
//     getDetails(){
//         return `Hii, My Name is ${this.name} and I am ${this.age} years old. And Currently I am a ${this.role}.`
//     }
// }
// console.log(employee.getDetails());

// 2. Add a method `isAdult()` inside object `person` that checks if age ≥ 18.
// let person={
//     age:18,
//     city:"Delhi",
//     isAdult(){
//         // let personAge=this.age;
//         // if(personAge>=18) return "Adult";
//         // return "Minor"
//         // or 
//         return this.age>=18?"Adult":"Minor"
//     }
// }
// console.log(person.age);
// console.log(person.city);
// console.log(person.isAdult());


// 3. Write an object `calculator` with methods `add`, `subtract`, `multiply`, `divide`.

// const calculator = {
//     // add(a, b) { return a + b },
//     // subtract(a, b) { return a - b },
//     // multiply(a, b) { return a * b },
//     // divide(a, b) { return b!==0?a/b:"Error:Division by Zero" }

//     // or 

//     add:(a,b)=>a+b,  //arrow function 
//     subtract:(a,b)=>a-b,
//     multiply:(a,b)=>a*b,
//     divide:(a,b)=>b!==0?a/b:"Error: Division by Zero "

// }
// console.log(calculator.add(3, 16));
// console.log(calculator.subtract(3, 6));
// console.log(calculator.multiply(3, 6));
// console.log(calculator.divide(3, 0));

// 4. Create a nested object `book` with author details. Print author’s name.
// const book = {
//     bookName: "Rich Dad && Poor Dad",
//     author: {
//         authorName: "Robert Kiyosaki",
//         licence: "Yes",
//         isBilingual: true,
//         totalPage: 220
//     }
// }
// console.log(book);
// console.log(book.bookName);
// console.log(book.author);
// console.log(book.author.authorName);


// 5. Use destructuring to extract `name` and `salary` from object `employee`.

// const employee = {
//     name: "Suman",
//     salary: 54530,
//     company: "Apna-Company"
// }
// let { name, salary } = employee;
// console.log(name);
// console.log(salary);
// console.log("Name:", name, "|  Salary: ", salary);




// 6. Rename property `department` into variable `dept` while destructuring.

// let employee={
//     name:"shinghani",
//     compay:"Apna-Company",
//     department:"Service"
// }
// let{department:dept,compay:comp}=employee;
// console.log(dept);


// 7. Use default value in destructuring for missing property `bonus`.

// let employee = {
//     name: "Shivam",
//     age: 26,
//     department: "IT",
// }
// let { department, property = "bonus" } = employee;
// console.log(department, property);


// 8. Destructure nested object `user.profile.city`.

// let user = {
//     name: "Malkhani",
//     age: 38,
//     profile: {
//         department: "IT",
//         role: "Developer",
//         salary: 736780,
//         state: {
//             city: "Delhi",
//             location: "Sector-25"
//         }
//     }
// }
// let { profile: { state: { city } } } = user;
// console.log(user.name);
// console.log(user.profile);
// console.log(user.profile.state);
// console.log(user.profile.state.city);




// 9. Use rest operator to extract all properties except `id`.

// const user = {
//     name: "sagar",
//     age: 25,
//     role: "Engineer",
//     id: 12323,
//     department: "IT"
// }
// let { id, ...obj } = user;
// console.log(obj);


// 10. Use optional chaining to access `student.details.marks.math`.

// const student = {
//     name: "satyam",
//     age: 27,
//     details: {
//         school: "DAV Delhi",
//         rollNo: 24,
//         marks: {
//             science: 79,
//             english: 89,
//             computer: 95,
//             // math:90
//         }
//     }
// }
// console.log(student.details.marks?.math);


// ### Intermediate Level

// 11. Merge two objects `obj1` and `obj2` using spread.
// let obj1={name:"raj",age:26};
// let obj2={name2:"sonu",age2:30};
// let mergedObj={...obj1,...obj2};
// console.log(mergedObj);


// 12. Merge using `Object.assign()`.
// let obj1={car:"maruti",price:787473};
// let obj2={locations:"Delhi",metro:"Sector-10"};
// let mergedObjects=Object.assign({}, obj1,obj2);
// console.log(mergedObjects);


// 13. Clone an object and prove original is not affected when clone changes.
// let car={
//     name:"Audi",
//     model:2025,
//     milage:30,
//     price:6590286
// }
// let cloning={...car}; //shallow copy
// cloning.color="red",
// cloning.engine="BS-6"
// console.log(cloning);
// console.log(car);//original not affected


// 14. Write a function that returns all keys of object using `Object.keys()`.
// function findKeys(obj){
//     return Object.keys(obj);
// }
// let car={
//     name:"Audi",
//     model:2025,
//     milage:30,
//     price:6590286
// }

// console.log(findKeys(car));

// 15. Write a function that returns all values using `Object.values()`.
// let car={
//     name:"Audi",
//     model:2025,
//     milage:30,
//     price:6590286
// }
// function findValues(obj){
//     return Object.values(obj);
// }
// console.log(findValues(car));

// 16. Convert object `{x:1,y:2}` into array using `Object.entries()`.
// let objects={x:1,y:2};
// console.log(Object.entries(objects));


// 17. Convert `[["a",10],["b",20]]` into object using `Object.fromEntries()`.
// let arr=[["a",10],["b",20]];
// console.log(Object.fromEntries(arr));//{a:10,b:20}


// 18. Create a method inside object that calculates area of rectangle (length, width).
// let obj={
//      name:"rectangle",
//     area:(length,width)=>length*width,
// }
// console.log(obj.area(12,23));

// 19. Write a method `fullName()` inside object `person` that combines first and last name.

// let person = {
//     firstName: "john",
//     lastName: "Desai",
//     fullName() {
//         return `My FullName is ${this.firstName} ${this.lastName}!`
//     }
// }
// console.log(person.fullName());


// 20. Show difference between shallow copy and deep copy with nested object.

// let car = {
//     model: "SUV",
//     color: "Black",
//     manufacturing: {
//         country: "India",
//         price: 1200000,
//         engine: {
//             cylinder: 4,
//             isBS6: true
//         }
//     }
// }
// car.state="Jharkhand";
// car.isFourWheel="yes";
// car.color="white";
// car.cylinder=6
// let shallowCopy={...car};
// shallowCopy.state="Gujrat";
// shallowCopy.manufacturing.country = "Japan";
// shallowCopy.company="Toyota";
// console.log(shallowCopy);

// console.log(car);

// let deepCopy=JSON.parse(JSON.stringify(car));

// console.log(deepCopy);



// ### Advanced Level

// 21. Create a function that freezes object and test by trying to update property.

// let car={
//     name:"Maruti-Suzuki",
//     model:"SUV",
//     color:"White",
//     price:1234572
// }

// function freezes(obj){
//     return Object.freeze(obj);
// }
// freezes(car)
// car.name="Mahindra";
// car.engine="BS-6"
// delete car.price
// console.log(car);


// 22. Seal an object and test by deleting a property.

// let car={
//     name:"Maruti-Suzuki",
//     model:"SUV",
//     color:"White",
//     price:1234572
// }

// function seal(obj){
//     return Object.seal(obj);
// }
// seal(car)
// car.name="Mahindra";
// car.engine="BS-6"
// delete car.price
// console.log(car);

// 23. Create an object of students and sort them by marks.
//     🔑 *Hint: Convert object to array of entries first.*

// let student = {
//     marks: [                               // key:value;
//         { name: "raj", mark: 45 },
//         { name: "akshay", mark: 62 },
//         { name: "mohit", mark: 80 },
//         { name: "pritam", mark: 94 },
//         { name: "zonny", mark: 57 },
//         { name: "vishal", mark: 79 },
//     ]
// }
// let entries=Object.entries(student);
// student.marks.sort((a,b)=>a.mark-b.mark);
// // student.marks.sort((a,b)=>b.mark-a.mark);
// // console.log("Marks sorted from high to low (high=>low)");
// console.log("Marks sorted from low to high (low=>high)");

// console.log(student.marks);







// 24. Write a function that returns the highest salary from employees object.

// let employee = {
//     salary: [
//         { name: "akshat", income: 87678 },
//         { name: "vishal", income: 67898 },
//         { name: "kailash", income: 98678 },
//         { name: "john", income: 23278 },
//         { name: "diptendu", income: 35678 },
//         { name: "roshan", income: 14678 },

//     ]
// }
// function highestSalary(obj) {
//     //  let res= employee.salary.sort((a, b) => b.income - a.income);
//     //   return res[0];
//     //   or 
//     return employee.salary.reduce((max,curr)=>curr.income>max.income?curr:max)
// }
// console.log(highestSalary(employee));




// 25. Write a function that converts nested object into flat object.

// let car = {
//     engine: "Diesel",
//     color: "Black",
//     company: {
//         name: "Maruti",
//         city: "Gurugram",
//         wheel: {
//             type: "suspainson",
//             model: "latest",
//             body: {
//                 design: "AI",
//                 manufacturing: "India"
//             }
//         }
//     }
// }

// function flatten(obj, prefix = '') {
//   let flat = {};
//   for (let key in obj) {
//     let newKey = prefix ? `${prefix}.${key}` : key;
//     if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//       Object.assign(flat, flatten(obj[key], newKey));
//     } else {
//       flat[newKey] = obj[key];
//     }
//   }
//   return flat;
// }
// console.log(flatten(car));


// 26. Write a function that counts how many methods exist inside an object.

// let student = {
//     name: "vishu",
//     getDetails() {
//         return "My Name is vishu and i am 17 years old."
//     },
//     hobby() {
//         return "Football, Cricket , Chess"
//     },
//     complexion: "white",
//     getMarks() {
//         return "Pass in all Subject"
//     }
// }
// function countMethods(obj) {
//     let count = 0;
//     for (let key in obj) {
//         if (typeof obj[key] === "function") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(student.name);
// console.log(student.getDetails());

// console.log("Total methods in an object is : ", countMethods(student));



// 27. Use destructuring inside function parameters:
// let obj={
//     name:"raj",
//     age:38,
//     color:"white",
//     job:"Developer",
//     company:"Accenture"
// }

// function user({name,age}){
//     return `Name: ${name} and age is : ${age} year`
// }
// console.log(user(obj));

// 28. Write a function that swaps values of two object properties using destructuring.

// let obj1 = { name: "raj", age: 45, color: "white" };
// let obj2 = { car: "Maruti", model: 2025, price: 356563 };

// function swap(o1, o2, key1, key2) {
//     [o1[key1], o2[key2]] = [o2[key2], o1[key1]];  // destructuring swap
// }

// swap(obj1, obj2, "name", "car");

// console.log(obj1); 
// // { name: 'Maruti', age: 45, color: 'white' }

// console.log(obj2); 
// // { car: 'raj', model: 2025, price: 356563 }

// console.log(obj2);




// 29. Write a function that combines multiple objects into one (n objects).
// function combineObj(...obj){
//     return Object.assign({},...obj);
// }
// console.log(combineObj({age:20},{color:"white"},{study:12},{play:"cricket"}));


// 30. Write a method `toJSON()` in object which customizes JSON.stringify() output.

// let user = {
//     name: "Vishes",
//     age: 26,
//     password: 132122,
//     toJSON() {
//         return {
//             name: this.name,
//             age: this.age
//         }
//     }
// }
// console.log(JSON.stringify(user));



// ## 🔹 3. Mini Project

// **🎯 Project: Employee Management System**

// 👉 Requirements:

// * Create `employee` object with properties: `id`, `name`, `department`, `salary`.
// * Add methods:
// let employee = {
//     id: 12311,
//     name: "John Doe !",
//     department: "IT",
//     salary: 876879,
//     getDetails() {
//         return `My Name is ${this.name} and My Department is ${this.department}`;
//     },
//     getAnnualSalary() {
//         return `${this.salary * 12}`;
//     },
// };

// let { name, getAnnualSalary } = employee;
// console.log(name);
// console.log(employee.getDetails());

// console.log(getAnnualSalary.call(employee));




//   * `getDetails()` → returns name + dept.
//   * `getAnnualSalary()` → salary × 12.
// * Use **destructuring** to extract specific properties.
// * Add **optional chaining** to handle missing properties (like bonus).

// 👉 Example:

// ```js
// let employee = {
//   id: 101,
//   name: "Tinku",
//   department: "IT",
//   salary: 50000,
//   getDetails() { return `${this.name} works in ${this.department}`; },
//   getAnnualSalary() { return this.salary * 12; }
// };

// console.log(employee.getDetails());
// console.log(employee.getAnnualSalary());

// let { name, salary } = employee;
// console.log(name, salary);

// console.log(employee.bonus?.amount); // safe check
// ```

// ---
