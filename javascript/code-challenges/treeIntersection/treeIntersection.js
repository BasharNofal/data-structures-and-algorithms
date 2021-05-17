'use strict';

function treeIntersection(firstTree, secondTree) {
    let firstArray = firstTree.preOrder();
    let secondArray = secondTree.preOrder();

    return getIntersection(getUnique(firstArray), getUnique(secondArray));
}

function getUnique(array) {
    let set = new Set(array)
    return Array.from(set)
}

function getIntersection(firstArray, secondArray) {
    let arrayOfIntersections = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) arrayOfIntersections.push(secondArray[j]);
        }
    }
    return arrayOfIntersections;
}

module.exports = treeIntersection