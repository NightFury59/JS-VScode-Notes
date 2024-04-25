let transactions = [1500, 2000, 4800, 50000, 160];

let inrToDollars = 80;


// Map returns a new array, for each doesnt return a new array but it justs console.logs the previous array with modifications.

// Mapping by arrow function
let convertedValues = transactions.map((amounts) => {
    return (amounts / inrToDollars).toFixed(0);
});

console.log(convertedValues)


// By normal mapping function
let convertedValues22 = transactions.map(function(amounts) {
    return (amounts / inrToDollars).toFixed(0);
});

console.log(convertedValues22)


// By forEach (in forEach we cant return, we have to console.log inside the function itself, we have to use inside the scope only)
let convertedValues1 = transactions.forEach((amounts) => {
    console.log((amounts / inrToDollars).toFixed(0));
});



const numbers = [1,2,3,4,5,6,7,8]

let squaredNumbers = numbers.map((n) => {
    return n * n;
})

console.log(squaredNumbers);
