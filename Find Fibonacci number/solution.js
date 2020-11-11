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
