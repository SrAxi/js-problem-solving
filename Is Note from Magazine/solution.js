/**
 * Approach 1
 *
 * @param m
 * @param n
 * @returns {boolean}
 */
function isNoteFromMagazine1(m, n) {
    const toArray = s => s.match(/\w/g)

    const mArr = toArray(m)
    const nArr = toArray(n)

    for (let i = 0; i < nArr.length; i++) {
        const letter = nArr[i]

        if (mArr.includes(letter)) {
            const letterIdx = mArr.indexOf(letter)
            mArr.splice(letterIdx, 1)
        } else {
            return false
        }
    }

    return true
}

/**
 * Approach 2
 *
 * @param m
 * @param n
 * @returns {boolean}
 */
function isNoteFromMagazine2(m, n) {
    const toArray = s => s.match(/\w/g)

    const mArr = toArray(m)
    const nArr = toArray(n)

    return nArr.every(letter => {
        if (mArr.includes(letter)) {
            const letterIdx = mArr.indexOf(letter)
            mArr.splice(letterIdx, 1)
            return true
        } else {
            return false
        }
    })
}
