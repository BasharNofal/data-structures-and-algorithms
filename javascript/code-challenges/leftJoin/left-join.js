'use strict';

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
}

function leftJoin(firstTable, SecondTable) {
    let thirdHashTable = new HashTable();

    for (let i = 0; i < firstTable.table.length; i++) {
        if (firstTable.table[i]) {
            thirdHashTable.table[i] = firstTable.table[i];

            let firstTableKey = firstTable.table[i].head.value.key;
            let secondTableHash = SecondTable.getHash(firstTableKey);
            
            if (SecondTable.table[secondTableHash]) {
                let current = thirdHashTable.table[i].head;
                while (current.next) {
                    current = current.next;
                }
                current.next = SecondTable.table[secondTableHash].head;
            } else {
                let hash = firstTable.table[i].head.value.key;
                thirdHashTable.add(hash, "NULL");
            }
        }
    }
    return thirdHashTable;
}

module.exports = {leftJoin, HashTable};