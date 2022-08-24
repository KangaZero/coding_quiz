var startButton = document.querySelector(".startbutton");
var timerEl = document.querySelector(".timer");
var scoreBoardEl= document.querySelector('#scoreboard');
var scoreEl = document.querySelector('.score');
var quizPage = document.querySelector("#quiz_container");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("btn");
var startPage = document.querySelector("#start_container");
var resultEl = document.querySelector(".result");
var bodyEl = document.querySelector("body");
var rootEl = document.querySelector("root");

var score = 0;
var timerCount = 100;
var endTimerCount = 10;
timerEl.textContent = timerCount;

var questions = [
    { question: "What is 1 + 1?",
      answers: [
        {option: "2", answer: true},
        {option: "3", answer: false},
        {option: "4", answer: false},
        {option: "8", answer: false},
        ]
    },
    { question: "Test question No.2",
    answers: [
        {option: "2", answer: true},
        {option: "3", answer: false},
        {option: "4", answer: false},
        {option: "8", answer: false},
        ]
    },
    { question: "Test question No.3",
  answers: [
        {option: "2", answer: true},
        {option: "3", answer: false},
        {option: "4", answer: false},
        {option: "8", answer: false},
        ]
    },
    { question: "Test question No.4",
    answers: [
        {option: "2", answer: true},
        {option: "3", answer: false},
        {option: "4", answer: false},
        {option: "8", answer: false},
        ]
    },
    { question: "Test question No.5",
    answers: [
        {option: "2", answer: true},
        {option: "3", answer: false},
        {option: "4", answer: false},
        {option: "8", answer: false},
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
    scoreEl.textContent = score;
    availableQuestions = questions;
    startPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    scoreBoardEl.classList.remove('hidden');
    getNewQuestion();
    startTimer();
}

function startTimer(){
var timer = setInterval(function(){
    timerCount --;
    timerEl.textContent = timerCount;
    if (timerCount == 0){
        clearInterval(timer);
        endGame();
    }
}, 1000)
}

function endGame(){
    bodyEl.classList.add("hide");
    timerEl.textContent = endTimerCount
 var timer = setInterval(function(){
    endTimerCount --;
    if (endTimerCount == 0){
        clearInterval(timer);
        quizPage.classList.add('hidden');
        var endGameScreen = document.createElement("h1");
        endGameScreen.textContent = "Game Over!";
        endGameScreen.setAttribute('style','font-size: 10rem;');
        bodyEl.appendChild(endGameScreen);

    }
 })
    //window.location.href = "./highscore.html";
}
function getNewQuestion(){
    
    questionCounter ++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    //currentQuestion = questions[i]
    currentQuestion = availableQuestions[questionIndex];
    questionEl.innerText = currentQuestion['question'];
    // for (var i = 0; i < currentQuestion['answers'])
}

//answerEl.innerText = currentQuestion['answers'];
//    questions.answers.forEach(answers => {
//     const button = document.createElement('button');
//     button.innerText = answers.text;
//     button.classList.add('btn');
//     if (answers.correct){
//         button.dataset.correct = answers.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerEl.appendChild(button);



function selectAnswer(event){
    var selected = event.target;
    for (var i = 0; i < 5; i++ ){
    if (selected == questions.text.includes('correct = true')){
        score++;
        }
    else { 
        score--;
        timerCount-= 5;
    }
    getNewQuestion();   
}
    // var correct = selected.dataset.correct;
    // setStatusClass(document.body, correct);
    
}

function init(){

}

//currently causing error
//answerEl.addEventListener('click', selectAnswer);

startButton.addEventListener("click", startGame);

// document.addEventListener("click", function(event){
//     var click = event.click;

// })