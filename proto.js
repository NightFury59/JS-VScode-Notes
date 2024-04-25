// A prototype object is an object that gets linked to your object by default whenever you create an object 
// inside that protoype object you can find all the methods that you can use with your 
// particular object. So this is what prototype is.

// Protoype Chaining - When one or more protoypes are getting chained with each other 
// then that is known as the prototype chaining. You need atleast two links to create a chain.

myObj = {}

console.log(myObj)

let person1 = {
    name : 'Adam', 
    age : 25
}

console.log(person1);
console.log(person1.hasOwnProperty('name'));


function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

let person2 = new Person('Clement', 25)

console.log(person2);
