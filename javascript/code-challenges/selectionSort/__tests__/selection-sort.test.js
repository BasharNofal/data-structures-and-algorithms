'use strict';

const selectionSort = require('../selection-sort.js');

describe('=====================SELECTION SORT=====================',() => {
    it('Should sort an array in ascending order', () => {
        
        let arr1 = [8,4,23,42,16,15];
        let arr2 = [20,18,12,8,5,-2];
        let arr3 = [5,12,7,5,5,7];
        let arr4 =  [2,3,5,7,13,11];

        expect(selectionSort(arr1)).toEqual(arr1.sort());
        expect(selectionSort(arr2)).toEqual(arr2.sort());
        expect(selectionSort(arr3)).toEqual(arr3.sort());
        expect(selectionSort(arr4)).toEqual(arr4.sort());
    });
});