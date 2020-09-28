var startButtonEl = document.querySelector("#startButton");
// need help with my start button event listener
console.log("click", startButtonEl);

var nextButton = document.querySelector("#nextButton");
var countDownEl = document.querySelector("#timer");
var buttonAEl = document.querySelector(".buttonA");
var buttonBEl = document.querySelector(".buttonB");
var buttonCEl = document.querySelector(".buttonC");
var buttonDEl = document.querySelector(".buttonD");

console.log("buttons", nextButton);
console.log("buttons", countDownEl);
console.log("buttons", buttonAEl);
console.log("buttons", buttonBEl);
console.log("buttons", buttonCEl);
console.log("buttons", buttonDEl);

var questionTitle = [
  "create question here",
  "Here's another question",
  "another question",
  "last question",
];
console.log(questionTitle.length);

var multipleChoice = ["a", "b", "c", "d"];
var correctAnswer = ["a", "b", "c", "d"];
var aAnswers = ["", "", "", ""];
var bAnswers = ["hi", "", "", ""];
var cAnswers = ["", "", "", ""];
var dAnswers = ["", "", "", ""];

console.log(aAnswers);
console.log(bAnswers[0]);
console.log(cAnswers);
console.log(dAnswers);

quizDisplay = [
  questionTitle,
  aAnswers,
  bAnswers,
  cAnswers,
  dAnswers,
  correctAnswer,
];
console.log(quizDisplay);
console.log(Object);
var questionTitleAsks = questionTitle.length;
console.log(questionTitle[1]);

function startingClock() {
  var timeOnClock = 50;

  var timeInterval = setInterval(function () {
    countDownEl.textContent = timeOnClock + "seconds remaining!";
    if (((i = 0), i > timeOnClock.length)) {
      timeOnClock--;
    } else if (timeOnClock > 50) {
      clearInterval(timeInterval);
      goTime();
    }
    console.log("time", timeOnClock);
  }, 1000);
}
// timer is running but not backwards and not showing
function goTime() {
  var i = 0;
  console.log("start timer");
}
parseInt(startingClock);

//  hide next button only one with hide property?
startingClock();
// when start button is clicked
// hide start button, ptag,
// unhide next button, a,b,c,d buttons, h2
// append quizDisplay index's t0 buttons
// display question, a, b, c, & d
// answer is selected = right
// or wrong = - 5 seconds from the clock
// display correct answer
// store begin quiz into an array of answers
// usersAnswers = store elsewhere?
// function nextButton() {
//   console.log("nexted");
// display questions array[1]
// answer is selected
// right = correct
// wrong = - 5 seconds
// display correct answer
// store nextbutton var into same array as begin quiz?
// change to next index number [0]-[3]
// };
//  // declare next variable as a function
//   // will need something to end entire game
//   // and bring up the end page where you can enter your high score
//   // console.log("number" + setTimer)
// // function userAnswer() {
// //   console.lo(userAnswer);
