 // Abstraction: Animal as a base class
class Animal {
    constructor(name, species, habitat) {
        this.name = name;
        this.species = species;
        this.habitat = habitat;
    }

    makeSound() {
        throw new Error("Subclasses must implement the makeSound method.");
    }
}

// Inheritance: Mammal, Bird, and Fish are subclasses of Animal
class Mammal extends Animal {
    constructor(name, species, habitat, furColor) {
        super(name, species, habitat);
        this.furColor = furColor;
    }

    giveBirth() {
        console.log(`${this.name} gives birth to offspring.`);
    }
}

class Bird extends Animal {
    constructor(name, species, habitat, wingspan) {
        super(name, species, habitat);
        this.wingspan = wingspan;
    }

    fly() {
        console.log(`${this.name} is flying with a wingspan of ${this.wingspan} units.`);
    }
}

class Fish extends Animal {
    constructor(name, species, habitat, finType) {
        super(name, species, habitat);
        this.finType = finType;
    }

    swim() {
        console.log(`${this.name} is swimming with ${this.finType} fins.`);
    }
}

// Polymorphism: Different animals can make different sounds
class Dog extends Mammal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

class Eagle extends Bird {
    makeSound() {
        console.log(`${this.name} screeches.`);
    }
}

class Shark extends Fish {
    makeSound() {
        console.log(`${this.name} makes underwater sounds.`);
    }
}

// Encapsulation: Attributes are encapsulated within their respective classes

// Example usage
const dog = new Dog("Buddy", "Canis lupus familiaris", "Home", "Brown");
const eagle = new Eagle("Thunder", "Aquila chrysaetos", "Mountains", 6);
const shark = new Shark("Jaws", "Carcharodon carcharias", "Oceans", "Dorsal");

dog.giveBirth(); // Outputs: Buddy gives birth to offspring.
eagle.fly();     // Outputs: Thunder is flying with a wingspan of 6 units.
shark.swim();    // Outputs: Jaws is swimming with Dorsal fins.
dog.makeSound(); // Outputs: Buddy barks.
eagle.makeSound();// Outputs: Thunder screeches.
shark.makeSound();// Outputs: Jaws makes underwater sounds.
// Abstraction: Animal as a base class
class Animal {
    constructor(name, species, habitat) {
        this.name = name;
        this.species = species;
        this.habitat = habitat;
    }

    makeSound() {
        throw new Error("Subclasses must implement the makeSound method.");
    }
}

// Inheritance: Mammal, Bird, and Fish are subclasses of Animal
class Mammal extends Animal {
    constructor(name, species, habitat, furColor) {
        super(name, species, habitat);
        this.furColor = furColor;
    }

    giveBirth() {
        console.log(`${this.name} gives birth to offspring.`);
    }
}

class Bird extends Animal {
    constructor(name, species, habitat, wingspan) {
        super(name, species, habitat);
        this.wingspan = wingspan;
    }

    fly() {
        console.log(`${this.name} is flying with a wingspan of ${this.wingspan} units.`);
    }
}

class Fish extends Animal {
    constructor(name, species, habitat, finType) {
        super(name, species, habitat);
        this.finType = finType;
    }

    swim() {
        console.log(`${this.name} is swimming with ${this.finType} fins.`);
    }
}

// Polymorphism: Different animals can make different sounds
class Dog extends Mammal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

class Eagle extends Bird {
    makeSound() {
        console.log(`${this.name} screeches.`);
    }
}

class Shark extends Fish {
    makeSound() {
        console.log(`${this.name} makes underwater sounds.`);
    }
}

// Encapsulation: Attributes are encapsulated within their respective classes

// Example usage
const dog = new Dog("Buddy", "Canis lupus familiaris", "Home", "Brown");
const eagle = new Eagle("Thunder", "Aquila chrysaetos", "Mountains", 6);
const shark = new Shark("Jaws", "Carcharodon carcharias", "Oceans", "Dorsal");

dog.giveBirth(); // Outputs: Buddy gives birth to offspring.
eagle.fly();     // Outputs: Thunder is flying with a wingspan of 6 units.
shark.swim();    // Outputs: Jaws is swimming with Dorsal fins.
dog.makeSound(); // Outputs: Buddy barks.
eagle.makeSound();// Outputs: Thunder screeches.
shark.makeSound();// Outputs: Jaws makes underwater sounds.
