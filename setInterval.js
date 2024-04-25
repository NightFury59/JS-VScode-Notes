// setInterval is a asynchronous function.
// setInterval will set an interval of time that after this interval your
// function will run again.
// if we havent set any stopper then it will keep on running infinitely.
// we have to use clearInterval for stopping the infinite runnning of the function after a specific 
// amount of time.
// to use clearInterval we need to take the setInterval inside a variable then we need to stop that variable.

function greet() {
    console.log('Hello freinds!')
}

let timer = setInterval(greet, 2000);

setTimeout(function() {
    clearInterval(timer);
}, 5000)
