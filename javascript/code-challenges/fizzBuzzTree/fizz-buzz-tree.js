'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class KAryTree {
    constructor(root = null) {
        this.root = root;
    }

    fizzBuzzTree(tree) {
        this.root = tree.root;

        const _traverse = (node) => {
            if (!(node.value % 15)) {
                node.value = 'FizzBuzz';
            } else if (!(node.value % 5)) {
                node.value = 'Buzz';
            } else if (!(node.value % 3)) {
                node.value = 'Fizz';
            } else {
                node.value = 'Not multiple of 3 nor 5';
            }
            if (node.children.length) {
                for (let counter = 0; counter < node.children.length; counter++) {
                    _traverse(node.children[counter]);
                }
            }
        }
        _traverse(this.root);
    }
}

module.exports = { Node, KAryTree };