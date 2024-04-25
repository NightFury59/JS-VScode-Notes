const condition = true;

if (condition) {
    console.log('It was true');             // we will get true
} else {
    console.log('It was false')
}


const condition2 = null;               

if (condition2) {
    console.log('It was true');
} else {
    console.log('It was false')           // it will return it was false , as null is considered as a falsy value.
}



if (condition2) {
    console.log('It was true');
} else if (condition === false) {
    console.log('It was false')           
} else {
    console.log('default')                 // here we will get default as null is not strictly equal to false.
}


// switch case
const myNum = 2;

switch(myNum) {
    case 1 :
        console.log(true)
    case 2 :
        console.log(true)
    default :
        console.log('default')            // its interesting that even if case 2 is hit it wont stop it would continue on and console.log default too.
}


const myNum2 = 2;

switch(myNum2) {
    case 1 :
        console.log(true)
        break;
    case 2 :
        console.log(true)
        break;
    default :
        console.log('default')            //  now it wont happen as we added a break statement.
}



// ternary operators.

const num = 22;

console.log(num > 10 ? "it is greater than 10" : "it is less than 10");


const num2 = 10;

console.log(num2 > 10 ? "it is greater than 10" : "it is less than 10");       // it will return less because it is not greater than 10

