// setTimeOut and setInterval are not part of JavaScript specification but they
// run in all environments like the browser and the node.js environment,etc.
// setTimeOut and SetIneterval are also called as timer functions or timer functions.
// 2000 means 2 secs.
// setTimeOut takes a callback function and a specific time as arguments.
// setTimeOut is a timer function.
//setTimeOut is also a asynchronous function.


console.log('Before')

function greet() {
    console.log("This message is from setTimeOut");
}

setTimeout(greet, 5000);

console.log('After')
