// Depending on what value we pass to variable a the output will change.

let a = undefined

if(a) {
    console.log('I am Truthy')
} else {
    console.log('I am Falsy')
}


// There are some values for which we will get false they are -
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// Nan (not a number)
// null
// undefined
// false
