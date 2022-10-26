// Startings
window1();

var gamePattern = [];
var btnColors = ["red", "blue", "green", "yellow"];
var counter = 0;

// Click Listenners

$(".start-btn").click(function () {
  btnAnimation("start-btn");
  start();
  setTimeout(() => {
    nextSequence();
  }, 1000);
});

$(".box").click(function () {
  btnAnimation(this.id);
  if (this.id === gamePattern[gamePattern.length - counter]) {
    makeSound(this.id);
    counter--;
  } else {
    gameOver();
  }
  if (counter === 0) {
    counter = gamePattern.length;
    setTimeout(() => {
      nextSequence();
    }, 500);
  }
});

// working part

function nextSequence() {
  var randomColor = btnColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);
  btnAnimation(randomColor);
  makeSound(randomColor);
  counter++;
  $("h1").text("Level " + counter);
  console.log(gamePattern);
}

// Audio and Visual Effects

function btnAnimation(name) {
  $("." + name).addClass("pressed");
  setTimeout(function () {
    $("." + name).removeClass("pressed");
  }, 100);
}

function makeSound(colorName) {
  var audio = new Audio("sounds/" + colorName + ".mp3");
  setTimeout(() => {
      audio.play();
  }, 50);
}

function window1() {
  $(".row").slideToggle();
}
function gameOver() {
  makeSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 500);
  $("h1").text("Game Over !!!");
  $("h2").text("Your Score:" + (gamePattern.length - 1));
  $(".row").slideToggle();
  $(".start-btn").css("top", "65%");
  $(".start-btn").text("Re-start");
  $(".start-btn").slideToggle();
}

function start() {
  gamePattern = [];
  counter = 0;
  $("h1").text("Level 1");
  $(".start-btn").slideToggle();
  $(".row").slideToggle();
  $("h2").text("");
}
