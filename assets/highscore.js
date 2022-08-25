var highScorePage = document.querySelector('.highscore_container');

var highscoreList = document.createElement('ul');

   highscoreList.innerHTML ="<li>" + "Score: " + localStorage.getItem("score") + "</li>";
   highScorePage.appendChild(highscoreList);
   var scoreboard = document.createElement('p');
   scoreboard.textContent = save; 
   bodyEl.appendChild(scoreboard);
