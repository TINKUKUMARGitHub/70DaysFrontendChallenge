
// ### **4. Practice Questions (40 Clear Questions)**

// #### **Basic Level**

// 1. Declare a string `"JavaScript"` and print its length.
//   let str="JavaScript";
//   console.log(str.length);

// 2. Store your name in a variable and print it in uppercase.
//   let str="JavaScript";
//   console.log(str.toUpperCase());

// 3. Store `"HELLO"` in a variable and print it in lowercase.
// let str="HELLO";
// console.log(str.toLowerCase());

// 4. Remove extra spaces from `"   Welcome to JS   "` using `trim()`.
// let str="   Welcome to JS   ";
// console.log(str.trim());

// 5. Check if `"Frontend Developer"` contains `"Developer"`.
// let str="Frontend Developer";
// console.log(str.includes("Developer"));

// 6. Find the index of `"JS"` in `"I love JS and React"`.
// let str="JS in I love JS and React";
// console.log(str.indexOf("JS"));

// 7. Get the last index of `"o"` in `"Hello World"`.
// let str="Hello World";
// console.log(str.lastIndexOf("o"));

// 8. Access the first character of `"OpenAI"`.
// let str="OpenAI";
// console.log(str[0]);

// 9. Access the last character of `"OpenAI"`.
// let str="OpenAI";
// console.log(str[str.length-1]);

// 10. Use template literals to print: `"I am learning HTML, CSS, and JavaScript."`
// let str=`I am learning HTML, CSS, and JavaScript.`
// console.log(str);

// #### **Intermediate Level**

// 11. Given: `let str = "Learn JavaScript";` — convert the first word to uppercase.
// let str = "Learn JavaScript";
// let words=str.split(" ");
// words[0]=words[0].toUpperCase();
// let result=words.join(" ");
// console.log(result);


// 12. Given: `"   Coding is fun   "` — remove leading spaces only.
// let str="   Coding is fun   ";
// console.log(str.trimStart());

// 13. Given: `"   Coding is fun   "` — remove trailing spaces only.
// let str="   Coding is fun   ";
// console.log(str.trimEnd());

// 14. Check if `"I love coding"` contains `"python"`.
// let str="I love coding";
// console.log(str.includes("python"));

// 15. Find the index of `"Script"` in `"JavaScript"`.
// let str="JavaScript";
// console.log(str.indexOf("Script"));

// 16. Get the middle character of `"Pinku"`.

// let str="Pinku";
// let middleChar=Math.floor(str.length/2);
// let character=str.charAt(middleChar);
// console.log(character);


// 17. Concatenate `"Hello"` and `"World"` using template literals.

// let str1="Hello";
// let str2="World";
// let str=`First Program is ${str1} ${str2}`;
// console.log(str);

// 18. Count how many times `"o"` appears in `"Javascript is cool"`.

// let str = "Javascript is cool";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "o") {
//         count++;
//     }
// }
// console.log("Total count of 'O' is :", count);

// 19. Print `"JavaScript"` without the first and last character.

// let str="JavaScript";
// let result="";
// for(let i=1;i<str.length-1;i++){
//    result+=str[i];
    
// }

// console.log(result);

// let str="JavaScript";
// let result=str.slice(1,-1);
// console.log(result);


// 20. Replace spaces with `"-"` in `"JavaScript is awesome"`.
// let str="JavaScript is awesome";
// let result=str.split(" ").join("-");
// console.log(result);


// #### **Advanced Level**

// 21. Given: `"A quick brown fox"` — check if it starts with `"A quick"`.
// let str="A quick brown fox";
// console.log(str.startsWith("A quick"));
// OR 
// console.log(str.slice(0,7)==="A quick");


// 22. Given: `"Frontend Mastery"` — check if it ends with `"Mastery"`.
// let str="Frontend Mastery";
// console.log(str.endsWith("Mastery"));
// console.log(str.slice(9)==="Mastery");


// 23. Create a new string by reversing `"JavaScript"`.
// let str="JavaScript";
// let reversingStr=str.split("").reverse().join("");
// console.log(reversingStr);

// 24. Count vowels in `"Programming"`.

// let vowels="aeiou";
// let count=0;
// let str="Programming".toLowerCase();
// for(let ch of str){
//     if(vowels.includes(ch)) count++;
// }
// console.log(count);

// str=str.toLocaleLowerCase();
// let vowels=["a","e","i","o","u"];
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         count++;
//     }
// }
// console.log(count);


// 25. Check if a given string is a palindrome (e.g., `"madam"`).

// let str="madam";
// let revStr=str.split("").reverse().join("");
// if(str===revStr){
//     console.log(`${str} is a palindrome`);
    
// }else{
//         console.log(`${str} is not a palindrome`);
// }


// 26. Extract the word `"JavaScript"` from `"I am learning JavaScript in 2025"`.
// let str="JavaScript from I am learning JavaScript in 2025";
// let words=str.split(" ");
// let target=words.find((word)=>word==="JavaScript");
// console.log(target);


// 27. Replace `"2024"` with `"2025"` in `"Happy New Year 2024"`.
// let str="Happy New Year 2024";
// let replaced=str.replace(2024,2025);
// console.log(replaced);

// let newStr=str.split(" ");
// newStr[3]=2025;
// console.log(newStr.join(" "));




// 28. Split `"HTML CSS JavaScript"` into an array.
// let str="HTML CSS JavaScript";
// let newStr=str.split(" ");
// console.log(newStr);

// 29. Join an array `["HTML", "CSS", "JS"]` into a string separated by `" | "`.
// let str=["HTML", "CSS", "JS"];
// let newStr=str.join("|");
// console.log(newStr);

// 30. Capitalize the first letter of `"developer"`.
// let str="developer";
// let result=str[0].toUpperCase()+str.slice(1);
// console.log(result);


  
// #### **Logic Building**

// 31. Find the longest word in `"I am learning JavaScript daily"`.
//   let str="I am learning JavaScript daily";
//   let output=str.split(" ").reduce((longest,word)=>word.length>longest.length?word:longest);
//   console.log(output);
  
//   OR 
//   let splitStr=str.split(" ");
//   let lword=splitStr[0];
//   for(let i=0;i<splitStr.length;i++){
//     if(splitStr[i].length>lword.length){
//      lword=splitStr[i];
//     }
//   }
//   console.log(lword);
  
  
// 32. Remove all vowels from `"JavaScript is powerful"`.
// let str="JavaScript is powerful";
// let vowels="aeiou";
// let res=str.split("").filter((ch)=>!vowels.includes(ch)).join("");
// console.log(res);

// OR 
// str=str.toLowerCase();
// let vowels="aeiou";
// let res="";
// let vowelsRemove=str.split("");
// for(let i=0;i<vowelsRemove.length;i++){
//     if(!vowels.includes(vowelsRemove[i])){
//      res+=vowelsRemove[i]
//     }
// }
// console.log(res);



// 33. Find the number of words in `"I love frontend development"`.
// let str="I love frontend development";
// let output=str.split(" ").length;
// console.log(output);

// 34. Replace all `"a"` with `"@"` in `"banana"`.
// let str="banana";
// let res=str.replaceAll("a","@");
// console.log(res);

// 35. Check if `"Hello"` and `"hello"` are equal ignoring case.
// let str1="Hello";
// let str2="hello";
// console.log(str1.toLowerCase()===str2.toLocaleLowerCase());

// 36. Create a username from a full name by making it lowercase and removing spaces.
// let username="Raj Soni";
// let res=username.toLowerCase().split(" ").join("");
// console.log(res);

// 37. Print a substring from `"JavaScript"` starting from index 4.
// let str="JavaScript";
// let newStr=str.slice(4);
// console.log(newStr);

// 38. Count consonants in `"Frontend"`.
// let str="Frontend";
// str=str.toLowerCase();
// let vowels="aeiou";

// let res=str.split("");
// let count=0;
// for(let i=0;i<res.length;i++){
//     if(!vowels.includes(res[i])){
//        count++;
//     }
// }
// console.log(count);

// 39. Check if `"OpenAI"` contains only alphabets.
// let str = "OpenAI";
// let isAlpha = true;

// for (let ch of str) {
//     if (!(ch >= 'A' && ch <= 'Z') && !(ch >= 'a' && ch <= 'z')) {
//         isAlpha = false;
//         break;
//     }
// }
// console.log(isAlpha);

// 40. Repeat `"JS"` 5 times using `repeat()`.
// let strings="JS";
// console.log(strings.repeat(5));


// ---

// ### **5. Mini Project – Username Generator**

// **Description:**
// Take **full name** input from user, convert it to lowercase, remove spaces, and append a random number (1–100) to create a unique username.

// Example:

// ```
// Input: "Tejas Kumar"
// Output: tejaskumar57

// let input=(prompt("Enter FullName")).toLowerCase().split(" ").join("");
// let randomNum=Math.floor(Math.random()*100)+1;
// let res=input.concat(randomNum);
// console.log(res);




