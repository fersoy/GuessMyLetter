var wins = 0;
var losses = 0;
var leftChance = 10;
var yourGuess = " ";


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z"];

var myGuess = document.getElementById("guess");
var yourGuessText = document.getElementById("trueGuess");
var leftChanceText = document.getElementById("leftGuess");
var winsText = document.getElementById("win");
var lossesText = document.getElementById("loss");
var bosYerText = document.getElementById("bosYer");

var updateGuessesSoFar = function() {
    document.querySelector("#trueGuess").innerHTML = yourGuess.join(", ");
  };

document.onkeyup = function(event) {
    leftChance--;
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   if((computerGuess === userGuess)){
       wins++;
   };
   if(computerGuess !== userGuess){
       if(leftChance === 0){
        losses++;   
        bosYerText.textContent = "Sorry, You Lost!";

       }
    };

    if((leftChance === 0) && (wins > losses)){
        bosYerText.textContent = "Good job. You won!";
    }
    
    if(wins === losses && wins !== 0){
        bosYerText.textContent = "You are tie!"
    }

   myGuess.textContent = userGuess;
   winsText.textContent = wins;
   lossesText.textContent = losses;
   leftChanceText.textContent = leftChance;
   

   if(leftChance === -1){ 
    window.location = window.location;
   }
};