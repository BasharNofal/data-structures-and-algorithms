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
            // console.log(current);
            arrOfValues.push(`{ ${current.value} }`);
            current = current.next;
        }
        arrOfValues.push('NULL');
        return arrOfValues.join(' -> ');
    }

    append(value) {
        let newNode = new Node(value);
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    insertBefore(value, newValue) {
        let newNode = new Node(newValue);
        let current = this.head;
        if (this.head.value === value) {
            this.insert(newVal);
        } else {
            while (current.next.value !== value) {
                current = current.next;
            }
            // console.log(current.next);
            newNode.next = current.next;
            current.next = newNode;
            // console.log(current)
        }
    }

    insertAfter(value, newValue) {
        let newNode = new Node(newValue);
        let current = this.head;
        while (current.value !== value) {
            current = current.next;
        }
        newNode.next = current.next
        current.next = newNode;        
    }
}

module.exports = LinkedList;