'use strict';

function mergeSort(arr) {

    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let leftArr = [];
    let rightArr = [];

    for (let count = 0; count < mid; count++) {
        leftArr.push(arr[count]);
    }
    for (let count = 0; count < mid; count++) {
        rightArr.push(arr[mid + count]);
    }
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {

    let i = 0,
        j = 0,
        newArr = [];
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            newArr.push(leftArr[i]);
            i++;
        } else {
            newArr.push(rightArr[i]);
            j++;
        }
    }
    while (i < leftArr.length) {
        newArr.push(leftArr[i]);
        i++;
    }
    while (j < leftArr.length) {
        newArr.push(rightArr[i]);
        j++;
    }
    return newArr;
}

module.exports = mergeSort;