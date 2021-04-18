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

    findMaximumValue() {
        function getMax(arr){
            let max = arr[0];
            for(let counter = 1; counter < arr.length; counter++){
                if(arr[counter] > max){
                    max = arr[counter];
                }
            }
            return max;
        }
        return getMax(this.preOrder());
    }
}

module.exports = { Node, BinaryTree };