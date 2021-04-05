'use strict';

const LinkedList = require('../linked-list.js');
let linkedList = new LinkedList();
let singleNodeLL = new LinkedList();

describe('===============Linked List===============', () => {
    it('Should initiate linked list', () => {
        let firstValue = 5;
        linkedList.insert(firstValue);

        expect(linkedList.head.value).toEqual(firstValue);
        expect(linkedList.head.next).toBeNull();
    });

    it('Should add new node to the beginning of the linked list', () => {
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

    it('Should add new node at the end of the linked list', () => {
        let forthValue = 20;
        linkedList.append(forthValue);
        expect(linkedList.head.next.next.next.value).toEqual(20);
        expect(linkedList.head.next.next.next.next).toBeNull();
    });

    it('Should insert new node before the node whose value is sent', () => {
        let newVal = 3;
        linkedList.insertBefore(5, newVal);
        // console.log(linkedList.head.next);
        expect(linkedList.head.next.next.value).toEqual(3);
        expect(linkedList.head.next.next.next.value).toEqual(5);
    });

    it('Should insert new node after the node whose value is sent', () => {
        let newVal = 8;
        linkedList.insertAfter(15, newVal);
        expect(linkedList.head.next.value).toEqual(8);
        expect(linkedList.head.next.next.value).toEqual(10);
        expect(linkedList.length).toEqual(6);
    });

    it('Should return node is number (times) before the last node', () => {
        singleNodeLL.insert(30);

        expect(linkedList.farFromLast(linkedList.length)).toEqual(linkedList.head.value);
        expect(linkedList.farFromLast(4)).toEqual(10);
        expect(linkedList.farFromLast(0)).toEqual(20);
        expect(singleNodeLL.farFromLast(0)).toEqual(30);
        expect(singleNodeLL.farFromLast(100)).toEqual(`please, enter number is less that or equal to ${singleNodeLL.length}, and the number should be positive.`);
    });
});