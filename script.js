var startButtonEl = document.querySelector("#startButton");
var nextButton = document.querySelector("#nextButton");
var countDownEl = document.querySelector("#timer");
var questionScreenDiv = document.querySelector("#question");
var questionTitleH2 = document.querySelector("#questionTitle");
var answerChoicesDiv = document.querySelector("#answerChoices");
var correctAnswerDiv = document.querySelector("#correctAnswer");
var pTag = document.querySelectorAll(".pTag");
var endPageDiv = document.querySelector("#endPage");
var startScreenID = document.querySelector("#startScreen");
var questionScreen = document.querySelector("#questionScreen");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonA = document.querySelector("#buttonD");

console.log("start", startButtonEl);
console.log("buttons", nextButton);
console.log("buttons", countDownEl);
// console.log("questionArrHTML", questionDiv);
console.log("questionTitles", questionTitleH2);
console.log("answer choices", answerChoicesDiv);
console.log("correctAnswer", correctAnswerDiv);
console.log("ptag", pTag);
console.log("startscreen", startScreenID);
console.log("questions", questionScreen);
console.log("end game", endPageDiv);
console.log("I'm the", buttonA);

// Don't know if I need this
// here just in case
// try applying to this div if cannot get others to work properly.
// var questionDiv = [questionTitleH2, answerChoicesDiv, correctAnswerDiv];
// console.log(questionDiv);
// questionScreenDiv.textContent = "";
console.log("type", Object);
console.log("I've got a question here!", questionTitle[1]);

function startingClock() {
  var timeOnClock = 50;
  timeOnClock--;
  var timeInterval = setInterval(function () {
    if (((i = 0), i > timeOnClock.length)) {
    } else {
      timeOnClock > 50;
      clearInterval(timeInterval);
      // startQuiz();
    }
    countDownEl.textContent = timeOnClock + "seconds remaining!";
    console.log("time", timeOnClock);
  }, 1000);
}
var mode = "hide";
// var quiz = "questions";

startButtonEl.addEventListener("click", function () {
  console.log("start button is clicked");

  startScreenID.setAttribute("class", "hide");
  console.log("hiding", startScreenID);

  nextButton.classList.remove(".hide");
  console.log("Hello ", nextButton);
  // questionScreen.setAttribute("class", "questions");
  // console.log("question screen showing", questionScreen);

  // questionDiv.("class", "hide");
  // console.log("showing!", questionDiv);
  startingClock();
});

nextButton.addEventListener("click", function () {
  console.log("next button is clicked");

  questionScreen.classList.remove(".hide");
  console.log("Am I present?", questionScreen);

  
});
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
// // function userAnswer()
