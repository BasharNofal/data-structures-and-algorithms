'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let array = [];
        const _traverse = (node) => {
            array.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return array;
    }

    inOrder() {
        let array = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            array.push(node.value);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return array;
    }

    postOrder() {
        let array = [];
        const _traverse = node => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            array.push(node.value);
        }
        _traverse(this.root);
        return array;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    add(value) {
        let newNode = new Node(value);

        const _addNode = node => {
            if (newNode.value > node.value) {
                if (!node.right) node.right = newNode;
                _addNode(node.right);
            }

            if (newNode.value < node.value) {
                if (!node.left) node.left = newNode;
                _addNode(node.left);
            }
        }
        _addNode(this.root);
    }

    contains(value) {
        const _search = node => {
            if (value === node.value) return true;
            if (value > node.value) {
                if (node.right) return _search(node.right);
            }
            if (value < node.value) {
                if (node.left) return _search(node.left);
            }
            return false;
        }
        return _search(this.root)
    }
}

module.exports = { Node, BinaryTree, BinarySearchTree };