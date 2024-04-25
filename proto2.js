// Prototype Chaining - The person1 and person2 are attatched to the Prototype Person and 
// the Prototype Person is attatched to Object Prototype. This way a chain is created.

// ** DRY RULE ** - Whenever you are programming in any programming language there is a rule
// known as dry rule that you should not repeat your code.
// In the example below we will get getNameandAge as same in both the person1 and person2 in browser output.
// we are providing that function body multiple times in an object


function Person(_name, _age) {
    this.name = _name;
    this.age = _age;

    this.getNameandAge = function() {
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
}

let person1 = new Person('Conner', 24);

let person2 = new Person('Steve', 30);

console.log(person1);

console.log(person2);


// Lets put the getNameandAge function inside the protoype object so that it doesnt create
// dry run and we can use getNameandAge whenever we want for any person object.


function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

Person.prototype.getNameandAge = function() {
    console.log(`I am ${this.name} and my age is ${this.age}`);
}

let person3 = new Person('Conner', 24);

let person4 = new Person('Steve', 30);

console.log(person3);

console.log(person4);


// What will happen is this function getNameandAge gets linked to the Prototype Person
// it will not get repeated but it will get linked. We have just incorporated that
// method inside that prototype.
