'use strict'

const {leftJoin, HashTable} = require('../left-join');

describe('===============================LEFT JOIN===============================', () => {
    let firstTable,
        secondTable;
    
    beforeAll(() => {
        firstTable = new HashTable();
        secondTable = new HashTable();
        firstTable.add('name', 'Bashar');
        firstTable.add('name', 'Nofal');
        firstTable.add('test', 'test value');

        secondTable.add('name', 'Fathi');
        secondTable.add('name', 'Mohammad');
        secondTable.add('test key', "won't appear");        
    });

    it('Should return a new hashtable based on left joining two hashtables', () => {
        let hash1 = firstTable.getHash('name');
        let hash2 = firstTable.getHash('test');
        let hash3 = secondTable.getHash('test key');
        let joinedTable = leftJoin(firstTable,secondTable);
        
        expect(joinedTable.table[hash1].head.value.key).toEqual(firstTable.table[hash1].head.value.key);
        expect(joinedTable.table[hash1].head.value.value).toEqual(firstTable.table[hash1].head.value.value);
        expect(joinedTable.table[hash1].head.next.key).toEqual(firstTable.table[hash1].head.next.key);
        expect(joinedTable.table[hash1].head.next.next.value.key).toEqual(secondTable.table[hash1].head.value.key);
        expect(joinedTable.table[hash1].head.next.next.value.value).toEqual(secondTable.table[hash1].head.value.value);
        expect(joinedTable.table[hash2].head.value.key).toEqual(firstTable.table[hash2].head.value.key);
        expect(joinedTable.table[hash2].head.value.next).toEqual(firstTable.table[hash2].head.value.next);
        expect(joinedTable.table[hash3]).toBeUndefined();
    });
});

