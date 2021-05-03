# Tree

* **Selection sort** algorithm is basically comparing a number in an array with remaining numbers in the array an swapping it with the least number in the whole array.
* The comparison will be starting from that number that we are comparing with rest of the numbers until the end of the array, since we are expecting to have sorted array before that number.

<hr>

## Challenge

* Sorting an array in ascending order using selection sort algorithm.
* *Selection sort* algorithm is basically comparing a number in an array with remaining numbers in the array an swapping it with the least number in the whole array.
* The comparison will be starting from that number that we are comparing with rest of the numbers until the end of the array, since we are expecting to have sorted array before that number.

<hr>

## Approach & Efficiency

* We are basically loop through all the array in the array and we are using a variable to refer to that number.
* In each loop we are looping through the array again but starting from next number.
* In each loop we are comparing the current number to the number from the first loop (upper level loop) until we get the least number in the array.
* Once the comparison is done (before starting new loop in the upper level loop) we are swapping positions between the least number that we got and the number from the upper level loop.

### Big O

**Space:** O(1)
**Time:** O(n^2)

<hr>

## Solution

![Whiteborad](../assets/selection-sort.png)
