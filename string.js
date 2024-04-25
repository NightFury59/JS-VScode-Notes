let str = 'abcd';

console.log(str + 'efg') // abcdefg

console.log(str + 10)    // abcd10

console.log(str < 'z');   // true

console.log(str > 'z')   // false

console.log(str === 'abcd')  // true


console.log('Hello\nWorld')   // hello
//                               world

console.log(`Hello          
world`)                      // using backticks



console.log(`Result = ${10 + 20}`)     // Result = 30


console.log('This is a very ' + 
               'long string')      // this is a very long string


console.log('this is a very \
long string')                     // this is a very long string


let str2 = 'abcd';

console.log(str[1])           // b
console.log(str.charAt(1))    // b
console.log(str.includes('a')) // true
console.log(str.startsWith('a')) // true
console.log(str.endsWith('d'))   // true
console.log(str.toUpperCase())  // ABCD
console.log(str.toLowerCase())  // abcd

console.log(str.substr(1, 2))  // bc
console.log(str.substr(1))     // bcd
console.log(str.substr(0))     // abcd
console.log(str.slice(1, 2))   // b


console.log(str.padStart(10, '*'))     // it will make the string have the number of characters that are given.
console.log(str.padStart(3, '*'))      // here nothing will happen because the string is already larger than 3 characters.

// similar to padStart() there is padEnd() too.

let str7 = '          abcd'
console.log(str7.trim())               // trim() will remove the empty spaces

// there is also trimStart() that will trim the left hand side and trimEnd() that will trim the right hand side.

let str3 = 'a  b  c  d'
console.log(str3.split('b'));
console.log(str3.split('e')) // e is not there so we will just get the array.
