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
}


class PseudoQueue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value) {
        this.pushStack.push(value);
    }

    dequeue() {
        if (this.popStack.top || this.pushStack.top) {
            if (!this.popStack.top) {
                while (this.pushStack.top) {
                    this.popStack.push(this.pushStack.pop().value);
                }
            }
            return this.popStack.pop();
        }
        return 'Queue is empty';
    }
}

module.exports = PseudoQueue;