// we want a filtered array with only even numbers.

// Definition - Filter method returns a new array it will return all those elements 
// in the array that matches the specific condition.

let arr = [2, 45, 66, 876, 44, 43, 28, 22]

let evenArray = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
    evenArray.push(arr[i]);
 }
}

console.log(evenArray);

// Filter Method

// let arr = [2, 45, 66, 876, 44, 43, 28, 22]

let evenNumsArray = arr.filter(function(i) {
    return i % 2 == 0;
}) 

console.log(evenNumsArray);


// Using arrow function
let evenNumsArray2 = arr.filter((i) => {
    return i % 2 == 0;
});

console.log(evenNumsArray2);


// Practice Question --

let transactions = [1500, 2000, 4800, 50000, -75, 160];

let positiveValues = transactions.filter((m) => {
    return m > 0;
})

console.log(positiveValues);
