'use strict';

const LinkedList = require('./linked-list.js');
let linkedList = new LinkedList();

describe('===============Linked List===============', () => {
    it('Should initiate linked list', () => {
        let firstValue = 5;
        linkedList.insert(firstValue);

        expect(linkedList.head.value).toEqual(firstValue);
        expect(linkedList.head.next).toBeNull();
    });

    it('Should add new node to the beginning of the linked list', ()  => {
        let secondValue = 10;
        let thirdValue = 15;

        linkedList.insert(secondValue);
        linkedList.insert(thirdValue);

        // console.log(linkedList);

        expect(linkedList.head.value).toEqual(thirdValue);
        expect(linkedList.head.next.value).toEqual(secondValue);
        expect(linkedList.head.next.next.value).toEqual(5);
        expect(linkedList.head.next.next.next).toBeNull();
    });

    it("Should return true if the entered value exists and false if it doesn't", () => {
        let firstValue = 5;
        let thirdValue = 15;

        expect(linkedList.includes(thirdValue)).toBeTruthy();
        expect(linkedList.includes(firstValue)).toBeTruthy();
        expect(linkedList.includes(7)).toBeFalsy();
    });

    it('Should return linked list values as: "{ a } -> { b } -> { c } -> NULL"', () => {
        let firstValue = 5;
        let secondValue = 10;
        let thirdValue = 15;

        expect(linkedList.toString()).toStrictEqual(`{ ${thirdValue} } -> { ${secondValue} } -> { ${firstValue} } -> NULL`);
    });
});