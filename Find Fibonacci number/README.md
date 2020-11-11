## Create Fibonacci numbers


**Level:** Medium

**This exercise will assess the candidate's knowledge in:**
- Problem solving
- JavaScript language

**Problem:**
```javascript
/**
 * Create a function that returns the fibonacci index of a given number
*/

function findFibonacciNum(number) {
    // Your code here
}








// Test setup
const testCollections = [
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
const test = () => {
    testCollections.forEach(({ number, result }) => {
        console.log(`${findFibonacciNum(number)} should be ${result}`)
    })
}

// Run test
test()
```

