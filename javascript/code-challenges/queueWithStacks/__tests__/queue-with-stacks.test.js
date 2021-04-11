'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('==================PSEUDO QUEUE==================', () => {
    it('Should initiate pushStack', () => {
        let queue = new PseudoQueue();
        let firstValue = 5;
        let secondValue = 10;
        let thirdValue = 15;

        queue.enqueue(firstValue);
        queue.enqueue(secondValue);
        queue.enqueue(thirdValue);

        expect(queue.pushStack.top.value).toEqual(thirdValue);
        expect(queue.pushStack.top.next.next.value).toEqual(firstValue);
    });

    it('Should dequeue the front node from the queue', () => {
        let queue = new PseudoQueue();
        let firstValue = 5;
        let secondValue = 10;
        let thirdValue = 15;

        queue.enqueue(firstValue);
        queue.enqueue(secondValue);
        queue.enqueue(thirdValue);

        expect(queue.dequeue().value).toEqual(firstValue);
        expect(queue.dequeue().value).toEqual(secondValue);
        expect(queue.dequeue().value).toEqual(thirdValue);
        expect(queue.dequeue()).toEqual('Queue is empty');
    });
});