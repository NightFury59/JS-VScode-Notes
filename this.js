// THIS

const button = document.querySelector('button');

button.addEventListener('click', logThis)

console.log(this);      // we will logout the global object, so at the highest level this simply means the
// global object which in the browser is window.

// At browser this at the highest level is window.

function logThis() {
    console.log(this);
}

logThis();                  // this will also logout the window object. But if we use strict mode it will logout undefined.

const obj = {
    num: 10,
    logThis
}

obj.logThis()



// How we can use within the array iteration functions -

[1, 2, 3].forEach(function(num) {
    console.log(this);
    console.log(num);
}, {num : 10});

// The Arrow function does not have its own this context, thus it ends up with global this which is the window.

