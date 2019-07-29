/**
 * Create a function that returns the fibonacci index of a given number
 *
 * @param n
 * @returns {number}
 */
function findFibonacciNum(n) {
    const fibonacci = [0, 1];

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let currentIdx = 1;

    while (fibonacci[currentIdx] !== n) {
        const previous = fibonacci[currentIdx - 1];
        const current = fibonacci[currentIdx];
        const nextVal = previous + current;

        fibonacci.push(nextVal);
        currentIdx++;
    }

    return currentIdx;
}

/**
 * Create a function that generates a fibonacci array with the given length
 *
 * @param n
 * @returns {number[]}
 */
function createFibonacci(n) {
    const maxIdx = n - 1;
    const fibonacci = [0, 1];

    if (maxIdx === 0) {
        return [0];
    } else if (maxIdx === 1) {
        return fibonacci;
    }

    let idx = 1;

    while (idx < maxIdx) {
        const previous = fibonacci[idx - 1];
        const current = fibonacci[idx];
        const nextVal = previous + current;

        fibonacci.push(nextVal);
        idx++;
    }

    return fibonacci;
}

const testCollections1 = [
    { number: 0, result: 0 },
    { number: 1, result: 1 },
    { number: 3, result: 4 },
    { number: 5, result: 5 },
    { number: 8, result: 6 },
    { number: 55, result: 10 },
    { number: 144, result: 12 },
    { number: 89, result: 11 },
    { number: 1597, result: 17 },
    { number: 4181, result: 19 },
];

const testCollections2 = [
    { number: 5, result: [0, 1, 1, 2, 3] },
    { number: 10, result: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
    { number: 15, result: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377] },
    { number: 20, result: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181] },
];

module.exports = { findFibonacciNum, createFibonacci, testCollections1, testCollections2 };
