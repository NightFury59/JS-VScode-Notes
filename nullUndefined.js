// 95% of the times the === operator is used , as it checks both the value and the type and wont cause bugs to exist
// but we will use == when needed in specific scenarios, but most of the times the strict equality operator is used.

console.log(null == null)               // true

console.log(null == undefined)          // true

console.log(null === undefined)         // false , interesting. Because the values are same but their types are different.

// null anything except null or undefined is false.


console.log({} == {})                   // false

const obj = {}

console.log(obj == {});                 // false

console.log(obj == obj)                 // true


// same for array --

console.log([] == [])                   // false

const arr = []

console.log(arr == []);                 // false

console.log(arr == arr)                 // true




