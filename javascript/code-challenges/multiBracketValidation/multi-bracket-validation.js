'use strict';

module.exports = (string) => {
    let objOfMatchingBrackets = { '(': ')', '{': '}', '[': ']' };
    let openBracketsArr = [];

    let bracketsArr = string.split('').filter(element => element.match(/[\(\)\{\}\[\]]/g));
    for (let index = 0; index < bracketsArr.length; index++) {    
        if (bracketsArr[index] === '(' || bracketsArr[index] === '{' || bracketsArr[index] === '['){
            openBracketsArr.push(bracketsArr[index]);
        } else{
            let lastOpenBracket = openBracketsArr.pop();
            console.log(lastOpenBracket);
            if(bracketsArr[index] != objOfMatchingBrackets[lastOpenBracket]) {
                return false;
            }
        }
    }
    if (openBracketsArr.length){
        return false;
    }
    return true;
};