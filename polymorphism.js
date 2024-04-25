// Polymorphism - The same named method is behaving differently for different
// objects. Or we can say it is getting overriden basically.

class Animal {
    sound () {
        console.log(`Animals make different sound`)
    }
}


class Dog {
    sound() {
        console.log(`Dogs Bark!`)
    }
}

class Cat {
    sound() {
        console.log(`Cats Mew!`);
    }
}

let animal1 = new Animal();
let tommy = new Dog();
let percy = new Cat();

animal1.sound()
tommy.sound()
percy.sound()
