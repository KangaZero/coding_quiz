var startButton = document.querySelector(".startbutton");
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector("#question");


var timerCount = 60;
timerEl.textContent = timerCount;


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

function wrongAnswer(){}

function rightAnswer(){}

function init(){

}

startButton.addEventListener("click", startGame);

document.addEventListener("click", function(event){
    var click = event.click;

})