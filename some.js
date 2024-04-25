// Some method

// Defintion - To get True or False based on a condition
// it will return true even if 1 value satisfies the condition. 

let transactions = [1500, 2000, 4800, 50000, -75, 160];

let value = transactions.some(function(n) {
    return n < 0;
})

console.log(value)

