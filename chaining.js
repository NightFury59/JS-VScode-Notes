// Chaining Method --

// Definition - By chaining we can chain one or more higher order functions.

// Q. From the transactions array filter out positive numbers 
// and return their sums.

let transactions = [1500, 2000, 4800, 50000, -75, 160];

let sumOfPositives = transactions.filter((amount) => {
    return amount > 0;
}). reduce(function(acc, value) {                       // Here we Chain by using '.'
    allSum = acc + value;
    return allSum;
}, 0)

console.log(sumOfPositives);
