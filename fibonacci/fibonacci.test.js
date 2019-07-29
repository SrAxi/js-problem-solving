const { findFibonacciNum, createFibonacci, testCollections1, testCollections2 } = require('./fibonacci');


describe('fibonacci', () => {
    it('should be able to find the index in the fibonacci series of the given number', () => {
        testCollections1.forEach(({ number, result }) => {
            expect(findFibonacciNum(number)).toBe(result);
        })
    });
    it('should be able to create an array of fibonacci numbers with the given length', () => {
        testCollections2.forEach(({ number, result }) => {
            expect(createFibonacci(number)).toEqual(result);
        })
    });
});
