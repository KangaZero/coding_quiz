var startButton = document.querySelector(".startbutton");
var timerEl = document.querySelector(".timer");
var scoreBoardEl= document.querySelector('#scoreboard');
var scoreEl = document.querySelector('.score');
var quizPage = document.querySelector("#quiz_container");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answer-container");
var startPage = document.querySelector("#start_container");
var questionCounterEl = document.querySelector(".question_counter")
var resultEl = document.querySelector(".result");
var bodyEl = document.querySelector("body");
var rootEl = document.querySelector("root");
var saveForm = document.querySelector(".save")
var nameInput = document.querySelector("#initials");
var saveButton = document.querySelector("#save-score")

var score = 0;
var timerCount = 60;
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
    { question: "What is the best coding language?",
    answers: [
        {option: "Javascript", answer: true},
        {option: "C++", answer: true},
        {option: "Ruby", answer: true},
        {option: "Python", answer: true},
        ]
    },
    { question: "What is Obama's last name?",
  answers: [
        {option: "Terry", answer: false},
        {option: "Yamada", answer: false},
        {option: "Muhammad", answer: false},
        {option: "Obama", answer: true},
        ]
    },
    { question: "What's 9 + 10?",
    answers: [
        {option: "19", answer: false},
        {option: "21", answer: true},
        {option: "910", answer: false},
        {option: "nineteen", answer: false},
        ]
    },
    { question: "What was the movies of all time?",
    answers: [
        {option: "Shrek: Homecoming", answer: false},
        {option: "Fat Albert", answer: false},
        {option: "Morbius", answer: true},
        {option: "The Bee Movie", answer: false},
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
        GameOver();
    } else if (questionCounter >= 5){
        clearInterval(timer);
        endGame();
    }
}, 1000)
}


function getNewQuestion(){
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    //currentQuestion = questions[i]
    currentQuestion = availableQuestions[questionIndex];
    //gets rid of current question in avaiable questions to avoid repeat.
    availableQuestions.splice(questionIndex,1);
    questionEl.innerText = currentQuestion['question'];
    answerEl.innerText = ' ';
    //took from reference code
     for (var i = 0; i < currentQuestion.answers.length; i++){
        var button = document.createElement('button');
            button.innerText = currentQuestion.answers[i].option;
            button.classList.add('btn'); 
            button.setAttribute('value', currentQuestion.answers[i].answer);
            button.addEventListener('click', selectAnswer);
            button.setAttribute("style", "margin: auto; position: relative; left: 50%;");
            answerEl.appendChild(button); 
     }
    
}

//indicates whether option clicked is right or wrong //working :) finally!
function selectAnswer(event){
    var selected = event.target.value;
    console.log("selected = ",selected); 

    if (selected == "true"){
        score++;
        resultEl.textContent = "That's right!";
        }
    else { 
        score --;
        timerCount-= 5;
        resultEl.textContent = "That's wrong!";
    }


    scoreEl.textContent = score;
    getNewQuestion();   
}
    
function save (){   
   saveForm.classList.remove("hidden");
   
//    saveForm.addEventListener("submit", function(event){
//     event.preventDefault();
//    }) 
   saveForm.addEventListener('submit', function(event){
        event.preventDefault();

        var savedData = {
            initials: nameInput.value,
            points: score,
        }

        localStorage.setItem("score", JSON.stringify(savedData)); 
        nameInput.value = " ";
    })
                  
}

    
 //Endgame functions
    //if questionCounter == 5(eg. all questions answered), game finishes
   function endGame (){
    quizPage.classList.add("hidden");
    var GoodEnd = document.createElement('h1');
    GoodEnd.textContent = "Congratulations! You finished the quiz!";
    GoodEnd.setAttribute('style', 'font-size: 10rem;');
    bodyEl.appendChild(GoodEnd);
    save();
    replay();
    viewHighScore();

   }
   
   //if timer runs out == lose
   function GameOver(){
        quizPage.classList.add('hidden');
        var BadEnd = document.createElement("h1");
        BadEnd.textContent = "Game Over!";
        BadEnd.setAttribute('style','font-size: 10rem;');
        bodyEl.appendChild(BadEnd);
        save();
        replay();
        viewHighScore();

 }

function replay(){
    var replayBtn = document.createElement('button');
    replayBtn.textContent = "Play Again";
    replayBtn.addEventListener("click", function(){
        //easy method
        location.reload();
        //errors here 
        //  clear();
        //  availableQuestions = [];
        //  startGame();
    });
    bodyEl.appendChild(replayBtn);
}

function viewHighScore(){
    var highScoreButton = document.createElement('button');
    highScoreButton.textContent = "View Highscores";
    highScoreButton.addEventListener("click", function(){
     window.location.href = "./highscore.html";
    }
   )
    bodyEl.appendChild(highScoreButton);
}

function clear (){
bodyEl.innerHTML = " ";
}

startButton.addEventListener("click", startGame);

