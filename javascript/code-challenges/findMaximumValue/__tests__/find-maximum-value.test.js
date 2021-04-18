'use strict';

const {Node, BinaryTree} = require('../find-maximum-value.js');

describe('=================BINARY TREE MAX=================', () => {
    let binaryTree;
    beforeAll(() => {
        let n1 = new Node(2);
        let n2 = new Node(7);
        let n3 = new Node(5);
        let n4 = new Node(2);
        let n5 = new Node(6);
        let n6 = new Node(9);
        let n7 = new Node(5);
        let n8 = new Node(11);
        let n9 = new Node(4);

        n1.left = n2;
        n1.right = n3;
        n2.left = n4;
        n2.right = n5;
        n3.right = n6;
        n5.left = n7;
        n5.right = n8;
        n6.left = n9;

        binaryTree = new BinaryTree(n1);
    });

    it ('Should the maximum value in a binary tree', () => {
        expect(binaryTree.findMaximumValue()).toEqual(11);
    });
});