/**
 * One-liner using RegEx and Reduce
 */
const addNumbers1 = text => text.match(/\d+/g).reduce((a, b) => a + +b, 0)

/**
 * One-liner using RegEx and Reduce without Number shorthand
 */
const addNumbers2 = text => text.match(/\d+/g).reduce((a, b) => a + Number(b), 0)
