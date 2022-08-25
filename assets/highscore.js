var highScorePage = document.querySelector('.highscore_container');
var backToQuiz = document.querySelector('.return');

var highscoreList = document.createElement('ul');

   highscoreList.innerHTML ="<li>" + "Score: " + localStorage.getItem("score") + "</li>";
   highScorePage.appendChild(highscoreList);
   var scoreboard = document.createElement('p');
   scoreboard.textContent = save; 
   bodyEl.appendChild(scoreboard);

backToQuiz.addEventListener('click', function(){
    window.location.href = "./index.html";  
})