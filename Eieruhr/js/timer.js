let alarm = new Audio('sounds/alarm.wav');


function startTimer() {
    let startTime = new Date().getTime();
    let fiveMinutes = 1000 * 60 * 5;
    let endTime = startTime + fiveMinutes;

    setInterval(function() {
        let timeLeft = endTime - new Date().getTime();


        if (timeLeft > 0){
        let minutes = timeLeft / (1000 * 60);
        minutes = Math.floor(minutes);
        let seconds = (timeLeft / 1000) % 60;
        seconds = Math.round(seconds);
        let text = '0' + minutes + ' : ' + seconds;
        timer.innerHTML = text;
    } else {
        timer.innerHTML = '00:00';
        alarm.play();
    }
    },1000);
}