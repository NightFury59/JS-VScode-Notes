// // Promises - In JavaScript, a promise is just like a promise that you make 
// // in real life to show that you are committed to doing something.
// // There are three types of promises in JS 1) Fulfilled, 2) Pending, 3) Rejected.

// // The default state of the promise is Pending.                  // Promise { <pending> }


const promise = new Promise((resolve, reject) => {
    resolve(2);                                                     // Promise { 2 }
})

console.log(promise);


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
    //setTimeout(() => reject(new Error('Something went wrong')), 10);                      // This will give pending as 
})                                                                                          // it goes through immediately.

console.log(promise2);

promise2.then(console.log).catch(error => console.log('Oh no! ' + error));                     /* it waits for the promise to settle, 
waiting for the state to change away from pending. */


const promise3 = Promise.resolve(3);

console.log(promise3);

promise3
.then(value => value * 3)
.then(value => value + 1)
.then(console.log)                           
.catch(error => console.log('Oh no! ' + error));



const promise4 = Promise.resolve(4);

console.log(promise4);

promise4
.then(value => value * 2)
.then(value => value + 1)
.then (value => {
    throw new Error('Nahhhh!');
})
.then(console.log)                                          // it will never get into this, due to the error
.catch(error => console.log('Oh no! ' + error))             // it will get into this and the error would be caught.
.finally(() => {
    console.log('done')
});
//^^^^^^^^^^//

// It does not take the value or parameter as an error messsage, it takes no parameter as its callback function
// when the promise is setlled at that time the finally block will run.


// ** Promise.all method ** //

// it takes in an array and this array is going to be array of promises, 
// it waits for all of the promises to be resolved and then logs out,
// if any of the promise rejects then Promise.all() as a whole rejects.


const promise7 = Promise.resolve(7);

Promise.all([
    Promise.resolve(7),
    Promise.resolve(6),
    new Promise((res, rej) => setTimeout(() => res(2), 5000))
]).then(console.log);                   // [ 7, 6 , 2] after 5 sec.


// **  Promise.race() -- This method is like a race, whichever promise resolves first gets returned ** //

const promise8 = Promise.resolve(8);

Promise.race([
    Promise.resolve(22),
    Promise.resolve(10)
]).then(console.log)                                // 22


// ** Promise.any() - This method returns any promise that has been fulfilled ** //

Promise.any([
    Promise.resolve(55),                                // 55
    Promise.resolve(44)
]).then(console.log)


// ********************************************************************************************** //


// ** Async and Await ** //  ----


// async function is implicity a function that will return a promise -

// what await does is that it waits for a promise to settle before it continues -

function tester() {
    return 100;                                             // 100
}

console.log(tester());

async function tester2() {
    return 100;                                            // Promise { 100 }
}

console.log(tester2());

// using await -- we can use await only when we are inside async function.

async function tester3() {
    const value = await new Promise((res, rej) => setTimeout(() => res(77), 1000))
    console.log(value)
}

tester3();

// to catch an error in the async await we have to use the try and catch block --

async function hello4() {
    try {
        const value = await new Promise((res, rej) => setTimeout(() => res(222), 1000))
        console.log(value)
    } catch {
        throw new Error('Oh no! ' + error)
    }
}

hello4();


// making the promise rejected in the above code --

async function hello5() {
    try {
        const value2 = await new Promise((res, rej) => setTimeout(() => rej(new Error('Unfortunately Something went wrong'))))
        console.log(value2)
    } catch(error) {
        console.log('Oh no! ' + error)
    }
}

hello5();


// If you are not comfortable with the syntax of the try catch block, 
// you can combine the syntax of the two blocks together.

async function hello6() {
   return await new Promise((res, rej) => setTimeout(() => res(351), 1000));
}

hello6().then(console.log).catch(error => ('Oh no! ' + error));                 // 351


async function hello7() {
    return await new Promise((res, rej) => setTimeout(() => rej(new Error('I am the error message'), 1000)))
}

hello7().then(console.log).catch(error => console.log('Sadly ' + error));


