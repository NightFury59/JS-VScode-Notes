// Encapsulation can be defined as “the packing of data and functions into one component”.

function Person(_name, _age) {
    var name =_name;
    this.age = _age;

    this.getName = function() {
        return name
    }
}

let person1 = new Person('Neeraj', '20');

console.log(person1.getName());
