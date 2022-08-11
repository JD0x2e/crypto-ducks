
// function getAge () {
//   let age = prompt("What age are you?");
//   let messages;

//   if (age >= 18) {
//     messages = "You're an adult!"
//   }
//   else if (age < 13) {
//     messages = "You're a child!"
//   }
//   else {
//     messages = "You're a teenager!"
//   }
//   return document.write(messages);
// }



// function getNumber() {
//   let favNumber = prompt("What is your favourite number?");
//   let number;

//   if (favNumber == 0) {
//       number = "That's a rubbish number!"
//   } else if (favNumber == 1) {
//       number = "That's still a rubbish number!"
//   } else {
//       number = " Atleast it's better than those numbers!"
//   }
//   return document.write(number);
// }


// function getSpeedLimit() {
//   let speedLimit = prompt("What speed are you going?");
//   let warning;

//   if (speedLimit < 40){
//     warning = "You need to speed up!"
//   } 
//   else if(speedLimit > 60){ 
//     warning = "You are speeding!"
//   }
//   else {
//     warning = "You are driving fine!"
//   }
//   return document.write(warning);
// } 


// function getMood() {
//   let mood = prompt("What mood are you in? (happy or sad)");
//   let moodMessage;

//   if (mood === "happy") {
//     moodMessage = "I'm pleased you're happy!";
//   }
//   else if (mood === "sad") {
//     moodMessage = "Maybe you'll feel better tomorrow!";
//   }
//   else {
//     moodMessage = "... I don't understand how you're feeling";
//   }
//    return document.write(" You're feeling " + mood + ", " + moodMessage + ", ");
// }


function rating() {
  let output = "";
  let rating = prompt("Please rate my questions out of 5");

  for (let i = 0; i < rating; i++) {
    output += "<img src='/images/duck-01.png' alt='Image of duck' class='duck'/>";
  }
  return document.write(output);
}



// function speedLimit() {
//   let speedLimit = 900;
//   let ticket = "";

//   while (speedLimit > 60) {
//     speedLimit = prompt("What speed are you going?")
  

//     if (speedLimit > 60) {
//     ticket = "<img src='/images/speeding-ticket.jpeg' alt='Speeding ticket' class='speedingticket'/>";
//     alert("You're going to get a ticket!")
//     }
//   }
//   alert("You are driving fine!")
//   return document.write(ticket);
// }


