'use strict';

function insertShiftArray(array, value){
    let newArray = [];
    for (let counter = 0; counter < array.length; counter++) {
        if (counter === Math.ceil(array.length / 2)) {
            newArray.push(value);
        }
        newArray.push(array[counter]);
    }
    return newArray;
};

describe('============SHIFT ARRAY FUNCTION============', () => {
    it('Inserts a value into the middle of an array', () => {
        expect(insertShiftArray([1, 2, 3, 4, 5, 6], 7)).toStrictEqual([1, 2, 3, 7, 4, 5, 6]);
    });
    
    it('Inserts a value into the middle of an array', () => {
        expect(insertShiftArray([1, 2, 3, 5, 6], 4)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
    
    it('Inserts a value into the middle of an array', () => {
        expect(insertShiftArray(['a', 'b', 'c', 'e', 'f'], 'd')).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });    
});