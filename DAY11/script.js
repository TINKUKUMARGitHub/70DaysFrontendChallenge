console.log(" javascript mastery");


// # ❓ 50 JavaScript Questions – Practice for Mastery
// ## 🟢 Basic (15 Q)

// 1. Declare a variable and store your name.

const myName="raj";
console.log(myName);

// 2. Declare a constant for PI and log it.

const PI=3.14159;
console.log(PI);

// 3. Check `typeof null` and explain result.

  console.log(typeof null);//object;
// it is a javascript Historical error from the early days 1995
  
// 4. What is the value of a variable without assignment?
let animal;
console.log(animal);//undefined

// 5. Convert number 10 to string using `String()`.

let number=10;
let str=String(number)
// console.log(str);
console.log(str, typeof str);



// 6. Convert string "5" to number using `Number()`.

let strings="5";
console.log(typeof strings);

let num=Number(strings);
console.log(num,typeof num);


// 7. Log `typeof NaN` and explain.

console.log(typeof NaN);//number
// Because:NaN is a special value that represents an invalid number result.
// JavaScript treats it as part of the number type, even though it’s "not a real number."
console.log(NaN===NaN);//false


// 8. Declare 3 variables with different data types.

const veg="onion";
const val=10;
const isAdult=true;

// 9. Assign `undefined` to a variable – what is its type?

const value=undefined;
console.log(typeof value);//undefined

// 10. Reassign `let x = 5` to a string – what’s `typeof x`?

let x="5";
console.log(typeof x);//string

// 11. Use `parseInt("10.5")` – what’s the result?

let fVal="10.5";
let result=parseInt(fVal);
console.log(result,typeof result);//10 and number

// 12. What’s `typeof function() {}` ? //function;

// typeof function is a function why?because
// In JS, functions are objects, but typeof returns "function" to help you easily detect callable objects.


// 13. Use `typeof []` and `typeof {}` – compare.
      console.log(typeof []);//object
      console.log(typeof {});//object
      
      

// 14. What’s `typeof Symbol("id")` ? //symbol


// 15. Declare a BigInt and check its type.

let bigInt=10n;
console.log(bigInt,typeof bigInt); //10n, bigint

// ## 🟡 Intermediate (20 Q)

// 16. What’s the output: `"10" + 5` ? Why?

  console.log("10"+5,typeof("10"+5));//105 string
//   because js internally convert number 5 is in strings like : "5", so its concatinate and output will be "105"
  
// 17. What’s the output: `"10" - 5` ? Why?
 console.log("10"-5,typeof("10"-5));// 5 number
//   because js internally convert string "10" is in number like : 10, so its concatinate and output will be 5
  
// 18. Use `==` and `===` with `"5"` and `5` – explain.

console.log("5"===5);//false ,bcz it check both value + data types (strict equality)
console.log("5"==5);//true, bcz it checks value only


// 19. Can you reassign `const` variable?
    //  no because it gives an error Assignment to constant variables not allowed redeclared and reassign

    // const fruits="apple";
    // fruits="banana"
    // console.log(fruits);
    
// 20. Use `let x; console.log(x)` – what prints?//undefined
// let x;
// console.log(x);//undefined

// 21. Compare `null == undefined` and `null === undefined`.
console.log(null==undefined);//true
console.log(null===undefined);//false

// 22. What’s the result of `true + true` ?
  console.log(true+true);//2
  
// 23. Use `Boolean(0)` and `Boolean(1)`.
    console.log(Boolean(0)+Boolean(1)); //1 false means 0+true means 1 =1
    
// 24. What happens: `let xyz = "10a" - 2` ?
     let xyz = "10a" - 2;
     console.log(xyz); NaN
     
// 25. Explain `typeof typeof 10` result.
     console.log(typeof 10);//number
     
// 26. Use `!!"hello"` and explain output.
   console.log(!!"hello");//true
   
// 27. Declare an object and check `typeof`.
  let obj={name:"tiger",age:32};
  console.log(obj,typeof obj);//object
  
// 28. Declare an array and use `Array.isArray()`.

let arr=[1,2,3];
console.log(Array.isArray(arr));//true 


// 29. Check `typeof null` again. Why it's "object"?
console.log(typeof null);//object it is a js bug early 1995

// 30. What’s `typeof NaN` and is NaN === NaN?
  console.log(typeof NaN);//number
  console.log(NaN===NaN);//false
  
  
// 31. Add 2 strings with `+` – what happens?
      let fruit1="apple";
      let fruit2="banana";
      console.log("apple"+"banana");
      console.log("apple"-"banana");
      
      console.log(fruit1+fruit2);//applebanana
      console.log(fruit1-fruit2);NaN
      
      
// 32. Use `typeof Infinity` – what type?
     console.log(typeof Infinity); //number
     
// 33. Explain difference: `parseInt("101abc")` vs `Number("101abc")`
   console.log(parseInt("101abc"));//101
   console.log(Number("101abc"));//NaN
   
   
// 34. What happens: `const a; a = 5` ?
    // const a;//syntax error missing initializer in constant declaration
    // a=5
// 35. Use logical AND `&&` and OR `||` with true/false.

console.log(true && true); //true
console.log(true && false);//false
console.log(true || true);//true
console.log(true || false);//true


// ## 🔴 Tricky Logic (15 Q)

// 36. let x = 5; a = a + "5"; What’s a?
      let a = 5; 
      a=a+"5";
      console.log(a);//"55"
      
// 37. let y = "10" - 2; typeof y?
    let y = "10" - 2;
    console.log(typeof y);//number
    
// 38. Compare "0" == 0 and "0" === 0.
      console.log("0"==0);//true
      console.log("0"===0);//false
      
      
// 39. Use `typeof null`, again – explain.
      console.log(typeof null);//object ,it is a js bug in early 1995
      
// 40. What’s `typeof (typeof 5)` ?
      console.log(typeof (typeof 5));//string
      
// 41. What’s result of `true == 1` and `false == 0`?
    console.log(true==1);//true
    console.log(false==0);//true
    
    

// 42. Can you declare `const obj = {}` and change obj.x?
 const objects={age:24,city:"bhopal"};
 objects.city="delhi";//yes we can 
 console.log(objects);//{age:24,city:"delhi"}
 

// 43. What’s `typeof undefined` ?
 console.log(typeof undefined);//undefined
 
// 44. let z = null + 1; result?
  let z = null + 1;
  console.log(z);//1
  
// 45. Use `"5" * "2"` – output?
 console.log("5" * "2");//10
 
// 46. Use `Number(true)` and `Number(false)`.
    console.log(Number(true)+Number(false));//1
    
// 47. Use `isNaN("abc")` – result?
   console.log(isNaN("abc"));//true

// 48. let x = 0; if(x) { ... } – will it run?
  let b=0;
  if(b){
    console.log("truthy value");
    
  }else{
  console.log("falsy value");
  
  }
  //falsy value bcz 0 is a falsy value

// 49. Compare `" " == false` – true/false?
      console.log(""==false);//true
      console.log(true==false);//false
      
      
// 50. Explain coercion in `"5" + 5` vs `"5" - 5`.
console.log("5"+5);//55
console.log("5"-5);//0


// * Write a logic that converts any string to a number and checks its type.
//using Number() and parseInt(); 
 console.log(parseInt("101abc"));
 let strngs="101abc"
 console.log(parseInt(strngs), typeof strngs);
 
 console.log(parseInt("abc"),typeof "abc");
 
// * Bonus: Create a **calculator** that performs addition/subtraction on two input numbers using prompt/alert (only basics now).

// let num1=Number(prompt("Enter first number"));
// let num2=Number(prompt("Enter second number"));
// let resultPlus=num1+num2;
// let resultMinus=num1-num2;
// console.log(resultPlus);
// console.log(resultMinus);

// Build a small **Profile Card**:
// * Name, Age, Profession (use variables)
// * Display info using `console.log`

const fullName="Akshay Soni";
const age=25;
const profession="Developer";
console.log(`I am ${fullName} 
    and my age is ${age},
    and my profession is ${profession} `);

