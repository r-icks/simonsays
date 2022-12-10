var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;

$(document).keydown(function () {
    if (!start) {
        start = true;
        patternGenerator();
    }
})

function patternGenerator() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randColor = buttonColors[randomNumber];
    gamePattern.push(randColor);
    $("." + randColor).fadeOut();
    $("." + randColor).fadeIn();
    new Audio("sounds/" + randColor + ".mp3").play();
}
function checkAnswer() {
    var lastIndex = userClickedPattern.length - 1;
    if (userClickedPattern[lastIndex] == gamePattern[lastIndex]) {
    }
    else {
        new Audio("sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        setTimeout(() => { $("body").removeClass("game-over") }, 200);
        $("h1").text("Game Over! Press any key to restart");
        startagainbruh();
    }
    if (userClickedPattern.length == level) {
        setTimeout(function () {
            patternGenerator();
        }, 1000)
    }
}

function startagainbruh() {
    level = 0;
    gamePattern = [];
    start = false;
}

$(".btn").click(function () {
    var colorClicked = $(this).attr("id");
    new Audio("sounds/" + colorClicked + ".mp3").play();
    userClickedPattern.push(colorClicked);
    $("." + colorClicked).addClass("pressed");
    setTimeout(function () {
        $("." + colorClicked).removeClass("pressed");
    }, 100);
    checkAnswer(level);
});