'use strict';

const { Node, KAryTree } = require('../fizz-buzz-tree.js');

describe('==================FIZZ BUZZ TREE==================', () => {
    it("Should replace with divisible numbers on 3 with Fizz, divisible numbers on 5 with Buzz and if it's divisible on both FizzBuzz, and if not replace them with string", () => {
        let n1 = new Node(2);
        let n2 = new Node(3);
        let n3 = new Node(5);
        let n4 = new Node(2);
        let n5 = new Node(6);
        let n6 = new Node(10);
        let n7 = new Node(15);
        let n8 = new Node(11);
        let n9 = new Node(9);

        n1.children = [n2, n3, n4];
        n2.children = [n5];
        n3.children = [n6, n7];
        n5.children = [n8];
        n6.children = [n9];

        let kAryTree = new KAryTree(n1);
        let newKAryTree = new KAryTree();

        newKAryTree.fizzBuzzTree(kAryTree);

        expect(newKAryTree.root.children[0].value).toEqual('Fizz');
        expect(newKAryTree.root.children[0].children[0].value).toEqual('Fizz');
        expect(newKAryTree.root.children[1].children[0].value).toEqual('Buzz');
        expect(newKAryTree.root.children[1].children[1].value).toEqual('FizzBuzz');
        expect(newKAryTree.root.children[0].children[0].children[0].value).toEqual('Not multiple of 3 nor 5');
    });
});