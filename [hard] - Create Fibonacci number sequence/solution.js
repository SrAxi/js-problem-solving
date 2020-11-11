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
