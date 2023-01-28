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
    $("." + randomChosenColor).fadeTo(100, 0.3, function(){
        $(this).fadeTo(100, 1.0); 
    });
    console.log(gamePattern);
    $("#level-title").text("Level " + level);
}

function checkAnswer(){
    if(gamePattern[clickCount] != userClickedPattern[clickCount]){
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    else{
        if(clickCount+1 == level){
            setTimeout(function(){
                nextSequence();
            }, 500)
        }
        else{
            clickCount++;
        }
    }
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function(){
        $("." + currentColor).removeClass("pressed");
    }, 100)
}

$(document).keypress(function(){
    if(level == 0){
        setTimeout(function(){
            nextSequence();
        }, 300)
    }
});

$(".btn").click(function(){
    userClickedPattern.push($(this).attr("id"));
    animatePress($(this).attr("id"));
    playSound($(this).attr("id"));
    checkAnswer(clickCount);
});



