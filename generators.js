/* While these bad boys won't bring the lights back on during a blackout,
they'll reliably and efficiently power your applications whenever they are called upon. */

// We can use them by adding * after the function and inside the function we can use a keyword yeild.

function* genNumbers() {
    yield 1;
    yield 2; 
    yield 3;
}

const generator = genNumbers();
console.log(generator.next());      // it will give the first value and done as false as its not the last value
console.log(generator.next());
console.log(generator.next())
console.log(generator.next())       // done : true


// **** With the generator function we need to use the standard function syntax we 
// cant use the arrow function in generators **** //


// We can also use the for loop like --

function* genNumbers2(count) {
    for (let i = 0; i < count; i++) {
        yield i;
    }
}

const generator2 = genNumbers(3);

console.log(generator2.next().value);
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

// we can also use the for of loop -

for (value of generator2) {
    console.log(value)
}

// usually avoid for of loops in generators.

function* getNumbers3() {
    const value = yield 0;
    yield value + 3;
}

const generator3 = getNumbers3();

console.log(generator3.next())              // { value: 0 , done: false}
console.log(generator3.next(5))             // { value: 8 , done: false}

// we can also use the return function while logging out -

// console.log(generator3.return(5));

// we also have throw function which we can log out it is like return but we can throw 
// the error function

console.log(generator3.throw(new Error('There was an Error')))
