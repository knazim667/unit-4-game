//creating variables

var wins = 0;
var lost = 0;
var score = 0;

// Create a computer generator number for match
var computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
$("#randomNumber").html(computerGuess);

//converting the string in integer
var stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone4 = parseInt(Math.floor(Math.random() * 12) + 1);

//testing all random number
console.log("computerGuess" + computerGuess);
console.log("stone1 " + stone1);
console.log("stone2 " + stone2);
console.log("stone3 " + stone3);
console.log("stone4 " + stone4);

//creating reset function the game

function reset () {
    
    score = 0;
    $("#score").html(score);
    computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
    $("#randomNumber").html(computerGuess);


    stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone4 = parseInt(Math.floor(Math.random() * 12) + 1);


}

//create a click function for images generate number
$(document).ready(function() {
    

$("#stone1").on("click", function() {
    
            score = score + stone1;
            $("#score").html(score);
            console.log("score1 " + score);
});
    
$("#stone2").on("click", function() {
    
            score = score + stone2;
            $("#score").html(score);
            console.log("score2 " + score);
});
    
$("#stone3").on("click", function() {
    
            score = score + stone3;
            $("#score").html(score);
            console.log("score3 " + score);
});

$("#stone4").on("click", function() {
    
            score = score + stone4;
            $("#score").html(score);
            console.log("score4 " + score);
});

    // create win and lost

if(score === computerGuess) {
    
    wins++;
    console.log(wins);
    $("#winn").html("You Win");
    $("#win").html(wins);
    reset();
} else if (score > computerGuess) {
    
    lost++;
    console.log(lost);
    $("#winn").html("You Lost");
    $("#lost").html(lost);
    reset();
}
    
});

