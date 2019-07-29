/**
 * Kidnappers sent a ramson note.
 * Verify if it was created from the given magazine.
 *
 * @param m
 * @param n
 * @returns {boolean}
 */
function isNoteFromMagazine(m, n) {
    const toArray = s => s.match(/\w/g);

    const mArr = toArray(m);
    const nArr = toArray(n);

    for (let i = 0; i < nArr.length; i++) {
        const letter = nArr[i];

        if (mArr.includes(letter)) {
            const letterIdx = mArr.indexOf(letter);
            mArr.splice(letterIdx, 1);
        } else {
            return false;
        }
    }

    return true;
}

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

module.exports = { isNoteFromMagazine, testCollections };
