'use strict';

function repeatedWord(string) {
    let repeatedWords = [];
    let arr = splitString(string);

    for (let i = 0; i < arr.length - 1; i++) {
        let returnedValue = checkForDuplicates(arr, arr[i], i);
        if (returnedValue) {
            repeatedWords.push(returnedValue);
        }
    }
    if (repeatedWords.length > 1) {
        return returnFirstDuplicate(repeatedWords);
    }
    return repeatedWords.length ? repeatedWords[0].word : 'NO DUPLICATES WERE FOUND';
}
function splitString(string) {
    let arr = [];
    let combinedLetters = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' || string[i] === ',' || string[i] === ';' || string[i] === '?' || string[i] === '!' || string[i] === '/') {
            if (combinedLetters !== '') arr.push(combinedLetters);
            combinedLetters = '';
        } else if (i === string.length - 1) {
            combinedLetters += string[i];
            if (combinedLetters !== '') arr.push(combinedLetters);
        } else {
            combinedLetters += string[i];
        }
    }
    return arr;
}

function checkForDuplicates(arr, word, i) {
    for (let counter = i + 1; counter < arr.length; counter++) {
        if (word.toLowerCase() === arr[counter].toLowerCase()) {
            let wordAndIndex = { word, index: counter };
            return wordAndIndex;
        }
    }
}

function returnFirstDuplicate(arrOfRepeatedWords) {
    let wordWithMinIndex = arrOfRepeatedWords[0];
    for (let i = 1; i < arrOfRepeatedWords.length; i++) {
        if (wordWithMinIndex.index > arrOfRepeatedWords[i].index) {
            wordWithMinIndex = arrOfRepeatedWords[i];
        }
    }
    return wordWithMinIndex.word;
}

module.exports = repeatedWord;