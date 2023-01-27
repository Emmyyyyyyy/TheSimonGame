var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.random();
    return randomNumber = Math.floor(randomNumber * 4);
}

var randomChosenColor = buttonColors[nextSequence()];

