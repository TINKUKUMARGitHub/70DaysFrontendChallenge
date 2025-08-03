// // // // // * Explain all 3 variable types with examples
// // // // var fruit="Apple";
// // // // let animal="Tiger";
// // // // // const PI=3.14159;

// // // // // * Data types with typeof examples
// // // // // There are 2 data types in js
// // // // // 1.Primitive Data type
// // // // // There are 7 Primitive data types
// // // // // Number,null,boolean,bigint,string,symbol,undefined
// // // // console.log(typeof 2);//number
// // // // console.log(typeof null); //object
// // // // console.log(typeof true);//boolean
// // // // console.log(typeof 10n);//bigint
// // // // console.log(typeof "apple"); //string
// // // // console.log(typeof Symbol("id"));// symbol
// // // // console.log(typeof undefined);//undefined

// // // // // 2.Reference Data type

// // // // // Array[],Object{},function(){}
// // // // console.log(typeof []);//object
// // // // console.log(typeof {});//object
// // // // console.log(typeof function(){});//function

// // // // // * Implicit coercion in + and - operators
// // // // // * Use console.log to observe type changes

// // // // console.log("5"+5); //55
// // // // console.log("5"-5); //0
// // // // console.log(typeof -"5");

// // // // // ## 2️⃣ Practice Task (2 hrs)

// // // // // ### 🔵 Basic (15 Q)

// // // // // 1. Declare let x = 10; Print typeof x
// // // //     let x=10;
// // // //     console.log(typeof x);//number

// // // // // 2. Declare const PI = 3.14; Try reassign
// // // //     // const PI=3.14;
// // // //     // PI=3.14159; //TypeError: Assignment to constant variable.
// // // //     // console.log(PI);

// // // // // 3. typeof undefined ;
// // //    console.log(typeof undefined);//undefined

// // // // // 4. typeof null ?
// // //    console.log(typeof null); //object

// // // // // 5. Convert 123 to "123" using String()
// // // let num=123;
// // // let str=String(num)
// // // console.log(str ,typeof str);

// // // // // 6. parseInt("15.5") ?

// // // console.log(parseInt("15.5"));//15

// // // // // 7. Boolean(0) ?
// // //      console.log(Boolean(0));//false

// // // // // 8. Number("abc") ?
// // //     console.log(Number("abc"));//NaN

// // // // // 9. let y; Print typeof y
// // //      let y;
// // //      console.log(typeof y);//undefined

// // // // // 10. typeof true ?
// // //      console.log(typeof true);//boolean

// // // // // 11. typeof NaN ?
// // //    console.log(typeof NaN); //number

// // // // // 12. "5" + 2 ?

// // // console.log("5"+2);//"52"

// // // // // 13. "5" - 2 ?
// // // console.log("5"-2);//3

// // // // // 14. "5" * 2 ?
// // // console.log("5"*2);//10

// // // // // 15. "5" / 0 ?
// // // console.log("5"/0);//Infinity

// // ### 🔶 Intermediate (20 Q)

// // 16. let x = "10"; +x ?
//     //    let x=+"10";
//     //    console.log(x,typeof x);//10 ,number

// // 17. !!0 ?//
// // console.log(!!0);//false

// // 18. let a = 5; let b = a; Change b, what about a?
// //    let a=5;
// //    let b=a;
// //    b=10;
// //    console.log(a);//5 because it is a primitive types ,so its stored by value not refernce

// // 19. const obj = {}; obj.name = "Tejas"; Allowed?//yes
//     // const obj={};
//     // obj.name="Tejas";
//     // console.log(obj);

// // 20. let num = 10 + "20"; typeof num?
//     //  let num=10+"20";
//     //  console.log(num,typeof num);//1020 ,string

// // 21. let x = 5 > 3; typeof x?
//      let x=5>3;
//      console.log(x,typeof x);//true,boolean

// // 22. typeof typeof 1 ?
//      console.log(typeof 1);//number
//      console.log(typeof typeof 1);//string

// // 23. null == undefined ?
//    console.log(null==undefined);//true

// // 24. null === undefined ?
//  console.log(null===undefined);//false

// // 25. let x = "10" - "2"; typeof x?
//    let x="10"-"2";
//    console.log(x,typeof x);// 8 number

// // // 26. "10" + null ?
// console.log("10"+null);//10null (concatination due to +operator)

// // // 27. "10" - null ?
//     console.log("10"-null);//10

// // 28. "10" + true ?
//     console.log("10"+true);//10true

// // // 29. "10" - true ?
//     console.log("10"-true);//"9"

// // 30. Boolean("false") ?
//     console.log(Boolean("false"));//true

// // // 31. Boolean("") ?
//      console.log(Boolean(""));//false

// // 32. Boolean("0") ?
// console.log(Boolean("0"));//true

// // 33. Boolean(0) ?
//    console.log(Boolean(0));//false

// // // 34. NaN === NaN ?
// console.log(NaN===NaN);//false

// // 35. isNaN("abc") ?
//    console.log(isNaN("abc"));//true

// // ### 🔴 Tricky Logic (15 Q)

// // 36. let a = 1 + "2" + 3; result?
//  let a=1+"2"+3;
//  console.log(a);//"123"

// // 37. let b = 1 + 2 + "3"; result?
//   let b=1+2+"3";
//   console.log(b);//"33"

// // 38. let x = null + 1; result?
//  let x=null+1;
//  console.log(x);//1

// // 39. let y = undefined + 1; result?
// let y=undefined+1;
// console.log(y);//NaN

// // 40. let z = [] + {}; result?
// let z = [] + {};
// console.log(z);//[object object]

// // 41. let z = {} + []; result?
// let z = {}+[];
// console.log(z);//[object object]

// // 42. typeof [] ?
//    console.log(typeof []);//object

// // 43. typeof {} ?
//    console.log(typeof {});//object

// // 44. [] == false ?
//    console.log([]==false);//true

// // 45. {} == false ?
//  console.log({}==false);//false

// // 46. [] == ![] ?
//  console.log([]==![]);//true

// // 47. console.log([] + []); result?

// console.log([]+[]);//empty string

// // 48. console.log([] + {}); result?
//    console.log([]+{});//[object object]

// // 49. console.log({} + []); result?
//  console.log({}+[]);//0

// // 50. console.log(typeof (typeof null));
// console.log(typeof (typeof null));//string
// console.log(typeof null);//object
