'use strict';

const HashTable = require('../hashtable.js');

describe('========================HASH TABLE========================', () => {
    let hashTable;

    beforeAll(() => {
        hashTable = new HashTable();
        hashTable.add('name', 'Bashar');
        hashTable.add('name', 'Nofal');
        hashTable.add('test', 'test value');
    });

    it('Should add new key value pair to the hash table', () => {

        let hash = hashTable.getHash('name');
        let hash2 = hashTable.getHash('test');

        expect(hashTable.table[hash].head.value.value).toEqual('Bashar');
        expect(hashTable.table[hash].head.value.key).toEqual('name');
        expect(hashTable.table[hash].head.next.value.value).toEqual('Nofal');
        expect(hashTable.table[hash].head.next.value.key).toEqual('name');
        expect(hashTable.table[hash2].head.value.value).toEqual('test value');
        expect(hashTable.table[hash2].head.value.key).toEqual('test');
        expect(hashTable.table[hash2].head.next).toBeNull();
    });

    it('Should return true if the key exists otherwise return false', () => {
        expect(hashTable.contains('name')).toBeTruthy();
        expect(hashTable.contains('testest')).toBeFalsy();
    });

    it('Should return array of values in a certain key', () => {
        expect(hashTable.find('name')).toEqual(['Bashar', 'Nofal']);
        expect(hashTable.find('test')).toEqual(['test value']);
        expect(hashTable.find('testest')).toEqual('Key was not found');
    });
});