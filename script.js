let [hours, minutes, seconds] = [0, 0, 0];
const dispaly = document.getElementById("display-timer");
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 60;
            hours++
        }
    }
    let hrs = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    dispaly.innerHTML = hrs + " : " + min + " : " + sec;
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000);
};
function resetWatch() {
    
    [hours , minutes , seconds] =[0,0,0]
    dispaly.innerHTML = "00 : 00 : 00"
};

function pauseWatch() {
    
    clearInterval(timer);
};