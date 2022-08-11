
let age = prompt("What age are you?");

let message;

if (age >= 18) {
  message = "You're an adult!"
}
else if (age < 13) {
  message = "You're a child!"
}
else {
  message = "You're a teenager!"
}

document.write(message);

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

let speedLimit = prompt("What speed are you going?");

let message;

if (speedLimit < 40){
  message = "You need to speed up!"
} 
else if(speedLimit > 60){ 
  message = "You are speeding!"
}
else {
  message = "You are driving fine!"
}
document.write(message);