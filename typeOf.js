let a = 2;

console.log(typeof a);

let b = 'Neeraj'

console.log(typeof b)

let c = true

console.log(typeof c)

let d = {
    name : 'Neeraj',
    age : 20
}

console.log(typeof d)

let arr = [2, 4]             // interesting case - We will get object as typeof arr , it interesting because in javascript arrays are objects.

console.log(typeof arr)     // to get the typeof array we have to use a method which is known as Array.isArray method


//Array.isArray - it will return a boolean value if it is an array or not.

let arr2 = [2, 4, 45, 54]

let checkForArray = Array.isArray(arr2)

console.log(checkForArray)
