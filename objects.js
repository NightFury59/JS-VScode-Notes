const person = {
    name : 'conner',
    course : 'frontEnd Expert',              // always add a trailing comma it is recommended.
}

console.log(person);

person.name = 'clement'
console.log(person)                           // even though it is constant we are still able to change the values inside.

// we can also convert the object to JavaScript standard notation for sending data back and forth to 
// the server or to use with other langauges it can be done by using JSON.stringify.

console.log(JSON.stringify(person))                        // this will convert the type from object to string.
console.log(typeof(JSON.stringify(person)))                // string

// we can convert it back to object by using JSON.parse() -

console.log(JSON.parse(JSON.stringify(person))) 
console.log(typeof(JSON.parse(JSON.stringify(person))))    // object


const map = new Map();
map.set(456, 'hello')
map.set(123, 'world');
console.log(map.get(123))       // hello
console.log(map.get(456))       // world
console.log(map.size)           // 2
console.log(map.get(0))         // if we map.get() something that isnt present it wont throw any error it will simply return undefined.


// similar to map there is also set except there arent key value pairs there are just values.

const set = new Set()
set.add('hello')
set.add('hello')                        // this is repeated so it wont affect anything and will be ignored.
set.add('world')
console.log(set)                        // set of hello world
console.log(set.has('hello'))           // true
console.log(set.has('hello world'))     // it will return false because it doesnt has it in one string.
console.log(set.size)                   // 2, if we repeat a value lets say we add one more set of 'hello' the size will still be 2.
console.log(set.delete('hello'))  
console.log(set.size)                   // now the size will be 1 as we deleted 'world'.




const myKey = 'key';
const website = {
    name : 'FrontEnd Expert',
    founder : 'CLement',
    teacher : 'Conner',
    isAwesome : true,
    'multi word key' : 0,              // we can also have keys having spaces, but for that we need to keep it in quote,
    student : 'Neeraj',                // without quotes we cant have a keyname having spaces.
    myKey : [1, 2, 3, 4]
}

console.log(website.student)

console.log(website.founder)
console.log(website.isAwesome)

// we can also add properties that werent there in the beginning like --

website.foo = 'Hello';

console.log(website);


// to delete properties we can use the delete keyword like --

delete website.foo;
console.log(website);                           


// ***** Two objects are not equal to each other ******** //

// console.log({} === {});               // false

//

const name = 'conner'
const obj = {
    name : name,
}

console.log(obj)


// also we can do -

const name2 = 'conner'
const obj2 = {
    name,
}

console.log(obj2)

// the syntax we were using till now is mostly used and is called object literal syntax
// but there is another syntax for objects -

const hello = new Object();
hello.name = 'Clement';
console.log(hello)



// Function Constructor --

function Website(name, rating, founder) {
    this.name = name;
    this.rating = rating;
    this.founder = founder;
}

const hello3 = new Website('FrontEnd Expert', '10', 'Clement');
console.log(hello3)


//////

const id = Symbol('id');

const obj5 = {
    [id] : 1234,
}

console.log(obj5);


// *** Checking if a key is present in the objec *** //
// there are multiple ways like listed below -

const person2 = {
    name : 'conner',
    course : 'frontEnd Expert',              
}


console.log('name' in person2);
console.log(person2.hasOwnProperty('name'));            // recommended.
console.log(person2.name !== undefined);


// methods --


const person3 = {
    name : 'conner',
    course : 'frontEnd Expert',
    sayHello : () => console.log('hello'),              // 1st way
}

person3.sayHello();


const person4 = {
    name : 'conner',
    course : 'frontEnd Expert',
    sayHello() {
        console.log('hello');                           // 2nd way
    }              
}

person4.sayHello();


// getter and setter methods.

// get
const person11 = {
    name : 'conner',
    course : 'frontEnd Expert',
    get getName() {
        return this.name;
    }              
}

console.log(person11.getName)                       // conner

const person12 = {
    name : 'conner',
    course : 'frontEnd Expert',
    rating : 6,
    set setRating(value) {
        this.rating = value;
    }              
}

person12.setRating = 5
console.log(person12.rating);                   // 5

// Inheritance--

const person8 = {
    name : 'conner',
    course : 'frontEnd Expert',
}

const obj8 = {
    __proto__ : person3
}

console.log(obj8.name);
console.log(obj8.course);



// Copying an Object ***Object.assign*** //

const my = {
    name : 'Neeraj',
    age : 20,
}

const hy = {
    sports : 'Cricket',
    role : 'batting', 
}

Object.assign(hy, my);              // it will copy all key : values of object my into object hy.

console.log(hy)     



// To make an object immutable we can use the object.freeze() method.

const ty = {
    name : 'Neeraj',
}

Object.freeze(ty)

ty.age = 20;            // it wont add this.
console.log(ty)

// to check if the object is frozen we use Object.isFrozen --

console.log(Object.isFrozen(ty))


// there is also a similar property called Object.seal() it is like freeze, but here we just cant add new properties
// but we can change the values of existing properties.


// some additional functions--

const ty2 = {
    name : 'Neeraj',
}

console.log(ty2.valueOf())

ty2.valueOf  = function(){
    return 4;
}

console.log(ty2 - 1)


// [Symbol.toPrimitive] (hint) --- it takes in 3 parameters that are Number, string and default.


const ty3 = {
    name : 'Neeraj',
    [Symbol.toPrimitive] (hint) {
        if (hint === 'number') {
            return 2;
        } else if (hint === 'string') {
            return 'Hello'
        } 
        return 3;
    }
}

console.log(Number(ty3));
console.log(String(ty3))
