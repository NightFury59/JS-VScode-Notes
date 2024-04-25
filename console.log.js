console.log('Hello')

console.error('error');

console.debug('debug')

// we can use a 2d array for tables-

console.table([[1, 2] , ["hello", "world"]]);


// we also have console.count() it will each time log out higher value. The default value is 1.

console.count();                    // default : 1
console.count();                    // default : 2
console.count();                    // default : 3
console.count();                    // default : 4
console.countReset();               // it resets the count value back to 1
console.count();                    // default : 1


// there is also console.time() and console.timeLog() to see how long it took to log.

console.time()
console.timeLog()

// now we can increase the timeLog by adding loops and all in it.

console.time()
for (let i = 0; i < 10000; i++) {}
console.timeLog()


// there is also console.trace() to show exactly where we are in the code.

function addition() {
    console.trace()
}
addition()                     // at addition.

