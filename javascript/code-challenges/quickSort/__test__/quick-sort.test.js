'use strict';

const quickSort = require('../quick-sort.js');

describe('=====================QUICK SORT=====================', () => {
    it('Should sort an array in ascending order using quick sort algorithm', () => {

        let arr1 = [8, 4, 23, 42, 16, 15];
        let arr2 = [20, 18, 12, 8, 5, -2];
        let arr3 = [5, 12, 7, 5, 5, 7];
        let arr4 = [2, 3, 5, 7, 13, 11];

        expect(quickSort(arr1, 0, arr1.length - 1)).toEqual(arr1.sort());
        expect(quickSort(arr2, 0, arr2.length - 1)).toEqual(arr2.sort());
        expect(quickSort(arr3, 0, arr3.length - 1)).toEqual(arr3.sort());
        expect(quickSort(arr4, 0, arr4.length - 1)).toEqual(arr4.sort());
    });
});