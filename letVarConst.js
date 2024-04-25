// Hoisting - When a variable is declared it gets hoisted to the top of its scope meaning that the declaration happens first.

// var is hoisted , here a already gets declared as undefined even before assigning it the value of 5 later in the code.

// var can be hoisted.
console.log(a)                 // undefined

var a = 5;

// let cant be hoisted.
console.log(b)                 // error 

let b = 10;

// const cant be hoisted.
console.log(c);               // error

const c = 15;


function test() {
    if (true) {
        var num1 = 5;
        let num2 = 5;
    }

    console.log(num1);          // 5
    console.log(num2);          // num2 is not defined error
}
test()

// var has the scope of the entire function, hence it will log out 5 even if it is outside its specific block.
// let has the scope of only the specific block it is in, hence logging out let outside the block anywhere in the function will result in error.



// ******* Const Keyword ******** //

// what const does is the exact work of let keyword , just that the values are constant and cant be reassigned.


function test1() {
    let num3 = 0;
    const num4 = 0;

    num3 = 2;
    num4 = 4;              // this will give an error because num4 is const and the value cant be reassigned.

    console.log(num3);
    console.log(num4);
}
test1()


// however with const values we can still mutate them, we just cant reassign.

const arr = [1, 2 , 3, 4]
arr.push(5);

console.log(arr)                 // this is acceptable as we have just mutated the arr.


// ************************ SUMMARY *************************** //

// ** We would use let when we know we have to reassign some other value to that variable some other time in the code
// other than that if we dont want reassignments and just mutations further we must be using const most of the times.
// var is function scoped, let is blocked scope and const is used for variables whose values cant be reassigned.

// var keyword should most of the times be avoided, other than there is a specific reason to use it.
