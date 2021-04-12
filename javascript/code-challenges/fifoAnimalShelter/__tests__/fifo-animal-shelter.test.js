'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('=======================ANIMAL SHELTER=======================', () => {
    it('Should add new animal to the shelter if it only was cat or dog', () => {
        let animal1 = { name: 'test', species: 'dog' };
        let animal2 = { name: 'test2', species: 'cat' };
        let animal3 = { name: 'test', species: 'human' };

        let shelter = new AnimalShelter();

        shelter.enqueue(animal1);
        shelter.enqueue(animal2);
        // console.log(shelter);
        expect(shelter.front.nameAndSpecies.name).toEqual(animal1.name);
        expect(shelter.front.next.nameAndSpecies.name).toEqual(animal2.name);
        expect(shelter.enqueue(animal3)).toEqual('Please enter cat or dog only');
    });

    it('Should return dog or cat (according to the input) from the shelter', () => {
        let animal1 = { name: 'test', species: 'cat' };
        let animal2 = { name: 'test2', species: 'cat' };
        let animal3 = { name: 'test3', species: 'dog' };
        let animal4 = { name: 'test4', species: 'cat' };
        let randomSpecies = 'human';
        let shelter = new AnimalShelter();

        shelter.enqueue(animal1);
        shelter.enqueue(animal2);
        shelter.enqueue(animal3);
        shelter.enqueue(animal4);

        expect(shelter.dequeue(randomSpecies)).toEqual(`${randomSpecies} isn't cat nor dog`);
        expect(shelter.dequeue('cat')).toEqual(animal1.name);
        expect(shelter.dequeue('dog')).toEqual(animal3.name);
        expect(shelter.dequeue('dog')).toEqual(`The shelter doesn't have dogs`);
    });
});