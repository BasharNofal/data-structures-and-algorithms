'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree.js');

describe('=================BINARY TREE=================', () => {
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

    it('Should return the value for each node in the tree in \"Pre-Order\" traversal', () => {
        expect(binaryTree.preOrder()).toEqual([2, 7, 2, 6, 5, 11, 5, 9, 4]);
    });

    it('Should return the value for each node in the tree in \"In-Order\" traversal', () => {
        expect(binaryTree.inOrder()).toEqual([2, 7, 5, 6, 11, 2, 5, 4, 9]);
    });

    it('Should return the value for each node in the tree in \"Post-Order\" traversal', () => {
        expect(binaryTree.postOrder()).toEqual([2, 5, 11, 6, 7, 4, 9, 5, 2]);
    });

    it('Should return an array with values of each node in the tree in \"Depth First\ traversal"', () => {
        expect(binaryTree.breadthFirst()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
    });
});

describe('=================BINARY SEARCH TREE=================', () => {
    let binarySearchTree;
    beforeAll(() => {
        let n1 = new Node(20);
        let n2 = new Node(15);
        let n3 = new Node(30);
        let n4 = new Node(10);
        let n5 = new Node(18);
        let n6 = new Node(25);
        let n7 = new Node(35);
        let n8 = new Node(5);

        n1.left = n2;
        n1.right = n3;
        n2.left = n4;
        n2.right = n5;
        n3.left = n6;
        n3.right = n7;
        n4.left = n8;

        binarySearchTree = new BinarySearchTree(n1);
    });

    it('Should add new node to the tree in the right place', () => {
        let firstValue = 8;
        let secondValue = 40;
        let thirdValue = 9;

        binarySearchTree.add(firstValue);
        binarySearchTree.add(secondValue);
        binarySearchTree.add(thirdValue);

        expect(binarySearchTree.root.left.left.left.right.value).toEqual(firstValue);
        expect(binarySearchTree.root.right.right.right.value).toEqual(secondValue);
        expect(binarySearchTree.root.left.left.left.right.right.value).toEqual(thirdValue);
    });

    it('Should return true if the node exists and false if it doesn\'t', () => {
        expect(binarySearchTree.contains(5)).toBeTruthy();
        expect(binarySearchTree.contains(35)).toBeTruthy();
        expect(binarySearchTree.contains(3)).toBeFalsy();
    });
});