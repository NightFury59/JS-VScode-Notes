// By using constructor function we can create an object template and with this template
// you can create multiple objects, methods you can call this methods for different objects.
// Constructor functions are kind of a template which helps you to create multiple objects at a time.

function createCar(_name, _brand, _color) {
    this.name = _name;
    this.brand = _brand;
    this.color = _color;

    this.drive = function(){
       console.log(`I am driving ${this.name} of ${this.color} color`);
    }
}

let car1 = new createCar('X4', 'BMW', 'RED');
console.log(car1);

let car2 = new createCar('S-class', 'Mercedes', 'White');
console.log(car2);

car2.drive();
