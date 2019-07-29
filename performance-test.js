const { performanceTest } = require('function-performance-test');
const { findOddLinear, findOddDivideAndConquer, testCollections } = require('./9-balls-weights/9-balls-weights');

// Logging tests
function functionsTester(length) {
    const arr = testCollections[2].arr;
    const testSubjects = [
        { fn: findOddLinear, args: [arr], options: { iterations: 100 } },
        { fn: findOddDivideAndConquer, args: [arr], options: { iterations: 100 } },
    ];
    const pt = performanceTest(testSubjects);
    const results = pt.run();
    results.forEach((result) => {
        console.log(`${result.functionName}, size: ${length}, average: ${result.averageTime}ms`);
    });
    console.log('---------------------');
}

// Testing performance
function testPerformance() {
    functionsTester(20);
    functionsTester(100);
    functionsTester(1000);
    functionsTester(2500);
    functionsTester(5000);
    functionsTester(7500);
    functionsTester(10000);
    functionsTester(12500);
    functionsTester(15000);
    // functionsTester(20000);
    // functionsTester(50000);
}

testPerformance();
