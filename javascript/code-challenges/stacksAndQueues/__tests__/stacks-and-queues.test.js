'use strict';

const Stack = require('../stacks-and-queues.js').Stack;
const Queue = require('../stacks-and-queues.js').Queue;

describe('==================STACK==================', () => {
    it('Should push new node to the stack', () => {
        let stack = new Stack()
        let firstValue = 5;
        let secondValue = 10;

        stack.push(firstValue);
        stack.push(secondValue);

        expect(stack.top.value).toEqual(secondValue);
        expect(stack.top.next.value).toEqual(firstValue);
        expect(stack.top.next.next).toBeNull();
    });

    it('Should pop node from the stack', () => {
        let stack = new Stack();
        let emptyStack = new Stack();
        let firstValue = 5;
        let secondValue = 10;
        stack.push(firstValue);
        stack.push(secondValue);

        let returnedValue = stack.pop();

        expect(stack.top.value).toEqual(firstValue);
        expect(returnedValue.value).toEqual(secondValue);
        expect(stack.top.next).toBeNull();
        expect(emptyStack.pop()).toEqual('Stack is empty');
    });

    it('Should return the node at the top of the stack', () => {
        let stack = new Stack();
        let emptyStack = new Stack();
        let firstValue = 5;
        let secondValue = 10;
        stack.push(firstValue);
        stack.push(secondValue);

        
        expect(stack.peek()).toEqual(stack.top);
        expect(emptyStack.peek()).toEqual('Stack is empty');
    });

    it('Should return true if the stack is empty and false if it is not', () => {
        let stack = new Stack();
        let emptyStack = new Stack();
        let firstValue = 5;
        
        stack.push(firstValue);
        
        expect(stack.isEmpty()).toBeFalsy();
        expect(emptyStack.isEmpty()).toBeTruthy();
    });
});

describe('==================QUEUE==================', () => {
    it('Should enqueue new node to the queue', () => {
        let queue = new Queue();
        let queueWithSingleNode = new Queue();
        let firstValue = 5;
        let secondValue = 10;
        let thirdValue = 15;

        queue.enqueue(firstValue);
        queue.enqueue(secondValue);
        queue.enqueue(thirdValue);
        queueWithSingleNode.enqueue(firstValue);

        expect(queue.front.value).toEqual(firstValue);
        expect(queue.front.next.value).toEqual(secondValue);
        expect(queue.back.value).toEqual(thirdValue);
        expect(queue.back.next).toBeNull();
        expect(queueWithSingleNode.front).toEqual(queueWithSingleNode.back);
    });

    it('Should dequeue node from the queue', () => {
        let queue = new Queue();
        let emptyQueue = new Queue();
        let firstValue = 5;
        let secondValue = 10; 
        queue.enqueue(firstValue);
        queue.enqueue(secondValue);
        let returnedValue = queue.dequeue();
        
        expect(returnedValue.value).toEqual(firstValue);
        expect(queue.front.value).toEqual(secondValue);
        expect(emptyQueue.dequeue()).toEqual('Queue is empty');
    });

    it('Should return the node at the front of the queue', () => {
        let queue = new Queue();
        let emptyQueue = new Queue();
        let firstValue = 5;
        let secondValue = 10; 
        queue.enqueue(firstValue);
        queue.enqueue(secondValue);

        expect(queue.peek()).toEqual(queue.front);
        expect(emptyQueue.peek()).toEqual('Queue is empty');
    });

    it('Should return true if the queue is empty and false if it is not', () => {
        let queue = new Queue();
        let emptyQueue = new Queue();
        let firstValue = 5;
        queue.enqueue(firstValue);

        expect(queue.isEmpty()).toBeFalsy();
        expect(emptyQueue.isEmpty()).toBeTruthy();
    });
});