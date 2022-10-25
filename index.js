var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var counter=0;
var gameOver=-1;
var started=-1;

$('.btn').click(function (){
    if(started!==1 || gameOver===1){
        return;
    }
    buttonAnimation(this.id);
    if(this.id===gamePattern[gamePattern.length-counter]){
        makeSound(this.id);
        counter--;
    }else{
        makeSound('wrong');
        $('h1').text('Game Over !!! press any key to restart');
        gameOver=1;
        started=-1;
        
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);
    }
    if(counter===0){
        counter=gamePattern.length;
        setTimeout(() => {start();}, 1000);
    }
});

$(document).keypress(function(event){
    if(started!==1){
        gamePattern=[];
        counter=0;
        gameOver=-1;
        start();
    }
    started=1;
});

function start(){
    var randomChosenColour=buttonColours[nextSequence()];
    makeSound(randomChosenColour);
    buttonAnimation(randomChosenColour);
    gamePattern.push(randomChosenColour);
    counter++;
    $('h1').text('Level '+counter);
}

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    return randomNumber;
}

function buttonAnimation(buttonColor){
    $('#'+buttonColor).addClass('pressed');
    setTimeout(function(){
        $('#'+buttonColor).removeClass('pressed');
    },200);
}   

function makeSound(colorName){
    var audio=new Audio('sounds/'+colorName+'.mp3');
    audio.play();
}