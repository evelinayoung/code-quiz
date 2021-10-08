
// Timer Setup 

var timer;
var timeLeft=0;
var start= startTimer();

function startTimer() {
    timeLeft= 100;
    timer= setInterval(function(){
        timeLeft--;
        if(timeLeft===0){
            finish();
        }
        document.getElementById("timer").innerText=timeLeft ;
    },1000)
}

function finish(){
    clearInterval(timer);
    alert("Game Over!")
}

function subtractTime(){
    timeLeft -=10;
    if(timeLeft===0){
        finish();    }
}
startTimer();

// Question Button Setup 

function startQuiz(){
    $("#start").hide;
}

(document).ready(function(){
    $("#start").on('click', function()
}