/**
 * Using function keyword and invoking
 *
 */
function foo() {
    let secret = 'shhhhh'

    return {
        getSecret() {
            return secret
        },
        setSecret(s) {
            secret = s
        }
    }
}

const x1 = foo()


/**
 * Using IIFE
 *
 */
const x2 = (function() {
    let secret = 'shhhhh'

    return {
        getSecret() {
            return secret
        },
        setSecret(s) {
            secret = s
        }
    }
})()
