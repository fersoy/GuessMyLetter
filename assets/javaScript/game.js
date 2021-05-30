var wins = 0;
var losses = 0;
var leftChance = 10;
var pressed = " ";
var yourGuess = " ";


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z"];

var myGuess = document.getElementById("guess");
var yourGuessText = document.getElementById("trueGuess");
var leftChanceText = document.getElementById("leftGuess");
var winsText = document.getElementById("win");
var lossesText = document.getElementById("loss");
var pressedText = document.getElementById("pressed");
var bosYerText = document.getElementById("bosYer");

document.onkeyup = function(event) {
    yourGuess++;
    leftChance--;
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   if((computerGuess === userGuess)){
       wins++;
   };
   if(leftChance === 0){
       losses++;
       bosYerText.textContent = "Sorry, you lost!";
       
    };

    if(wins > losses){
        bosYerText.textContent = "Good job. You won!";
    }
    if(wins === losses){
        bosYerText.textContent = "You are tie!"
    }

//    yourGuessText.textContent = userGuess[i] + ", ";
   myGuess.textContent = userGuess;
   winsText.textContent = wins;
   lossesText.textContent = losses;
   leftChanceText.textContent = leftChance;
   pressedText.textContent = userGuess;

};