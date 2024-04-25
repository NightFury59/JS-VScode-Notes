const count = document.getElementById('count');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

let timerId;

setTimeout(() => {                                                // setTimeout() will not repeatedly call itself like setInterval().
    console.log('timeout')
}, 1000)

function startTime() {
    timerId = setInterval(() => {
        count.textContent++;
    }, 500);    
}

function stopTime() {
    clearInterval(timerId);
}
