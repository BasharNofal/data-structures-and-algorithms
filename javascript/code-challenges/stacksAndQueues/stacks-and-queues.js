'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
    }

    pop() {
        if (this.top) {
            let poppedNode = this.top;
            this.top = poppedNode.next;
            poppedNode.next = null;
            return poppedNode;
        }
        return 'Stack is empty';
    }

    peek() {
        if (this.top) {
            return this.top;
        }
        return 'Stack is empty';
    }

    isEmpty() {
        if (this.top) {
            return false;
        }
        return true
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.front) {
            if (this.front === this.back) {
                this.front.next = newNode;
                this.back = newNode;
            } else {
                this.back.next = newNode;
                this.back = newNode;
            }
        } else {
            this.front = newNode;
            this.back = this.front;
        }
    }

    dequeue() {
        if (this.front && this.front.next) {
            let oldFront = this.front;
            this.front = this.front.next;
            oldFront.next = null;
            return oldFront;
        }

        if (this.front) {
            let oldFront = this.front;
            this.front = null;
            return oldFront;
        }

        return 'Queue is empty';
    }

    peek() {
        if (this.front) {
            return this.front;
        }

        return 'Queue is empty';
    }

    isEmpty() {
        if (this.front) {
            return false;
        }
        
        return true;
    }

}


module.exports = { Stack, Queue };