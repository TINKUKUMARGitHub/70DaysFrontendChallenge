// ### **3. Practice Questions (40 Clear Questions)**

// #### **Basic Level**

// 1. Extract `"Script"` from `"JavaScript"` using `slice()`.
// let str="JavaScript";
// console.log(str.slice(4));

// 2. Extract `"Java"` from `"JavaScript"` using `substring()`.
// let str="JavaScript";
// console.log(str.substring(0,4));

// 3. Replace `"dog"` with `"cat"` in `"The dog is barking"`.
// let str="The dog is barking";
// console.log(str.replace("dog","cat"));

// 4. Replace all `"apple"` with `"orange"` in `"apple apple apple"`.
// let str="apple apple apple";
// console.log(str.replaceAll("apple","orange"));

// 5. Split `"HTML CSS JS"` into an array of words.
// let str="HTML CSS JS";
// console.log(str.split(" "));

// 6. Repeat `"Hello"` 4 times.

// let str="Hello";
// console.log(str.repeat(4));

// 7. Check if `"I am learning JS"` starts with `"I am"`.
// let str="I am learning JS";
// console.log(str.startsWith("I am"));

// 8. Check if `"Frontend Development"` ends with `"Development"`.
// let str="Frontend Development";
// console.log(str.endsWith("Development"));

// 9. Pad `"7"` with `"0"` at the start until length becomes 4.
// let str="7";
// console.log(str.padStart(4,"0"));

// 10. Pad `"9"` with `"*"` at the end until length becomes 5.
// let str="9";
// console.log(str.padEnd(5,"*"));


// #### **Intermediate Level**

// 11. Get ASCII code of `"Z"`.
// let str="Z";
// console.log(str.charCodeAt(0));

// 12. Convert ASCII code `97` to a character.
// console.log(String.fromCharCode(97));

// 13. Extract last 3 characters from `"JavaScript"`.
// let str="JavaScript";
// console.log(str.slice(-3));

// 14. Extract first 5 characters from `"Programming"`.
// let str="Programming";
// console.log(str.slice(0,5));

// 15. Find index of `"code"` in `"I love to code daily"`.
// let str="I love to code daily";
// console.log(str.indexOf("code"));

// 16. Replace `"2023"` with `"2025"` in `"Happy 2023"`.
// let str="Happy 2023";
// console.log(str.replace(2023,2025));

// 17. Remove spaces from `"  spaced text  "` using `trim()`.
// let str="  spaced text  ";
// console.log(str.trim());

// 18. Count occurrences of `"o"` in `"Hello World"`.
// let str="Hello World";
// let count=0;
// for(let char of str){
//     if(char==="o") count++;
// }
// console.log(count);

// 19. Extract `"CSS"` from `"HTML CSS JavaScript"`.
// let str="HTML CSS JavaScript";
// console.log(str.slice(5,8));

// 20. Check if `"hello"` equals `"HELLO"` ignoring case.
//   let str="hello";
//   console.log(str.toLowerCase()==="HELLO".toLowerCase());
//   console.log(str.toUpperCase()==="HELLO".toUpperCase());

// #### **Advanced Level**

// 21. Reverse `"developer"` using string methods.
// let str="developer";
// console.log(str.split("").reverse().join(""));

// 22. Capitalize the first letter of each word in `"i am learning js"`.
// let str="i am learning js";
// let res=str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1))
// console.log(res.join(" "));

// or 
// let words=str.split(" ");
// for(let i=0;i<words.length;i++){
//    words[i]= words[i][0].toUpperCase()+words[i].slice(1)

// }
// console.log(words.join(" "));



// 23. Find longest word in `"Frontend development with JavaScript"`.
// let str = "Frontend development with JavaScript";
// let words = str.split(" ");
// let longestWord = words[0];
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//     }
// }
// console.log(longestWord);

// 24. Mask all but last 4 digits of `"9876543210"` (e.g., `******3210`).
// let str="9876543210";
// let masked=str.slice(-4).padStart(str.length,"*");
// console.log(masked);


// 25. Convert `"JavaScript is fun"` into `"FUN IS JAVASCRIPT"`.
// let str="JavaScript is fun";
// let res=str.split(" ").map(word=>word.toUpperCase()).reverse().join(" ");
// console.log(res);

// 26. Remove all digits from `"abc123xyz"`.
// let str="abc123xyz";
// let digits="0123456789";
// let res="";
// for(let i=0;i<str.length;i++){
//     if(!digits.includes(str[i])){
//       res+=str[i];
//     }
// }
// console.log(res);

// 27. Extract domain name from `"https://openai.com"`.
// let str="https://openai.com";
// let domainName=str.replace("https://","");
// console.log(domainName);

// 28. Replace vowels with `*` in `"Programming"`.

// let str="Programming";
// str=str.toLowerCase();
// let vowels="aeiou";
// let res="";
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//      res+="*";
//     }else{
//         res+=str[i]
//     }
// }
// console.log(res);


// 29. Split `"one-two-three"` using `"-"` and join with `"|"`.
// let str="one-two-three";
// console.log(str.split("-").join("|"));

// 30. Create acronym from `"Hyper Text Markup Language"` → `"HTML"`.
// let str="Hyper Text Markup Language";
// let res=str.split(" ").map(word=>word[0]).join("");
// console.log(res);


// #### **Logic Building**

// 31. Check if two strings are anagrams.
// function isAnagram(str1, str2) {
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();

//     // Remove spaces manually
//     let s1 = "", s2 = "";
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== " ") s1 += str1[i];
//     }
//     for (let i = 0; i < str2.length; i++) {
//         if (str2[i] !== " ") s2 += str2[i];
//     }

//     if (s1.length !== s2.length) return false;

//     // Convert str2 to array (to mark used chars)
//     let arr2 = s2.split("");

//     // For each char in s1, try to find in arr2
//     for (let i = 0; i < s1.length; i++) {
//         let found = false;
//         for (let j = 0; j < arr2.length; j++) {
//             if (s1[i] === arr2[j]) {
//                 arr2[j] = null; // mark as used
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) return false; // char not matched
//     }

//     return true; // all matched
// }

// // Examples
// console.log(isAnagram("listen", "silent"));       // true
// console.log(isAnagram("triangle", "integral"));   // true
// console.log(isAnagram("Dormitory", "Dirty room")); // true
// console.log(isAnagram("hello", "world"));         // false


// 32. Check if `"madam"` is palindrome using string methods.
// let str="madam".toLowerCase();
// let revStr=str.split("").reverse().join("");
// if(str===revStr){
// console.log(`${str} is palindrome`);
// }else{
//     console.log(`${str} is not  palindrome`);
// }


// 33. Count consonants in `"JavaScript"`.
// let str="JavaScript".toLowerCase();
// let vowels="aeiou";
// let count=0;
// for(let ch of str){
//     if(ch>="a"&& ch<="z" && !vowels.includes(ch)){
//        count++;
//     }
// }
// console.log(`Total consonants is : ${count}`);

// 34. Extract middle word from `"I love coding"`.
// let str="I love coding";
// let words=str.split(" ");
// let middleIndex=Math.floor(words.length/2);
// let res=words[middleIndex]
// console.log(res);

// 35. Convert `"snake_case"` to `"camelCase"`.
// let str = "snake_case";
// let words = str.split("_");
// let res = words[0];

// for (let i = 1; i < words.length; i++) {
//     res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }
// console.log(res);


// // 36. Count number of words in `"Learn JS every day"`.
// let str="Learn JS every day ";
// let word=str.trim().split(" ");
// let count=[];
// for(let w of word){
//  if(w!==""){
//     count.push(w);
//  }
// }
// console.log(count.length);

// or 
// let words=str.split(" ")
// console.log(words.length);





// // 37. Print only unique characters from `"programming"`.
// let str="programming".toLowerCase();
// let unique=[];
// for(let i=0;i<str.length;i++){
//     if(!unique.includes(str[i])){
//         unique.push(str[i])
//     }
// }
// console.log(unique.join(""));

// 38. Convert `"Hello"` to ASCII codes array.
// let str="Hello";
// let asciiCode=[];
// for(let i=0;i<str.length;i++){
//     asciiCode.push(str.charCodeAt(i))
// }
// console.log(asciiCode);

// 39. Convert ASCII codes array `[72,101,108,108,111]` to string `"Hello"`.
// 40. Remove extra spaces from `"I    love   JS"`.
// let str="I    love   JS";
// let words = str.trim().split(/\s+/);  // split by one or more spaces
// let result=words.join(" ");
// console.log(result);


// ---

// ### **4. Mini Project – Password Masker**

// **Description:**
// Take a phone number as input, mask all digits except the last 4, and return masked version.

// Example:
let no=9876543210;
let strNo=String(no);
let mask=strNo.slice(-4).padStart(strNo.length,"*");
console.log(mask);

// ```
// Input: 9876543210
// Output: ******3210
// ```

// ---