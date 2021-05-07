'use strict';

// [8,4,23,42,16,15] || j = 0  || i = 1 || temp = 4
// [8,8,23,42,16,15] || j = -1 || i = 1 || temp = 4
// [4,8,23,42,16,15] || j = 3  || i = 4 || temp = 16
// [4,8,23,42,42,15] || j = 2  || i = 4 || temp = 16
// [4,8,23,23,42,15] || j = 2  || i = 4 || temp = 16
// [4,8,16,23,42,15] || j = 4  || i = 5 || temp = 15
// [4,8,16,16,23,42] || j = 3  || i = 5 || temp = 15
// [4,8,15,16,23,42] || j = 2  || i = 5 || temp = 15

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i]; 
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

module.exports = insertionSort;
