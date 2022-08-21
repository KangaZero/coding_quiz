var question = document.querySelector('#question');
var choices = Array.from(document.querySelector('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = []

var questions = [
    {
        question: "What's chicken?",
        choice1: 'sds',
        choice2: 'sdsd',
        choice3: 'chicken',
        choice4: 'leles',
        answer:2,
    },
    {
        question: "What's chicken?",
        choice1: 'sds',
        choice2: 'sdsd',
        choice3: 'chicken',
        choice4: 'leles',
        answer:2,
    },
    {
        question: "What's chicken?",
        choice1: 'sds',
        choice2: 'sdsd',
        choice3: 'chicken',
        choice4: 'leles',
        answer:2,
    },
    {
        question: "What's chicken?",
        choice1: 'sds',
        choice2: 'sdsd',
        choice3: 'chicken',
        choice4: 'leles',
        answer:2,
    },
    {
        question: "What's chicken?",
        choice1: 'sds',
        choice2: 'sdsd',
        choice3: 'chicken',
        choice4: 'leles',
        answer:2,
    }
]

var SCORE_POINTS = 100;
var MAX_QUESTIONS = 5;

function startGame (){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();

}

function getNewQuestion(){
 if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    localStorage.setItem('mostRecentScore', score);

    return window.location.assign("/end.html")
 }

 questionCounter++
 progressText.innerText = "Question ${questionCounter} of $(MAX_QUESTIONS}"
 progressBarFull.style.width = "${(questionCounter/MAX_QUESTIONS) * 100}%"

 var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
 currentQuestion = availableQuestions[questionsIndex];
 question.innerText = currentQuestion.question;

 choices.forEach(choice => {
    var number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number]
 })

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
}

choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) {
            return acceptingAnswers =false;
            var selectedChoice =e.target;
            var selectedAnswer = selectedChoice.dataset('number');

            var classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
            'incorrect';

            if(classToApply === 'correct'){
                incrementScore(SCORE_POINTS)
            }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion()
            }, 1000)
    }})})


    incrementScore = num => {
        score += num;
        scoreText.innerText = score
    }

    startGame();