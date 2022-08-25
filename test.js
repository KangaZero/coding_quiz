var startButton = document.querySelector(".startbutton");
var timerEl = document.querySelector(".timer");
var scoreEl = document.querySelector('.score');
var quizPage = document.querySelector("#quiz_container");
var highScorePage = document.querySelector('.highscore_container');
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("btn");
var startPage = document.querySelector("#start_container");
var resultEl = document.querySelector(".result");
var bodyEl = document.querySelector("body");
var rootEl = document.querySelector("root");
var questionCounterEl = document.querySelector(".question_counter")

var score = 0;
var timerCount = 5;
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
    startPage.classList.add('hidden');
    quizPage.classList.remove('hidden');

}

startButton.addEventListener('click', startGame);




// var startButton = document.querySelector('#start-btn');
// var questionContainerEL = document.querySelector ("#question-container");
// var questionEl = document.querySelector('#question')
// var answerbuttonEl = document.querySelector('#answer-button')
// var randomQuestion, currentQuestionIndex

// var questions = [
//     {
//         question: "What is 2 + 2",
//         answers: [
//             {text: '4', correct: true},
//             {text: '22', correct: false},
//         ]
//     }
// ]


// function startGame(){
//     console.log("Started");
//     startButton.classList.add('hidden');
//     randomQuestion = questions.[Math.floor(Math.random() * questions.length)];
//     currentQuestionIndex = 0;
//     questionContainerEL.classList.remove('hidden');
//     getQuestion();
    

// }

// function getQuestion (){
// showQuestion(randomQuestion[currentQuestionIndex])
// } 

// function showQuestion(question){
//     questionEl.textContent = question.question
// }


// function selectedAnswer(){

// }











// startButton.addEventListener('click', startGame);