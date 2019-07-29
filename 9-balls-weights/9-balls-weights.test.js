const { findOddLinear, findOddDivideAndConquer, testCollections } = require('./9-balls-weights');

describe('findOddLinear', () => {
    it('should find the correct odd ball', () => {
        testCollections.forEach(({ arr, result }) => {
            expect(findOddLinear(arr)).toBe(result);
        })
    });
});

describe('findOddDivideAndConquer', () => {
    it('should find the correct odd ball', () => {
        testCollections.forEach(({ arr, result }) => {
            expect(findOddDivideAndConquer(arr)).toBe(result);
        })
    });
});
