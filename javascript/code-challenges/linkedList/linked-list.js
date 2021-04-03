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
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
        }
    }

    includes(num) {
        let current = this.head;
        // console.log(current);
        while (current !== null) {
            // console.log('=======CURRENT VALUE', current.value);
            if (current.value === num) {
                return true;
            } else {
                current = current.next;
            }
        }
        return false;
    }

    toString() {
        let current = this.head;
        let arrOfValues = [];

        while (current !== null) {
            console.log(current);
            arrOfValues.push(`{ ${current.value} }`);
            current = current.next;
        }
        arrOfValues.push('NULL');
        return arrOfValues.join(' -> ');
    }
}

module.exports = LinkedList;