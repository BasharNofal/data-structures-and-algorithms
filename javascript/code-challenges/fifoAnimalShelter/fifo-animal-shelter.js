'use strict';

class Animal {
    constructor(name, species) {
        this.nameAndSpecies = { name, species };
        this.next = null;
    }
}

class AnimalShelter {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(animal) {
        if (animal.species.toLowerCase() === 'dog' || animal.species.toLowerCase() === 'cat') {
            let newAnimal = new Animal(animal.name, animal.species.toLowerCase());
            if (!this.front) {
                this.front = newAnimal;
                this.back = newAnimal;
            } else {
                this.back.next = newAnimal;
                this.back = newAnimal
            }
        } else {
            return 'Please enter cat or dog only';
        }
    }

    dequeue(species) {
        if (species.toLowerCase() === 'dog' || species.toLowerCase() === 'cat') {
            if (this.front.nameAndSpecies.species === species.toLowerCase()) {
                let oldFront = this.front;
                this.front = this.front.next;
                oldFront.next = null;
                return oldFront.nameAndSpecies.name;
            }

            let current = this.front;
            while (current.next) {
                if (current.next.nameAndSpecies.species === species.toLowerCase()) {
                    let dequeuedAnimal = current.next;
                    current.next = current.next.next;
                    dequeuedAnimal.next = null;
                    return dequeuedAnimal.nameAndSpecies.name;
                }
                current = current.next;
            }
            return `The shelter doesn't have ${species}s`;
        }
        return `${species} isn't cat nor dog`;
    }
}

module.exports = AnimalShelter;