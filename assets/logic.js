//User clicks button to "Start Quiz"
//Event listener needed

//When button is clicked, the timer starts counting down and is displayed in the top right corner
//Event listener to start timer and display timer on event click
//setInterval function needed (timer)

//When button is clicked, the first question appears by using textContent to fill in blank div and using textContent to fill in blank buttons
//Event listener to display first question
//set up objects for each question and choices
//Set up 5 objects for all 5 questions (question, choiceArray (will store 4 choices), correctAnswer)
//Inside each of these objects, create an array for all choices for this question

//Once user selects answer to first question, the user is told if answer is right or wrong
//Event listener for each button that the user could select
//You can pass in the text in the button as an argument to the function created for the event listener
//If statement saying if user's selection matches "correctAnswer", then add point to score
//Else, decrease time by 15 seconds (15000 milliseconds)
//Time is the score in the end for the user

//When all questions are answered or the time reaches 0, game is over
//Display message "All done" and have text inputs for user to enter in their initials
//Store their initials and score to local storage

//Global variables - HTML recalls
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizContainer = document.querySelector("#quiz-container");
var quizQuestion = document.querySelector("#quizQuestion"); 
var quizAnswers = document.querySelector("#quizAnswers"); //where question goes
let btns = document.querySelectorAll('button');
var oneHTML = document.querySelector("#answerOne");
var twoHTML = document.querySelector("#answerTwo");
var threeHTML = document.querySelector("#answerThree");
var fourHTML = document.querySelector("#answerFour");
var correct = document.querySelector("#correct");
var submitScore = document.querySelector("#submit-score");
var initialsInput = document.querySelector("#initials");
var highscores = document.querySelector("#highscores");
var highscoresCount = document.querySelector("#highscore-count");


//also global variables that we'll use for the logic below like functions and if/else stmts
var score = 0;
// var isWin = false;
var timeLeft = 60;
var currentQuestion = null;

var questionONE = {
    question: 'Commonly used data types DO NOT include:',
    answer1: '1. strings',
    answer2: '2. booleans',
    answer3: '3. alerts',
    correctAnswer: '3. alerts',
    answer4: '4. numbers'
}

var questionTWO = {
    question: 'The condition in an if/else statement is enclosed within ___.',
    answer1: '1. quotes', 
    answer2: '2. curly brackets',
    correctAnswer: '2. curly brackets',
    answer3: '3. parentheses',
    answer4: '4. square brackets'
}

var questionTHREE = {
    question: 'What does HTML stand for?',
    answer1: '1. Hyper Trainer Marking Language',
    answer2: '2. Hyper Text Marketing Language',
    correctAnswer: '3. Hyper Text Markup Language',
    answer3: '3. Hyper Text Markup Language',
    answer4: '4. Hyper Text Markup Leveler'
}

var questionFOUR = {
    question: 'Inside which HTML element do we put the JavaScript?',
    answer1: '1. <scripting>',
    answer2: '2. <javascript>',
    answer3: '3. <js>',
    answer4: '4. <script>',
    correctAnswer: '4. <script>'
}

window.onload = function () {
    submitScore.style.display = 'none';
    oneHTML.style.display = 'none';
    twoHTML.style.display = 'none';
    threeHTML.style.display = 'none';
    fourHTML.style.display = 'none';
}

//Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


// The startGame function is called when the start button is clicked
function startGame() {
    currentQuestion = questionONE;
    oneHTML.style.display = 'inline';
    twoHTML.style.display = 'inline';
    threeHTML.style.display = 'inline';
    fourHTML.style.display = 'inline';
    renderQuestion();
    countdown();
  }

//The setTimer function starts and stops the timer 
function countdown() {
    
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerElement.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerElement.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerElement.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 1000);
  }

//Goes to first question
function renderQuestion() {
    startButton.style.visibility='hidden';
    quizAnswers.textContent=currentQuestion.question;
    oneHTML.textContent=currentQuestion.answer1;
    twoHTML.textContent=currentQuestion.answer2;
    threeHTML.textContent=currentQuestion.answer3;
    fourHTML.textContent=currentQuestion.answer4;
};

// User selects choice
for (i of btns) {
    if(i.textContent != "Start Quiz") {
    i.addEventListener('click', function() {
      console.log(this.textContent);
      var userAnswer = this.textContent;
      checkAnswer(userAnswer);
    });
    }
  }
    
function checkAnswer (userAnswer) {
    //if answer is correct
    if(userAnswer === currentQuestion.correctAnswer) {
        score++;
        console.log (score)
        correct.textContent = "Correct!"
        nextQuestion();
    }
    //if answer is wrong
    else {
        correct.textContent = "Wrong."
        timeLeft= timeLeft-5;
    }
};

function nextQuestion () {
    if (currentQuestion === questionONE) {
        currentQuestion = questionTWO;
        renderQuestion ();
    }
    else if (currentQuestion === questionTWO) {
        currentQuestion = questionTHREE;
        renderQuestion ();
    }
    else if (currentQuestion === questionTHREE) {
        currentQuestion = questionFOUR;
        renderQuestion();
    }
    else if (currentQuestion === questionFOUR) {
        endQuiz ();
    };
}

function endQuiz () {
    submitScore.style.display = 'inline';
    quizContainer.style.display = 'none';
    timerElement.style.display = 'none';
 };   

 function storeHighscores() {
    var initialsText = initialsInput.value.trim();
    
    // Return from function early if submitted initialsText is blank
    if (initialsText === "") {
      return;
    }

    var storedScores = JSON.parse(localStorage.getItem("highscores")) || [];
    var updateScores = {
      score: score,
      initials: initialsText
    }

    storedScores.push(updateScores);
    localStorage.setItem("highscores", JSON.stringify(storedScores));

 };

 submitScore.addEventListener("click", storeHighscores);