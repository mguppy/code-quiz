var highscores = document.querySelector("#highscores");
var highscoresCount = document.querySelector("#highscore-count");

window.onload = function () {
    renderHighscores();  
}

function renderHighscores() {
        var storedScores = JSON.parse(localStorage.getItem("highscores")) || [];
    
        //Writes all high scores as well as initials to a new line item
        for (var i=0; i <storedScores.length; i++) {

        var li = document.createElement("li");
        li.textContent = "Initials: " + storedScores[i].initials + " Score: " + storedScores[i].score;
        li.setAttribute("data-index", i);

        highscores.appendChild(li);
        }

        // Writes count
        highscoresCount.textContent = storedScores.length;
}