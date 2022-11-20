const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime)

let timerID;

// let timeoutID = setTimeout(() => {
//     console.log('timeout');
// }, 1000);

// clearTimeout(timeoutID);

function startTime() {
    timerID = setInterval(() => {
        count.textContent++;
    }, 500);
}

function stopTime() {
    clearInterval(timerID);
}