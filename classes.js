let animal = {
    name: 'miguel',
    energy: 10,
    eat() {
        this.energy += 1;
    },
    play() {
        this.energy -= 1;
    },
    sleep() {
        this.energy += 2;
    }
}

animal.eat();
animal.eat();
animal.sleep();
console.log(animal.energy);

let animal2 = {
    name: 'lucia',
    energy: 20,
    eat() {
        this.energy += 1;
    },
    play() {
        this.energy -= 1;
    },
    sleep() {
        this.energy += 2;
    }
}

//DRY - Don't repeat yourself