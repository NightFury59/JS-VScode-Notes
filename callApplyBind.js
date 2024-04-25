let person1  = {
    name : 'Steve',
    lastName : 'Rogers',
    age : 105,
}


let printDetails = function(city, power) {
    console.log(`Hi I am ${this.name} ${this.lastName} and my age is ${this.age} and i am from ${city} and i posses ${power}`)
}



let person2  = {
    name : 'Tony',
    lastName : 'Stark',
    age : 41,
}

//call
printDetails.call(person2, 'New York', 'Iron Man Armour');

// apply --
// call and apply are the same the only difference is that in apply you have to pass the argument
// in an array.


//apply
printDetails.apply(person2, ['New York', 'Iron Man Armour']);


// bind - Bind allows you to store a particular variable in a different function so that
// it allows you to invoke it later at a different point of time

let myPerson = printDetails.bind(person2, 'New York', 'Iron Man Armour');

console.log(myPerson)

myPerson()


// These 3 methods come in pretty handy when you are working with Object Oriented JavaScript.
