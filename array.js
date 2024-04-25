// In JavaScript arrays are objects. Therefore, the typeof arrays will be object.

let arr = [1, 2, 3]

console.log(arr);
console.log(arr[1])
console.log(arr.length);
arr.push(4)                       // 4 will be added at the end of the array.
console.log(arr)
arr.shift()                      // the first element is removed by the shift method.
console.log(arr)
console.log(typeof(arr))        // object.



// for using an array we can also use a constructor.

let arr2 = new Array();
console.log(arr2)

let arr3 = new Array(1, 2, 3)
console.log(arr3)


// however in this constructor method if we add just single value it will create empty spaces of that value --

let arr4 = new Array(4);
console.log(arr4)

let arr5 = new Array(4).fill(5);
console.log(arr5);


let arr6 = new Array();
arr6.length = 10;
arr6.fill(0)
console.log(arr6)



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.length)
console.log(array.includes(3))
console.log(array.includes(22))
console.log(array.indexOf(5));


const hello = [1, 2, 3, 4, 5]

hello.push(6)
console.log(hello);                           // adds 6 at the end of the array.

console.log(hello.pop())                      // it logs out 6 which is the popped value.
console.log(hello)                            

// we can also push multiple elements in the arr.push() method.

hello.push(6, 7, 8, 9);
console.log(hello)


// unshift is the same as push , but push adds elements to the end of the array whereas unshift adds elements to 
// the beginning of the array.

hello.unshift(0)                            // adds 0 to the beginning of the array.
console.log(hello)


// however we must avoid unshift() because it is an O(n) time operation, where as push() is O(1) time.


// arr.shift() is the same as arr.pop() , in shift() the beginning element is removed and not the last one like pop()


hello.shift()
console.log(hello)                          // 0 gets removed from the beginning of the array.


// similar to unshift() the shift() method is not efficient.

console.log(typeof hello)                   // object
console.log(Array.isArray(hello))           // to check if it is array.
console.log(hello instanceof Array)         // alternatively we can use the instanceof Array to check if it is array.


// Deletion and Replacement of elements in an array for that we will use splice() --

[1, 2, 3, 4, 5, 6, 7, 8, 9]

hello.splice(3, 5)                // it will delete elements starting from index 3 and delete 5 elements.
console.log(hello)

// ******** In splice the 1st parameter is the Index, the 2nd parameter is the 'Delete count' and the 3rd parameter is the stuff we wanna add **********

hello.splice(3, 5, 'hello');        // it will delete 5 elements starting from index 3 and add 'hello' in the array.
console.log(hello)


hello.splice(2, 0, "Neeraj")         // it says that in index 2 we dont want to delete anything and add "Neeraj" in the array.
console.log(hello)                   // [1, 2, Neeraj, 3, 4, 5, 6, 7, 8, 9]


const hello2 = [1, 2, 3, 4];

// to get the return value of splice we can do.

const arr7 = new Array(hello2.splice(1, 10));        // 10 elements from index 1, as its overflowing it will return the indexes which are in bound.
console.log(arr7)                                   // [2, 3, 4]        

// lets use concat --

const arr8 = arr7.concat(['Hello' , 'world']);
console.log(arr8)


// lets look at couple of more functions --

let name = [1, 2, 4]
console.log(name.reverse())             // [4, 2, 1]

console.log(name.join(', '))            // 4, 2, 1



// looping through the elements in the array.

// traditional way
let hello1 = [1, 2, 3, 4, 5]

// for (let i = 0; i < hello1.length; i++) {
//     console.log(hello1[i]);                          // 1 2 3 4 5
// }


// there are better ways to loop through arrays in JS like by using for of loop.
// the one caviat of the for of loop is that we dont get index, but ofcourse we can create an index variable outside like i and doing i++ inside the loop
// but generally if you need the index dont use the for of loop.

for (const nums of hello1) {
    console.log(nums)                                    // 1 2 3 4 5
}


// we can also use the 'forEach' method in it we can get the indexes along side the values too --

hello1.forEach(function(value, index) {
    console.log(value, index, this)                 // here the this keyword is bound to the object {num : 10}     
}, {num : 10})



let hello4 = [1, 2, 3] 

let mappedArray = hello4.map(function(value, index) {
    return value + index;
})

console.log(mappedArray)                                // [1, 3, 5]


// filter method --

let filteredArray = hello4.filter(function(value) {
    return value > 1;                                   // [2, 3]
})

console.log(filteredArray);


// find() method - it returns the first value that satisfies the condition.


let foundValue = hello4.find(function(value) { 
    return value > 1                                    // 2
})

console.log(foundValue);

// // similary we can use findIndex.

// // there is a method called .every() it checks if all the elements satisfies the property and returns boolean value.

let isEvery = hello4.every(function(value) {
    return value > 5;                                   // false
})

console.log(isEvery);


// // similar to every() there is some() where it checks whether at least one element checks the condition to be true.

let isSome = hello4.some(function(value) {
    return value > 2;                                   // true as there is element 3 that is greater than 2.
})

console.log(isSome);



// ******* reduce() this is interesting as it takes two parameters accumulator and currValue and returns the sum, multiplication, etc. of the array.

hello6 = [2, 4, 6];

let reduced = hello6.reduce(function(accumulator, currValue) {
    return accumulator + currValue;
}, 0)                                                      

let reduced7 = hello6.reduce(function(accumulator, currValue) {
    return accumulator + currValue;
}, 5)                                               // it will give answer 17 as it starts addition from 5 then adds the array elements that are 2 4 6.

console.log(reduced7)

// for multiplication --

let reduced2 = hello6.reduce(function(accumulator, currValue) {
    return accumulator * currValue;
}, 1)

console.log(reduced2)

// there is also reduceRight() the only difference it has from reduce() is that it starts from right instead of left.


let reduced3 = hello6.reduceRight(function(accumulator, currValue) {
    return accumulator * currValue;
}, 1)

console.log(reduced3)


// to see the difference between reduce() and reduceRight() lets look at this interesting case -

let hi = [2, 4, 6, 8];

let newHi = hi.reduce(function(accumulator, currValue) {
    return accumulator - currValue                         // it will do 2 - 4 - 6 - 8 = -16
})

let newHi2 = hi.reduceRight(function(accumulator, currValue) {
    return accumulator - currValue                          // it will do 8 - 6 - 4 - 2 = -4
})

console.log(newHi);
console.log(newHi2);



// sorting an array -

let bye = [2, 7, 3, 6, 1];

console.log(bye);

bye.sort()                                                  // it will sort

console.log(bye)                                            // it will return sorted bye


// to get ascending and descending order -

let by1 = [9, 1, 8, 0, 4, 3];
let by2 = [9, 1, 8, 0, 4, 3];

by1.sort(compareNums);
by2.sort(compareNums2);

function compareNums(firstNumber, secondNumber) {
    return firstNumber - secondNumber               // logs out ascending order of numbers.
}

function compareNums2(firstNumber, secondNumber) {
    return secondNumber - firstNumber               // logs out ascending order of numbers.
}

console.log(by1);
console.log(by2);
