// Inheritance - Methods or properties from the base class can be put down
// or can be passed to the derived class.

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}

class Teacher extends Person {
    constructor(_name, _age, _classStrength) {
        super(_name, _age)
        this.classStrength = _classStrength; 
    }
}

class Student extends Person {
    constructor(_name, _age, _cgpa) {
        super(_name, _age)
        this.cgpa = _cgpa; 
    }
}

let student1 = new Student('Neeraj', '20', '8')
let teacher1 = new Teacher('Mark', '50', '78');

console.log(student1);
console.log(teacher1);


// Method Inheritance;


class Person1 {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher1 extends Person1 {
    constructor(_name, _age, _classStrength) {
        super(_name, _age)
        this.classStrength = _classStrength; 
    }
    test1() {
        super.welcome();
    }
}

class Student1 extends Person1 {
    constructor(_name, _age, _cgpa) {
        super(_name, _age)
        this.cgpa = _cgpa; 
    }
}

let student2 = new Student1('Neeraj', '20', '8')
let teacher2 = new Teacher1('Mark', '50', '78');

console.log(student2);
console.log(teacher2);

student2.welcome()

