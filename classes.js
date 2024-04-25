// We will learn about classes and prototypal inheritance.

// The core idea of prototypal inheritance is that objects are able to inherit from other instantiated objects.

// We call the object that is inherited from the prototype.


const person = {
    isHuman: true
}

const child = Object.create(person);
child.maxAge = 18

console.log(person);                        // {isHuman : true}
console.log(child);                         // {}
console.log(child.isHuman)                  // true
console.log(person.maxAge)                  // undefined
console.log(child.maxAge)                   // 18

// we can also do

const person1 = {
    name: 'Neeraj'
}

const child1 = Object.assign(Object.create(person), {           // it takes a target and a source.
    maxAge: 21,
}) 

console.log(child1.maxAge)


// We can also add another parameter to Object.create and that parameter is going to be an object.
// But it is very lenghty -

const man = {
    isFemale: false
}

const son = Object.create(man, {
    age : {
        value: 22,
        writable: true,                 // is this valu changeable
        configurable: true,             // can we change any of the values on the object
        enumerable: true                // does this property needs to show up when we are iterating through the object.
    }
})

console.log(man.age)
console.log(son.age)


// The best methods are Object.assign or set the properties after creating the object.



// Lets see the chaining --


const person2 = {
    isHuman: true
}

const child2 = Object.assign(Object.create(person), {
    maxAge: 28
})

const john = Object.create(child2);
john.name = 'john'

// john has access to all the properties of person2 and child2
console.log(john.name);
console.log(john.maxAge);
console.log(john.isHuman);
console.log(john.__proto__.__proto__)   // to go up the prototype chain.

//         Alternative for .__proto__ below -
// we can use Object.getPrototypeOf to get the prototype -

console.log(Object.getPrototypeOf(john))            // recommended way


// if any of the object change it will change the properties on all the prototypes aswell

console.log(john.maxAge)        // 28

child2.maxAge = 30;

console.log(john.maxAge)        // 30


// ******* Interesting ******** //


// In JavaScript everything that is not a primitive is an object


const funcProto = Object.getPrototypeOf(() => {});
console.log(Object.getOwnPropertyNames(funcProto))


const arrayProto = Object.getPrototypeOf([])
console.log(Object.getOwnPropertyNames(arrayProto))


// The key point here is that arrays and functions are simply objects, they are objects with their 
// prototypes set to either object with the name object or the array object which has all of the properties
// which we can use on it 


// Lets have a look at function constructors now --

function Person3(name) {
    this.name = name;
}

Person3.prototype = {
    constructor: Person3,
    isHuman: true
}

const neeraj = new Person3('Neeraj')
console.log(neeraj)
console.log(neeraj.isHuman)
console.log(neeraj.__proto__);
console.log(Object.getPrototypeOf(neeraj))           // same thing as .__proto__

// the new keyword calls the function Person3 and assigns the this keyword to the new object




function Person4(name) {
    this.name = name;
}

const conner = new Person4('Conner');
const clement = new Person4('Clement');

console.log(conner)
console.log(clement)


/* the properties that we set inside of the actual constructor function are going to be essentially instance
properties, this.name is specific to a single person like we see above in the case of conner and clement they have
differet names they have the names that we passed to the constructor, but they have the same prototype */

console.log(Object.getPrototypeOf(conner) === Object.getPrototypeOf(clement))       // true

/* The conner object and the clement object share the same prototype object */


Person4.prototype.speak = function() {
    console.log('Hello this is ' + this.name)
}

conner.speak();
clement.speak()


// *** Lets take a look at an operator known as instanceof *** //


/* what instanceof does is takes on the left hand side a name of the object or an object and on 
the right hand side we take the function that we are checking if it is an instance of */

console.log(conner instanceof Person4)              // true
console.log(conner instanceof Object)               // true

console.log(conner instanceof Array)                // false, because conner is not an array

// However if we set the objects prototype to array then it will be true -

Object.setPrototypeOf(conner, Array.prototype)

console.log(conner instanceof Array);               // true
console.log(conner instanceof Object)               // still true


// ************************************************************************************************************ //


/* Lets assume we are using an old browser which does not have access to the push function
so lets create a function that can push the values */

// This concept is called as pollyfill - Pollyfills have bunch of functions which defines the functions a browser might not 

// Pollyfill are often wrapped inside an if check , 

if (Array.prototype.push === undefined) {
    Array.prototype.push = function(value) {
        this[this.length] = value
    }
}

arr = [1, 2, 3, 4]

arr.push(5);

console.log(arr)


// ******************************* MODERN CLASS SYNTAX ******************************** //


class Person5 {
    isHuman = true
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log('Hello this is ' + this.name)
    }
}

class child5 extends Person5 {
    #age
    constructor(name, age) {
        super(name)
        this.#age = age
    }
}

// If we want to make a property private we have to use the # symbol.

const child6 = new child5('John', 10);

console.log(child6 instanceof Person5)
console.log(child6.age)                     // undefined as we have used the private property symbol
console.log(child6.name)

child6.speak()

const niraj = new Person5('Niraj');
const tim = new Person5('Tim')

console.log()

console.log(niraj.name);
console.log(niraj.isHuman)
