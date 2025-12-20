var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}

$("#" + randomChosenColour).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
}, 5000, function () {
    // Animation complete.
});;
