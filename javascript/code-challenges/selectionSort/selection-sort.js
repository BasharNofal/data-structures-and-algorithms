'use strict';

function selectionSort(array) {
    for (let counter1 = 0; counter1 < array.length - 1; counter1++) {
        let min = counter1;
        for (let counter2 = counter1 + 1; counter2 < array.length; counter2++) {
            if (array[counter2] < array[min]) {
                min = counter2;
            }
        }
        let temp = array[min];
        array[min] = array[counter1];
        array[counter1] = temp;
    }
    return array;
}

module.exports = selectionSort;