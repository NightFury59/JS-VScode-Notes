// Syntactic Sugar is just some unique ways to make our code consize, cleaner and easier to read.


const arr = [1, 2, 3, 4]
console.log(arr);

const hello = arr.map(double);

function double(num) {
    return num * 2;
}

console.log(hello);

// Now we can do this too to get the same output. (Syntactic Sugar)

const arr2 = [1, 2, 3, 4]
console.log(arr2);

const hello2 = arr2.map(function double(num) {
    return num * 2;
});

console.log(hello2);


// We can even remove the function keyword by using the arrow function , remove the function and after the parameter just use =>.

const arr3 = [1, 2, 3, 4]
console.log(arr3);

const hello3 = arr3.map((num) => {
    return num * 2;
});

console.log(hello3);


// We can even get rid of the return statement and the curly braces.

const arr4 = [1, 2, 3, 4]
console.log(arr4);

const hello4 = arr4.map((num) => num * 2);          // this will only work if we have a single line/expression.

console.log(hello4);


/// Destructuring Assignment --

const hey = [1, 2, 3, 4]

// const first = hey[0];
// const second = hey[1];

// console.log(first, second);                 // 1 2

// instead of the above we can do this --

const [first, second, ...rest] = hey;       // the ...rest will give out the remaining values.
console.log(rest)                           // [3, 4]  
console.log(first, second)                  // 1 2 


/// we can do similar stuff with objects aswell --

const obj = {
    name : 'conner', 
    age : 24,
    nice : 'very nice',
}

const {name, company = 'AlgoExpert', nice = 'good', ...rest2} = obj;                        // we have added company that isnt present in the object but no problem.
console.log(company);
console.log(nice)                            // nice will give out 'very nice' only and not good as it takes assignment only from the object.
console.log(rest2)                          // { age : 24 }                 
console.log(name)                           // conner

const {age : yo} = obj;
console.log(yo)                             // 24


/// 

const obj2 = {
    name : 'conner', 
    age : 24,
    nice : 'very nice',
}

function hey2({name}) {
    console.log(name)
}

hey2(obj2)                  // conner


// spread operator --

const nums = [1, 2, 3, 4];

function add(x, y) {
    console.log(x + y);
}

add(...nums);                                   // 1 + 2 = 3, as add function takes 2 parameters.


// interesting use of spread operator --

const numm = [1, 2, 3, 4]
const nummm = [5, 6, 7, 8]

const nummmm = [0,...numm, ...nummm, 9, 10]        // it will combine all the elements of the 2 arrays,we can also add extra elements wherever we want.

console.log(nummmm);

//

const arrr = [1, 2, 3, 4]

function logParams(x, ...rest5) {
    console.log(x);
    console.log(rest5);
}

logParams(1, 2, 3, 4);


// template literal --

const namee = 'Neeraj'

console.log('hello ' + namee)           // hello Neeraj

console.log(`hello ${namee}`)            // hello Neeraj... this is done by template literal.


// Optional chaining --

const hii = {
    website : {
        name : 'FrontEnd Expert',
    }
}


console.log(hii?.website?.name ?? 'foo')         /* here the question marks says that if hii is null or undefined make the whole hii.website null or undefined
in that way we will get undefined in output rather than an error , the ?? is the null coalescing operator it says that if the expression is null
or undefined then log out the value after the null coalescing operator */


/// Short Circuit evaluation --

// normal way --
const shouldRunCode = false;

function foo() {
    console.log('Hello World!')
}

if(shouldRunCode) {
    foo();
} 

// By Short Circuit Evaluation --

const sh = true

function fooo() {
    console.log('Hello World!')
}

sh && fooo();                       // it says that if sh is true then go and execute the fooo(), if sh is false it wont go to fooo().

// short ciruit evaluation is like a little hack and not recommended to use as it makes the code little harder to read 
// even if it is a bit concise.
