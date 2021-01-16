class Animal {
    constructor(name, energy, age = 30) {
        this.name = name;
        this.energy = energy;
        this.age = age
    }
    eat() {
        //
        this.energy += 1;
    }
    play() {
        this.energy -= 1;
    }

    sleep() {
        this.energy += 2;
    }
}

const animal = new Animal('miguel', 10);
animal.eat();
animal.play();
animal.sleep();
console.log(animal.energy);
//const animal2 = new Animal('lucia', 20);
//animal2.eat();
//console.log(animal2.age);
//console.log(animal2.energy);
const animal2 = new Animal('lucia', 20, 40);
console.log(animal2.age);

//Inherit Dog from Animal -> inheritance
class Dog extends Animal {
    constructor(name, energy, breed) {
       super(name, energy);
       this.breed = breed;
    }

    bark() {
        this.energy -= 2;
        console.log(`Barking ${this.energy}`);
    }

    sleep() {
       //Polymorphism
       super.sleep();
       console.log('The dog is spleeping'); 
    }
    jump(amount) {
        this.energy -= amount;
    }
}
const gil = new Dog('gil', 1000, 'visla');
gil.sleep();
console(gil.energy);
gil.jump(10);

//Inheritance vs. Composition 
