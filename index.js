var gamePattern = []
var userClickedPattern = []
var started = false
var level = 0;

function nextseqence() {
    randomNumber = (Math.random() * 4)
    return Math.floor(randomNumber)
}


var buttonColours = ["red", "blue", "green", "yellow"]


function randomChosenColour() {
    randomNumber = nextseqence()
    colourSelected = buttonColours[randomNumber]
    gamePattern.push(colourSelected)
    console.log(colourSelected)

    if (colourSelected === "red") {
        $("#red").fadeOut(100).fadeIn(100);
        var red = new Audio('sounds/red.mp3');
        red.play();
    } else if (colourSelected === "blue") {
        $("#blue").fadeOut(100).fadeIn(100);
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
    } else if (colourSelected === "green") {
        $("#green").fadeOut(100).fadeIn(100);
        var green = new Audio('sounds/green.mp3');
        green.play();
    } else if (colourSelected === "yellow") {
        $("#yellow").fadeOut(100).fadeIn(100);
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
    }
    return colourSelected
}


$(".btn").click(function(){
    console.log(event.target.id)
    userClickedPattern.push(event.target.id)
    name = (event.target.id)
    checkAnswer(userClickedPattern.length-1)

    if (name === "red") {
        $("#red").fadeOut(100).fadeIn(100);
        var red = new Audio('sounds/red.mp3');
        red.play();
    } else if (name === "blue") {
        $("#blue").fadeOut(100).fadeIn(100);
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
    } else if (name === "green") {
        $("#green").fadeOut(100).fadeIn(100);
        var green = new Audio('sounds/green.mp3');
        green.play();
    } else if (name === "yellow") {
        $("#yellow").fadeOut(100).fadeIn(100);
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
    }

})

$("body").keypress(function(event){
    if (started === false) {
    randomChosenColour()
    levels()
    started = true
    } else {
        console.log("no stop")
    }
})


function levels(){
    level++;
    $("h1").html("level " + level )
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      

     
      if (userClickedPattern.length === gamePattern.length){
        userClickedPattern=[]
        levels()


        setTimeout(function () {
            randomChosenColour();
        }, 500);

      }

    } else {

        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 1000);
        $("h1").html("Game over, press any key to restart")
        startOver()
       
      console.log("wrong");

    }

};

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];

};