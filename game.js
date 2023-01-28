var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var clickCount = 0;

function startOver(){
    level = 0;
    clickCount = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function nextSequence(){
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    userClickedPattern = [];
    level++;
    clickCount = 0;
    console.log(gamePattern);
    $("#level-title").text("Level " + level);
}

function checkAnswer(){
    if(gamePattern[clickCount] != userClickedPattern[clickCount]){
        $("body").addClass("game-over");
        $("body").delay(2000).removeClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    else{
        if(clickCount+1 == level){
            nextSequence();
        }
        else{
            clickCount++;
        }
    }
}

// function playSound(name){
//     // $("." + randomChosenColor).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
//     (name + ".mp3").play();
// }

// function animatePress(currentColor){
//     $(currentColor).fadeTo(100, 0.3, function(){
//         $(this).fadeTo(500, 1.0); 
//     });
// }

$(document).keypress(function(){
    nextSequence();
});

$(".btn").click(function(){
    userClickedPattern.push($(this).attr("id"));
    animatePress($(this).attr("id"));
    playSound($(this).attr("id"));
    checkAnswer(clickCount);
});



