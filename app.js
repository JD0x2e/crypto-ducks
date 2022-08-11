
let age = prompt("What age are you?");

let messages;

if (age >= 18) {
  messages = "You're an adult!"
}
else if (age < 13) {
  messages = "You're a child!"
}
else {
  messages = "You're a teenager!"
}

let mood = prompt("What mood are you in? (happy or sad)");
let moodMessage;

if (mood === "happy") {
  moodMessage = "I'm pleased you're happy!";
}
else if (mood === "sad") {
  moodMessage = "Maybe you'll feel better tomorrow!";
}
else {
  moodMessage = "... I don't understand how you're feeling";
}

document.write(message + " You're feeling " + mood + ", " + moodMessage);

// let speedLimit = prompt("What speed are you going?");

// let message;

// if (speedLimit < 40){
//   message = "You need to speed up!"
// } 
// else if(speedLimit > 60){ 
//   message = "You are speeding!"
// }
// else {
//   message = "You are driving fine!"
// }
// document.write(message);