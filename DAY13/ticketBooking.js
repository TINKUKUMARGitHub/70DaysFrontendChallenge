// let username = document.querySelector("#user");
// let age = document.querySelector("#age");
// let ticket = document.querySelector("#ticket");
// let ticketPricePara = document.querySelector("#ticketPricePara");

// let baseTicketPrice;
// let discountAmount;
// let finalPrice;

// // Create para once
// let para = document.createElement("p");
// document.body.append(para);

// // // Function to calculate ticket price
// // function calculateTicketPrice() {
// //   let userAge = Number(age.value);
// //   let ticketType = ticket.value; 

// //   // Determine base price using switch
// //   switch (ticketType) {
// //     case "general":
// //       baseTicketPrice = 1000;
// //       break;
// //     case "standard":
// //       baseTicketPrice = 1500;
// //       break;
// //     case "premium":
// //       baseTicketPrice = 2000;
// //       break;
// //     default:
// //       baseTicketPrice = 1000;
// //   }

// //   // Apply age-based discount
// //   if (userAge < 5) {
// //     discountAmount = baseTicketPrice; // Free ticket
// //   } else if (userAge <= 18) {
// //     discountAmount = baseTicketPrice * 0.1;
// //   } else if (userAge <= 55) {
// //     discountAmount = baseTicketPrice * 0.35;
// //   } else {
// //     discountAmount = baseTicketPrice * 0.8;
// //   }

// //   finalPrice = baseTicketPrice - discountAmount;

// //   ticketPricePara.textContent = `Base Ticket Price (${ticketType.toUpperCase()}): ₹${baseTicketPrice}`;
// //   para.textContent = `Final Ticket Price after Discount: ₹${finalPrice.toFixed(2)}`;
// // }

// // // Call function on age or ticket type change
// // age.addEventListener("input", calculateTicketPrice);
// // ticket.addEventListener("change", calculateTicketPrice);


// // let username = document.querySelector("#user");
// // let age = document.querySelector("#age");
// // let ticket = document.querySelector("#ticket");
// // let ticketPricePara = document.querySelector("#ticketPricePara");

// // let baseTicketPrice;
// // let discountAmount;
// // let finalPrice;

// // let para = document.createElement("p");
// // document.body.append(para);



// // Function to calculate price using IF-ELSE
// function calculateTicketPrice() {
//   let userAge = Number(age.value);
//   let ticketType = ticket.value;

//   // IF-ELSE for Ticket Type
//   if (ticketType === "general") {
//     baseTicketPrice = 1000;
//   } else if (ticketType === "standard") {
//     baseTicketPrice = 1500;
//   } else if (ticketType === "premium") {
//     baseTicketPrice = 2000;
//   } else {
//     baseTicketPrice = 1000; // Default
//   }

//   // Age-based Discount
//   if (userAge < 5) {
//     discountAmount = baseTicketPrice; // Free
//   } else if (userAge <= 18) {
//     discountAmount = baseTicketPrice * 0.1;
//   } else if (userAge <= 55) {
//     discountAmount = baseTicketPrice * 0.35;
//   } else {
//     discountAmount = baseTicketPrice * 0.8;
//   }

//   finalPrice = baseTicketPrice - discountAmount;

//   ticketPricePara.textContent = `Base Ticket Price (${ticketType.toUpperCase()}): ₹${baseTicketPrice}`;
//   para.textContent = `Final Ticket Price after Discount: ₹${finalPrice.toFixed(2)}`;
// }

// // Trigger on both input changes
// age.addEventListener("input", calculateTicketPrice);
// ticket.addEventListener("change", calculateTicketPrice);
