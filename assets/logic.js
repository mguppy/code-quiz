//Global variables - HTML recalls
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizContainer = document.querySelector("#quiz-container");
var quizQuestion = document.querySelector("#quizQuestion"); //where question goes
var quizAnswers = document.querySelector("#quizAnswers"); //where answers go
var oneHTML = document.querySelector("#answerOne");
var twoHTML = document.querySelector("#answerTwo");
var threeHTML = document.querySelector("#answerThree");
var fourHTML = document.querySelector("#answerFour");

var test = document.querySelector("#test");
//also global variables that we'll use for the logic below like functions and if/else stmts
// var  = 0;
var score = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create questions and answers
//var questions = ['questionONE','questionTWO'];
//var answers = ['1. strings', '2. booleans', '3. alerts', '4. numbers'];

var questionONE = {
    question: 'Commonly used data types DO NOT include:',
    answer1: '1. strings',
    answer2: '2. booleans',
    correctAnswer: '3. alerts',
    answer4: '4. numbers'
}

var questionTWO = {
    question: 'The condition in an if/else statement is enclosed within ___.',
    answer1: '1. quotes', 
    correctAnswer: '2. curly brackets',
    answer3: '3. parentheses',
    answer4: '4. square brackets'
}

// Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);
startButton.addEventListener("click", function() {
    quizAnswers.textContent=questionONE.question;
    test.textContent=questionONE.answer1;
    oneHTML.textContent=questionONE.answer1;
    oneHTML.setAttribute("style", "display:block;");
    console.log(quizQuestion.innerHTML=questionONE.question)
    console.log(oneHTML.innerHTML=questionONE.answer1)
});


// // The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderQuestion()
//   startTimer()
// }

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// Creates blanks on screen
// function renderQuestion() {
//     quizQuestion.textContent.questionONE.question;
//     console.log(questionONE.question)
// };



//TO DOs in HTML: create one blank div for the question and then create 4 buttons and then reuse for the choices

//New function for each event

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

//global variables - HTML recalls - that are looking at classes and ids in the index
// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

//also global variables that we'll use for the logic below like functions and if/else stmts
// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads 
// function init() {
//   getWins();
//   getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderBlanks()
//   startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// // Creates blanks on screen
// function renderBlanks() {
//   // Randomly picks word from words array
//   chosenWord = words[Math.floor(Math.random() * words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);

//Questions: Commonly used data types DO NOT include: 1. strings, 2. booleans, 3. alerts, 4. numbers

//Questions: The condition in an if/else statement is enclosed within ___. 1. quotes, 2. curly brackets 3. parentheses 4. square brackets