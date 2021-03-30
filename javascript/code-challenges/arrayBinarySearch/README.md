# Array Binary Search

There plenty of ways to find whether a number exists in an array or not, but binary search is a very fast way when talking about arrays with 1000 elements for example assuming the array is sorted.

Binary search is basically dividing the array into two sections and each time the middle point element will be compared with number if the number greater than the element, then the elements with greater indexes will be ignored and vise versa until we have on element left in the array.

<hr>

## Challenge

Return the index of the element that matches with the number, if not return -1.
<hr>

## Approach & Efficiency

I used a while loop which will compare the starting point of the array(at index 0 at the beginning) and the end point (length of the array -1 at the beginning), each loop my code does two main things comparing the number with the element at the middle point and recalculating the start, middle, and end points according to the comparison result between the number and the element at the middle point.

<hr>

## Solution
<!-- Embedded whiteboard image -->