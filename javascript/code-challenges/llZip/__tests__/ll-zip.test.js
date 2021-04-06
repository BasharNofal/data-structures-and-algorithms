'use strict';

const LinkedList = require('../ll-zip.js');

describe('==================LINKED LIST ZIP==================', () => {
    
    it('Should merge two linked lists with the same length', () => {
        let firstList = new LinkedList();
        firstList.insert(7);
        firstList.insert(5);
        firstList.insert(3);
        firstList.insert(1);
    
        let secondList = new LinkedList();
        secondList.insert(8);
        secondList.insert(6);
        secondList.insert(4);
        secondList.insert(2);
    
        let newList = new LinkedList();
        newList.zipLists(firstList, secondList);
        
        expect(newList.toString()).toEqual(`{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> NULL`)
    });

    
    it('Should merge two linked lists with different length', () => {
        let firstList = new LinkedList();
        firstList.insert(9);
        firstList.insert(7);
        firstList.insert(5);
        firstList.insert(3);
        firstList.insert(1);
    
        let secondList = new LinkedList();
        secondList.insert(8);
        secondList.insert(6);
        secondList.insert(4);
        secondList.insert(2);
    
        let newList = new LinkedList();
        newList.zipLists(firstList, secondList);

        expect(newList.toString()).toEqual(`{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> NULL`)
    });
});