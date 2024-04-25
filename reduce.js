// Reduce Method

// Definition - Reduce will always return a single value, it has an accumulator,
// in sum of all numbers the acc will be 0 and in mul it will be 1.

// Imperative way --

let num = [1, 2, 3, 4, 10]

let sumOfNums= 0 // Accumulator.

for (let i = 0; i < num.length; i++) {
    sumOfNums = sumOfNums + num[i]
}

console.log(sumOfNums);



// Declarative way -- (Reduce Method)

let result = num.reduce(function(acc, value) {
        updatedSum = acc + value;
        return updatedSum;
} , 0)

console.log(result);


// By arrow function --

let result2 = num.reduce((acc, value) => {
    updatedSum2 = acc + value;
    return updatedSum2;
} , 0)

console.log(result2);


// Multiplication --

let product = num.reduce((acc, value) => {
    updatedSum3 = acc * value;
    return updatedSum3;
} , 1)

console.log(product);
