'use strict';

function reverseArray(array) {
    let newArray = [];
    for (let counter = 0; counter < array.length; counter++) {
        newArr.push(array[(array.length - 1) - counter]);
    }
    return newArray;
}