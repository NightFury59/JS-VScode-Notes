// the function keyword is used to define a function.
 
function addTwoNums(num) {
    return num + 2;
}

console.log(addTwoNums(4))                // 6

// we can also give default values to the parameters like --

function addTwo(num = 2) {
    return num + 2;
}

console.log(addTwo())                   // 4
console.log(typeof addTwo2)

console.log(addTwo instanceof Object);
// ** functions themselves are actually object.
// by using typeof we will get function because the object is of type function.

// the second way, doing console.log inside the function itself.
function addTwo2(num = 2) {
    console.log(num + 2)                // 4
}

return addTwo2()


// functions can be passed around as standard values.
