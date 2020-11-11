## Is Note from Magazine


**Level:** Medium

**This exercise will assess the candidate's knowledge in:**
- Problem solving
- JavaScript language
- RegEx (potentially, hopefully)

**Problem:**
```javascript
/**
 * Kidnappers sent a ransom note, verify if it was created from the given magazine.
 * Case sensitive. Check Tests, follow a TDD approach.
*/

function isNoteFromMagazine(m, n) {
    // Your code here
}








// Test setup
const TEST1 = { magazine: 'PUOMaysneillion', note: 'Pay Us One Million', result: true };
const TEST2 = { magazine: 'aeuLsutvhnfeu', note: 'Let us have fun', result: true };
const TEST3 = { magazine: 'Wanamoney', note: 'Wanna money', result: false };
const TEST4 = { magazine: 'wannamoney', note: 'Wanna money', result: false };
const TEST5 = { magazine: 'spaghettiammatricianaAS', note: 'Spaghetti Ammatriciana', result: true };
const testCollections = [
    TEST1,
    TEST2,
    TEST3,
    TEST4,
    TEST5
];
const test = () => {
    testCollections.forEach(({ magazine, note, result }) => {
        console.log(`${isNoteFromMagazine(magazine, note)} should be ${result}`)
    })
}

// Run test
test()
```

