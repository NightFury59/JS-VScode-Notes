// find(higher order function)

let transactions = [1500, 2000, 4800, 50000, -75, 160];

let firstNegative = transactions.find((n) => {
    return n < 0;
})

console.log(firstNegative);

// First Index

let firstNegative2 = transactions.findIndex((n) => {
    return n < 0;
})

console.log(firstNegative2);
