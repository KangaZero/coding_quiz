var startButton = document.querySelector('#start-btn');
var questionContainerEL = document.querySelector ("#question-container");
var questionEl = document.querySelector('#question')
var answerbuttonEl = document.querySelector('#answer-button')
var randomQuestion, currentQuestionIndex

var questions = [
    {
        question: "What is 2 + 2",
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
        ]
    }
]


function startGame(){
    console.log("Started");
    startButton.classList.add('hidden');
    randomQuestion = questions.[Math.floor(Math.random() * questions.length)];
    currentQuestionIndex = 0;
    questionContainerEL.classList.remove('hidden');
    getQuestion();
    

}

function getQuestion (){
showQuestion(randomQuestion[currentQuestionIndex])
} 

function showQuestion(question){
    questionEl.textContent = question.question
}


function selectedAnswer(){

}











startButton.addEventListener('click', startGame);