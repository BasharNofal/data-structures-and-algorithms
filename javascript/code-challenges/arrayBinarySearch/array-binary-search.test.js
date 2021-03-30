const binarySearch = require('./array-binary-search.js')

describe('================ARRAY BINARY SEARCH================', () => {
    it("returns index if the number matches any element in the array, and -1 if it doesn't", () => {
        expect(2).toStrictEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],3));
        expect(8).toStrictEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],9));
        expect(-1).toStrictEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],10));
        expect(-1).toStrictEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],-2));
    })
})