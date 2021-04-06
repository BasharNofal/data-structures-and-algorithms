'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = null;
    }

    insert(value) {
        this.length++;
        let newNode = new Node(value);
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
        }
    }

    toString() {
        let current = this.head;
        let arrOfValues = [];

        while (current !== null) {
            // console.log(current);
            arrOfValues.push(`{ ${current.value} }`);
            current = current.next;
        }
        arrOfValues.push('NULL');
        return arrOfValues.join(' -> ');
    }

    append(value) {
        this.length++;

        if (this.length === 1) {
            this.insert(value);
        } else {
            let newNode = new Node(value);
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

    }

    zipLists(firstList, secondList) {
        let firstCurrent = firstList.head;
        let secondCurrent = secondList.head;

        while ('if statement is doing the work') {
            this.append(firstCurrent.value);
            this.append(secondCurrent.value);
            if (firstCurrent.next && secondCurrent.next) {
                firstCurrent = firstCurrent.next;
                secondCurrent = secondCurrent.next;
            } else {
                break;
            }

        }

        while (firstCurrent.next) {
            firstCurrent = firstCurrent.next;
            this.append(firstCurrent.value);
        }

        while (secondCurrent.next) {
            secondCurrent = secondCurrent.next;
            this.append(secondCurrent.value);
        }
    }
}
module.exports = LinkedList;