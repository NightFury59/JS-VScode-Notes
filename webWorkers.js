/* Web Workers are Api's provided by the browsers, this isnt the core part of the javascript it is something
that is added to browsers to make our life easier */

/* The purpose of the web worker is that it allows us to run code in a separate thread */

const slowButton = document.getElementById('slow')
const sayHelloButton = document.getElementById('say-hello');

slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);

function slowOperation() {
    const worker = new Worker('worker.js')
    worker.postMessage(10)
    worker.addEventListener('message', event => {
        console.log(event.data)
    })
    //worker.terminate();                     // now nothing will get logged out
}

function sayHello() {
    console.log('hello world');
}


// Now here as slowOperation will take more time to run than sayHello, when we click on slowButton and immediately click on
// sayHelloButton the hello world will be logged out later due to the slowOperations execution. Now to fix this we can use
// workers. By using workers we can log out hello world even before slowOperation function as it gets executed in the background.
// The slowOperation wont prevent the sayHello from executing.

// ***** As workers run separate from our main code we cant do any dom manipulations in the woker


// Now lets see how we can make our workers communicate with the main thread

/* We can do this with the help of postMessage() and in the worker file add an event listener on self */

// We can also do it without self and just an addEventListener in the worker file 

// we can also do it using onmessage =

// ** Now lets look at how we can send information from workers back to the main code file - 

// we have to do it the same we do from main file to worker, include a postMessage in worker and then listen to it in main file.

// worker.terminate() method - it stops the worker from running


// there is also sharedWorker where a worker can be shared by multiple tabs -
/* to do it just change the Worker constructor to SharedWorker constructor and add .port before the postmessage
   also add .port before onmessage and instead of listening to the message event listen to connect event */


// But currently sharedWorkers are not used, just stick with the Worker constructor for dedicating a worker to a single
// main code file.
