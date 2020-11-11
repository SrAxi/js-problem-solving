## Create Fibonacci numbers


**Level:** Medium

**This exercise will assess the candidate's knowledge in:**
- Problem solving
- JavaScript language

**Problem:**
```javascript
/**
 * Create a function that generates a fibonacci array with the given length
*/

function createFibonacci(length) {
    // Your code here
}








// Test setup
const testCollections = [
    { length: 5, result: [0, 1, 1, 2, 3] },
    { length: 10, result: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
    { length: 15, result: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377] },
    { length: 20, result: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181] },
];
const test = () => {
    testCollections.forEach(({ length, result }) => {
        console.log(`${createFibonacci(length)} should be ${result}`)
    })
}

// Run test
test()
```

