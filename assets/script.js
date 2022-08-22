var startButton = document.querySelector(".startbutton");
var timerEl = document.querySelector(".timer");
var quizPage = document.querySelector("#quiz_container");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("btn");
var startPage = document.querySelector("#start_container");

var score = 0;
var timerCount = 60;
timerEl.textContent = timerCount;

var questions = [
    { question: "Test question No.1",
      answers: [
        {text: 'answer', correct: true},
        {text: 'false', correct: false},
        {text: 'answer', correct: true},
        {text: 'false', correct: false},
      ]
    }
    ,{ question: "Test question No.2",
    answers: [
      {text: 'answer', correct: true},
      {text: 'false', correct: false},
      {text: 'answer', correct: true},
      {text: 'false', correct: false},
    ]
  },{ question: "Test question No.2",
  answers: [
    {text: 'answer', correct: true},
    {text: 'false', correct: false},
    {text: 'answer', correct: true},
    {text: 'false', correct: false},
  ]
},{ question: "Test question No.2",
answers: [
  {text: 'answer', correct: true},
  {text: 'false', correct: false},
  {text: 'answer', correct: true},
  {text: 'false', correct: false},
]
},{ question: "Test question No.2",
answers: [
  {text: 'answer', correct: true},
  {text: 'false', correct: false},
  {text: 'answer', correct: true},
  {text: 'false', correct: false},
]
}
]

var questionCounter = 0;
//currentQuestion = questions[questionIndex]
var currentQuestion = [];
//avaiableQuestion = questions
var availableQuestions = [];

function startGame(){
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    startPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    //create function
    getNewQuestion();
    //startTimer();
}

function startTimer(){
var timer = setInterval(function(){
    timerCount --;
    timerEl.textContent = timerCount;
    if (timerCount == 0){
        clearInterval(timer);
        //create endgame function
        endGame();
    }

}, 1000)
}

function endGame(){
    window.location.href = "./highscore.html";
}
function getNewQuestion(){
    
    questionCounter ++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    //currentQuestion = questions[i]
    currentQuestion = availableQuestions[questionIndex];
    questionEl.innerText = currentQuestion;

}

function wrongAnswer(){}

function rightAnswer(){}

function init(){

}

startButton.addEventListener("click", startGame);

// document.addEventListener("click", function(event){
//     var click = event.click;

// })