module.exports = function binarySearch(array, num) {

    let startPoint = 0;
    let length = array.length;

    while (startPoint <= length - 1) {

        let midPoint = Math.floor((startPoint + length - 1) / 2);

        if (array[midPoint] < num) {
            startPoint = midPoint + 1;
        } else if (array[midPoint] > num) {
            length = midPoint;
        } else {
            return midPoint;
        }
    }
    return -1;
}

