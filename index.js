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
        $('h1').text('Game Over');
        gameOver=1;
    }
    if(counter===0){
        counter=gamePattern.length;
        setTimeout(() => {start();}, 1000);
    }
    console.log(counter);
    
});

$(document).keypress(function(event){
    if(gameOver!==1 && started!==1){
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
    //setTimeout(function(){},200);
    console.log(gamePattern);
    
}

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    return randomNumber;
}

function buttonAnimation(buttonColor){
    var activeButton=document.querySelector('#'+buttonColor);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },200);
}   

function makeSound(colorName){
    switch (colorName) {
        case 'blue':
            var audio=new Audio('sounds/blue.mp3');
            audio.play();
            break;
        
        case 'green':
            var audio=new Audio('sounds/green.mp3');
            audio.play();
            break;

        case 'yellow':
            var audio=new Audio('sounds/yellow.mp3');
            audio.play();
            break;

        case 'red':
            var audio=new Audio('sounds/red.mp3');
            audio.play();
            break;

        case 'wrong':
            var audio=new Audio('sounds/wrong.mp3');
            audio.play();
            break;

        default:
            break;
    }
}