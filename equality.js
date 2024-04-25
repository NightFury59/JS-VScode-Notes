console.log(5 == 5);            // "loose" equality, checks just values
console.log(5 === 5);           // "strict" equality, checks values as well as type

console.log(5 == '5');          // "true" as it doesnt check for type
console.log(5 === '5')          // "false" as type isnt same      



// ** Type Coercion ** //

console.log(false)                  // false

console.log(true)                   // true

console.log(Number(false))           // 0

console.log(Number(true))           // 1

console.log(false == 0)             // true

console.log(Number(false) == 0)     // true

console.log(true == 1)              // true

console.log(Number(true) == 1)      // true

console.log(Boolean(5))       // true

console.log(Boolean(0))        // false

console.log(typeof String(0))  // string

console.log(typeof false)      // boolean


// Not a Number --

console.log(Number('abc'))      // Nan

console.log(NaN == NaN)         // false

console.log('abc' == 'abc')     // true

// the string abc == anything except abc will be false.

