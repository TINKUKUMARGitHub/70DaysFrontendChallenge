// console.log("DOM Manipulations!");

// ## ✅  💪 PRACTICE: 30 DOM Questions

// 1. Select a `<p>` tag and change its text.

// let para=document.getElementById("para");
// para.textContent="I am a Paragraph";

// 2. Change background color of a div using JS.
//  let division=document.getElementById("division");
//  division.style.backgroundColor="red"
//  division.style.color="white"


// 3. Add a new `<li>` to an existing `<ul>`.
// let lists=document.getElementById("list");
// let list=document.createElement("li");
// list.textContent="React";
// lists.appendChild(list)


// 4. Remove the last child of a list.

// let lists=document.getElementById("list");
// lists.removeChild(lists.lastElementChild);

// 5. Change an image’s `src` on button click.
//  let images=document.querySelector("img");
//  let btn=document.getElementById("btn");

//  btn.addEventListener("click",function(){
//  images.setAttribute("src","https://images.unsplash.com/photo-1755311901131-c0b8f91a21c0?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
//  })


// 6. Change font size of a paragraph.
// let paragraph=document.getElementById("para");
// paragraph.style.fontSize="28px";

// 7. Add multiple `<li>`s using loop.
// let list=document.querySelector("#list");

// for(let createList=1;createList<=10;createList++){
//     let createList=document.createElement("li");
//     createList.textContent="apple"
//     list.appendChild(createList)

// }
// 8. Create a button that hides a paragraph.
// 9. Create a button that shows a hidden div.

// let para = document.querySelector("#para");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//     if (para.style.display === "none") {  //toggle
//         para.style.display = "block"
//     } else {
//         para.style.display = "none"
//     }
// })


// 10. Toggle between two classes on click.

// let heading = document.querySelector("#heading1");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//     if (heading.classList.contains("addStle")) {
//         heading.classList.remove("addStle");
//         heading.classList.add("addStles")
//     } else {
//         heading.classList.remove("addStles")
//         heading.classList.add("addStle")
//     }
// })

// btn.addEventListener("click",function(){
//   heading.classList.toggle("addStle")
// })

// 11. Change input placeholder text.
// let btn=document.querySelector("button");
// let input=document.getElementById("inputs");
// btn.addEventListener("click",()=>{
//     input.placeholder="first name"
// })


// 12. Print input value in console on submit.
// let btn=document.querySelector("button");
// let input=document.getElementById("inputs");

// btn.addEventListener("click",()=>{
//     input.value="shankar"
//    console.log(input.value);

// })

// 13. Count characters in a text input.
// let inputs=document.querySelector("#inputs");
// console.log(inputs.value.length);

// 14. Disable a button after 1 click.

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.disabled=true;
// })

// 15. Change button text after clicking.
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.textContent="You Clicked Me!"
// })

// 16. Add a border to an element.
// let para=document.querySelector("#para");
// para.style.border="2px solid black"

// 17. Remove all children of a list.
// let list=document.querySelector("#list");
// list.innerHTML="";

// 18. Clone a node and add it.
// let heading1=document.querySelector("h1");
// let clone=heading1.cloneNode(true);
// document.body.append(clone)


// 19. Append multiple paragraphs at once.

// for(let i=1;i<=5;i++){
//    let para=document.createElement("p");
//    para.textContent="para"+i;

//    document.body.append(para)
// };

// 20. Add inline style via JS.

// let heading=document.querySelector("h2");
// heading.style.backgroundColor="black";
// heading.style.color="white";

// 21. Highlight all `<p>` tags with yellow.

// let allPara=document.querySelectorAll(".container p");
// allPara.forEach((para)=>{
//     para.style.backgroundColor="yellow"
// })


// 22. Add mouseover event to change color.
// let btn=document.querySelector("button");
// btn.addEventListener("mouseover",function(){
//     btn.style.color="red";
// })

// btn.addEventListener("mouseout",function(){
//     btn.style.color="black";
// })

// 23. Double-click event to change text.

// let btn=document.querySelector("button");
//  btn.addEventListener("dblclick",function(){
//     btn.textContent="You doubled click Me!"
//  })

// 24. Print which key is pressed in input.

// let inputs = document.querySelector("#inputs");
// let outputs = document.querySelector("#outputs");
// inputs.addEventListener("keydown", function (event) {

//     let keyPressed = event.key;
//     let para = document.createElement("p")
//     para.textContent = "You Pressed: " + keyPressed;
//     outputs.append(para);
// })

// 25. Create a counter with + and – buttons.

// let para = document.querySelector("#para");
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let count = 0;
// btn1.addEventListener("click", function () {
//     count++;
//     para.textContent = count
// })

// btn2.addEventListener("click", function () {
//     count--;
//     para.textContent = count;
// })

// 26. Show live clock on screen.

// let para = document.getElementById("para");
// function showTime() {
//     let liveTime = new Date().toLocaleTimeString();
//     para.textContent = liveTime;
// }
// setInterval(showTime, 1000);


// 27. Create dropdown, log selected value.

// let options = document.querySelector("#opt");
// options.addEventListener("change", function () {
//     console.log(options.value);
// })

// 28. Change page background on key press.

// let backgroundSelect = document.body;
// backgroundSelect.addEventListener("keydown", function (event) {
//     if (event.key === "r") {
//         backgroundSelect.style.backgroundColor = "red";
//     } else if (event.key === "g") {
//         backgroundSelect.style.backgroundColor = "green"
//     } else if (event.key === "b") {
//         backgroundSelect.style.backgroundColor = "blue"
//     } else {
//         backgroundSelect.style.backgroundColor = "pink"
//     }
// })


// 29. Build image gallery (prev/next buttons).
// let galleryImg = document.querySelector("#galleryImg");
// let prevBtn = document.querySelector("#prevBtn");
// let nextBtn = document.querySelector("#nextBtn");

// // Array of images
// let images = [
//   "https://picsum.photos/id/237/400/250",
//   "https://picsum.photos/id/238/400/250",
//   "https://picsum.photos/id/239/400/250",
//   "https://picsum.photos/id/240/400/250"
// ];

// let index = 0; // current image index

// // Show next image
// nextBtn.addEventListener("click", function() {
//   index++;
//   if (index >= images.length) {
//     index = 0; // restart from first image
//   }
//   galleryImg.src = images[index];
// });

// // Show previous image
// prevBtn.addEventListener("click", function() {
//   index--;
//   if (index < 0) {
//     index = images.length - 1; // go to last image
//   }
//   galleryImg.src = images[index];
// });

// 30. Create "Read More / Read Less" toggle.

// let para1 = document.querySelector("#para1");
// let para2 = document.querySelector("#para2");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//     if (para2.style.display === "none") {
//         para2.style.display = "block";
//         btn.textContent = "read less"
//     } else {
//         para2.style.display = "none";
//         btn.textContent = "read more"
//     }
// });

// ## ✅ 4. Mini Project – 💻 To-Do List App

// ### Features:

// * Add new tasks.
// * Mark task as completed.
// * Delete tasks.

// ```html
// <input id="task" placeholder="Enter task">
// <button onclick="addTask()">Add</button>
// <ul id="tasks"></ul>

// <script>
// function addTask(){
//   let taskVal = document.getElementById("task").value;
//   if(taskVal === "") return;

//   let li = document.createElement("li");
//   li.innerText = taskVal;

//   li.addEventListener("click", () => li.classList.toggle("done"));

//   let del = document.createElement("button");
//   del.innerText = "❌";
//   del.onclick = () => li.remove();

//   li.appendChild(del);
//   document.getElementById("tasks").appendChild(li);
//   document.getElementById("task").value = "";
// }
// </script>

// <style>
// .done { text-decoration: line-through; }
// </style>

