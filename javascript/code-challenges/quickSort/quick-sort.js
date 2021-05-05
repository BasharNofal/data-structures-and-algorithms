'use strict';

function quickSort(array, start, end){
  if (start < end){
    let position = partition(array, start, end);
    quickSort(array, start, position -1);
    quickSort(array, position + 1, end);
  }
  return array;
}

function partition(array, start, end){
  let pivot = array[end];
  let index = start -1;

  for(let count = start; count < end; count ++){
    if(array[count] <= pivot){
      index ++;
      swap(array, count, index);
    }
  }
  swap(array, end, index + 1);
  return index + 1;
}

function swap(array, count, low){
  let temp = array[count];
  array[count] = array[low];
  array[low] = temp;  
}

module.exports = quickSort;