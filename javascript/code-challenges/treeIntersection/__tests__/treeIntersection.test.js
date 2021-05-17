'use strict';

const treeIntersection = require('../treeIntersection');
const { BinaryTree, Node } = require('../../tree/tree');

describe('======================TREE INTERSECTION======================', () => {
    let firstBinaryTree,
        secondBinaryTree,
        thirdBinaryTree,
        forthBinaryTree;
    beforeAll(() => {
        let n1 = new Node(2),
            n2 = new Node(7),
            n3 = new Node(5),
            n4 = new Node(1),
            n5 = new Node(6),
            n6 = new Node(9),
            n7 = new Node(10),
            n8 = new Node(100),
            n9 = new Node(4),

            n21 = new Node(2),
            n22 = new Node(10),
            n23 = new Node(2),
            n24 = new Node(4),
            n25 = new Node(2),
            n26 = new Node(19),
            n27 = new Node(5),
            n28 = new Node(31),
            n29 = new Node(100),

            n31 = new Node(20),
            n32 = new Node(10),
            n33 = new Node(12),
            n34 = new Node(4),
            n35 = new Node(2),
            n36 = new Node(19),
            n37 = new Node(53),
            n38 = new Node(31),
            n39 = new Node(100),

            n41 = new Node(2),
            n42 = new Node(110),
            n43 = new Node(2),
            n44 = new Node(4),
            n45 = new Node(21),
            n46 = new Node(19),
            n47 = new Node(53),
            n48 = new Node(31),
            n49 = new Node(100);

        n1.left = n2;
        n1.right = n3;
        n2.left = n4;
        n2.right = n5;
        n3.right = n6;
        n5.left = n7;
        n5.right = n8;
        n6.left = n9;

        n21.left = n22;
        n21.right = n23;
        n22.left = n24;
        n22.right = n25;
        n23.right = n26;
        n25.left = n27;
        n25.right = n28;
        n26.left = n29;

        n31.left = n32;
        n31.right = n33;
        n32.left = n34;
        n32.right = n35;
        n33.right = n36;
        n35.left = n37;
        n35.right = n38;
        n36.left = n39;

        n41.left = n42;
        n41.right = n43;
        n42.left = n44;
        n42.right = n45;
        n43.right = n46;
        n45.left = n47;
        n45.right = n48;
        n46.left = n49;

        firstBinaryTree = new BinaryTree(n1);
        secondBinaryTree = new BinaryTree(n21);
        thirdBinaryTree = new BinaryTree(n31);
        forthBinaryTree = new BinaryTree(n41);
    });

    it('Should return array of values found in both trees', () => {
        expect(treeIntersection(firstBinaryTree, secondBinaryTree)).toEqual([2, 10, 100, 5, 4]);
        expect(treeIntersection(thirdBinaryTree, forthBinaryTree)).toEqual([4, 2, 53, 31, 19, 100]);
        expect(treeIntersection(forthBinaryTree, firstBinaryTree)).toEqual([2, 4, 100]);
    });
});