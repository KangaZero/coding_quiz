var highScorePage = document.querySelector('.highscore_container');
var backToQuiz = document.querySelector('.return');
var savedScore = document.querySelector('#saved-score');
var savedName = document.querySelector('#saved-name');
var highscoreList = document.createElement('ul');

function renderLastScore(){
    var lastScore = JSON.parse(localStorage.getItem("score"));
    if (lastScore !== null) {
        savedName.innerHTML = lastScore.initials;
        savedScore.innerHTML = lastScore.points;
        } else {
          return;

}}
renderLastScore();

backToQuiz.addEventListener('click', function(){
    window.location.href = "./index.html";  
})