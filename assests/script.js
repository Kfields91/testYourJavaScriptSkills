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
var buttonD = document.querySelector("#buttonD");
// push
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
console.log("I'm the", buttonB);
console.log("I'm the", buttonC);
console.log("I'm the", buttonD);
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
      startQuiz();
    }
    countDownEl.textContent = timeOnClock + "seconds remaining!";
    console.log("time", timeOnClock);
  }, 1000);
}

nextButton.setAttribute("class", "hide");
console.log("bye ", nextButton);
var mode = "hide";

startButtonEl.addEventListener("click", function () {
  console.log("start button is clicked");
  questionScreen.setAttribute("class", "questionScreen");
  console.log("Am I present?", questionScreen);
  startScreenID.setAttribute("class", "hide");
  console.log("hiding", startScreenID);
  nextButton.setAttribute("class", "nextButtonAlive");
  console.log("Next", nextButton);

  function startQuiz() {}
  startingClock();
  var answerDisplay = question[0].answerChoices;
  buttonA.textContent = answerDisplay[0];
  buttonB.textContent = answerDisplay[1];
  buttonC.textContent = answerDisplay[2];
  buttonD.textContent = answerDisplay[3];
  console.log("I'm an answer", answerADisplay);
  questionScreen.setAttribute("class", "questionScreen");
  console.log("Am I present?", questionScreen);
  // for (x in answerChoices) {
  //   document.getElementById("ButtonA").innerHTML += answerChoices[0];
  //   // questionTitle[0].answerChoices[0];
  //   console.log("q1. answer A", answerChoices);
  // },
  // BEGIN HERE WHEN COME BACK
  // questionScreen.setAttribute("class", "questions");
  // console.log("question screen showing", questionScreen);

  // questionDiv.("class", "hide");
  // console.log("showing!", questionDiv);
});

nextButton.addEventListener("click", function () {
  console.log("next button is clicked");
  // the next set of questions are displayed
  function NextQuestion() {}
  // questionScreen.setAttribute("class", "questionScreen");
  // console.log("Am I present?", questionScreen);
});
console.log(" 1", NextQuestion);
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
