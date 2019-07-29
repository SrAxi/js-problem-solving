/*
* We have 9 balls, 8 have the same weight, 1 has a different weight.
* Write a function that will find the odd ball.
* Only one operation is allowed, to compare 1 ball with another one.
*/

function findOddLinear(balls) {
    const [first, second, third] = balls;
    const indexOf = (b) => balls.indexOf(b);

    if (first !== second) {
        return second !== third ? 1 : 0;
    }

    let idx = 2;

    while (idx < balls.length) {
        const current = balls[idx];

        if (current !== first) {
            return indexOf(current);
        }

        idx++;
    }
}

function findOddDivideAndConquer(balls) {
    const indexOf = (b) => balls.indexOf(b);
    const getOdd = (init, end) => {
        const chunk = balls.slice(init, end);
        const [first, second, third] = chunk;

        if (first !== second) {
            return second !== third ? indexOf(second) : indexOf(first);
        }
        if (first !== third) {
            return indexOf(third);
        }
        return null;
    };

    let init = 0;
    let end = 3;
    let currentResult = getOdd(init, end);

    while (currentResult === null) {
        init += 3;
        end += 3;
        currentResult = getOdd(init, end);
    }

    return currentResult;
}

const BALLS1 = { arr: [20, 20, 10, 20, 20, 20, 20, 20, 20], result: 2 };
const BALLS2 = { arr: [20, 20, 20, 20, 20, 20, 30, 20, 20], result: 6 };
const BALLS3 = { arr: [20, 20, 20, 20, 20, 20, 20, 20, 15], result: 8 };
const BALLS4 = { arr: [20, 20, 20, 20, 25, 20, 20, 20, 20], result: 4 };
const BALLS5 = { arr: [10, 20, 20, 20, 20, 20, 20, 20, 20], result: 0 };
const testCollections = [BALLS1, BALLS2, BALLS3, BALLS4, BALLS5];

module.exports = {
    findOddLinear,
    findOddDivideAndConquer,
    testCollections,
};
