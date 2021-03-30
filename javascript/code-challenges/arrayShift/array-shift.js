'use strict';

module.exports = function insertShiftArray(array, value){
    let newArray = [];
    for (let counter = 0; counter < array.length; counter++) {
        if (counter === Math.ceil(array.length / 2)) {
            newArray.push(value);
        }
        newArray.push(array[counter]);
    }
    return newArray;
};