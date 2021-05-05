'use strict';

const mergeSort = require('../merge-sort.js');

describe('=====================MERGE SORT=====================',() => {
    it('Should sort an array in ascending order using merge sort algorithm', () => {
        
        let arr1 = [8,4,23,42,16,15];
        let arr2 = [20,18,12,8,5,-2];
        let arr3 = [5,12,7,5,5,7];
        let arr4 =  [2,3,5,7,13,11];

        expect(mergeSort(arr1)).toEqual(arr1.sort());
        expect(mergeSort(arr2)).toEqual(arr2.sort());
        expect(mergeSort(arr3)).toEqual(arr3.sort());
        expect(mergeSort(arr4)).toEqual(arr4.sort());
    });
});