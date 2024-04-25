/* Currying in JavaScript - In conclusion, currying is a technique in JavaScript that allows you to transform functions with
multiple arguments into a sequence of functions, each taking one argument at a time.
It promotes code reusability, composability, and flexibility */

function sums(a, b, c) {
    return a + b + c;
}

console.log(sums(1, 4, 10))

// Now lets do it in a curried way -

function curriedSum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(curriedSum(1)(4)(10));


// ****** Now lets do it in a practical way ******** //


function addition(a, b, c) {
    return a + b + c;
}


function subtraction(a, b, c) {
    return a - b - c
}

function multiplication(a, b, c) {
    return a * b * c;
}

function curry(func) {
    return function (a) {
        return function (b) {
            return function (c) {
                return func (a, b , c)
            }
        }
    }
}

const curriedAddition = curry(addition);
const curriedSubtraction = curry(subtraction)
const curriedMultiplication = curry(multiplication);

console.log(curriedAddition(2)(4)(6))
console.log(curriedSubtraction(5)(2)(1));
console.log(curriedMultiplication(2)(3)(4));


// Now lets do the same curry function but now with the help of arrow functions -
// We can also get rid of curly braces because each of this function is single


function summation(a, b, c) {
    return a + b + c;
}

function curry1(func) {
    return (a) => (b) => (c) => func(a, b, c)
}

const numsSum = curry1(summation);

console.log(numsSum(3)(4)(3))


/* Now lets see why we want to use the curriedFunction, suppose we want to add two 3 numbers 1 is fixed lets say 4
and the other two parameters b and c */

function addThreeNums(b, c) {
    return 4 + b + c;
}

console.log(addThreeNums(2, 5));            // 11

// Now lets do it with the curried function we can make it way simpler -

function summation2(a, b, c) {
    return a + b + c;
}

function curry2(func) {
    return (a) => (b) => (c) => func(a, b, c)
}


const curriedSum3 = curry2(summation)

const addThree = curriedSum3(7)
console.log(addThree(10)(10));                                          // 27
