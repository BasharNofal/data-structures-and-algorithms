'use strict';

const insertionSort = require('../insertion-sort.js');

describe('=====================INSERTION SORT=====================', () => {
    it('Should sort an array in ascending order using insertion sort algorithm', () => {
        let arr1 = [8, 4, 23, 42, 16, 15];
        let arr2 = [20, 18, 12, 8, 5, -2];
        let arr3 = [5, 12, 7, 5, 5, 7];
        let arr4 = [2, 3, 5, 7, 13, 11];

        expect(insertionSort(arr1)).toEqual(arr1.sort());
        expect(insertionSort(arr2)).toEqual(arr2.sort());
        expect(insertionSort(arr3)).toEqual(arr3.sort());
        expect(insertionSort(arr4)).toEqual(arr4.sort());
    });
});