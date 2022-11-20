const stop = document.getElementById('stop');
const start = document.getElementById('start');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime)

let timerID;

// let timeoutID = setTimeout(() => {
//     console.log('timeout');
// }, 1000);


// clearTimeout(timeoutID);

let animationFrameID;


// setTimeout(() => {
//     console.log(performance.now());
// }, 1000);


// const date = new Date(2025, 0, 10, 9, 25, 10, 30);
// console.log(date)

const date = new Date(2025, 0, 10, 9, 25, 10, 30);
console.log(date.getMonth())
console.log(date.getDay())
date.setMonth(9);
console.log(date)

function startTime(timestamp) {
    console.log(timestamp);
    // timerID = setInterval(() => {
    //     count.textContent++;
    // }, 500);
    count.textContent++;
    animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
    // clearInterval(timerID);
    cancelAnimationFrame(animationFrameID)
}