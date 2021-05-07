'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = null;
    }

    append(value) {
        this.length++;
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    values() {
        let arrOfValues = [];
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            arrOfValues.push(current.value.value);
            current = current.next;
        }
        return arrOfValues;
    }
}

class HashTable {
    table = new Array(199);

    add(key, value) {
        let hash = this.getHash(key);

        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }
        this.table[hash].append({ key, value });
    }

    getHash(key) {
        let hash = 11;
        for (let index = 0; index < key.length; index++) {
            hash = hash * 239 * key.charCodeAt(index) % this.table.length;
        }
        return hash;
    }

    contains(key) {
        let hash = this.getHash(key);
        if(this.table[hash]){
            return true;
        }
        return false
    }

    find(key) {
        if(this.contains(key)){
            return this.table[this.getHash(key)].values();
        }
        return 'Key was not found';
    }

}

module.exports = HashTable;
