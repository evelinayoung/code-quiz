// Timer Setup 

var timer;
var timeLeft=0;

function startTimer() {
    timeLeft= 100;
    timer= setInterval(function(){
        timeLeft--;
        document.getElementById("timer").innerText=timeLeft ;
    },1000)
}
startTimer();