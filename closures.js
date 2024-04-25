// Closures - Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function 
// in the inner scope of a function.
// Lexical scoping is the process used to define the scope of a variable by its position in the source code.

// This is Lexical Scoping means functions have access to their parent scope. The function logNum has access to globalNum.

const globalNum = 5;

function logNum() {
    let localNum = 1;
    console.log(localNum + globalNum);
}

logNum();



function example() {
    const num = 5;

    function logNum() {
        console.log(num)        // it doesnt find num in its local environment so it looks outside and find num = 5.
    }

    logNum();
}

example();                          // 5


function example1() {
    const num1 = 5;

    function logNum1(num1) {
        console.log(num1)                       // it finds num1 in its local environment
    }

    logNum1(10);
}

example1()


function makeFunctions() {
    let privateNum = 0;
    
    function privateIncrement() {
        privateNum++;
    }

    return {
        logNum2: () => console.log(privateNum),
        privateIncrement: () => {
            privateIncrement();
            console.log('Incremented!');
        }
    }
}



const { logNum2, privateIncrement } = makeFunctions();

logNum2();
privateIncrement();
logNum2();


// Lets take a look at a common example, which often times come up in technical interviews and is also a good way
// to test the conceptual understanding.


for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);                 // it has access to the outer i outside its local function and runs after 500 ms.
    }, 500);
}

// Now lets see an interesting thing using var.

for (var n = 0; n < 3; n++) {
    setTimeout(() => {
        console.log(n)              // it gives 3 3 3 
    }, 600)
}


// It is because let is block scoped meaning that let is only scoped within the functions curly braces
// so what javascript does when we use let in a for loop is it creates a new version of that variable
// with each iteration of that loop so what that means is that console.log(i) inside the arrow function 
// each time it created a closure .

// However var is function scoped so in this case it just scoped globally because of the fact that we are
// not in a function what it means is that we are using same var i in each iteration there is no way to 
// create a new version of var i in each iteration of this loop so we get the same variable each time,
// so even though we have closure they are still pointing to the same n variable and at the end we are 
// still doing n++ which is why we are getting the value of 3 rather than stopping at 2.

