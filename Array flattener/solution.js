// Approach #1
function flatten(arr) {
    if (!arr || !Array.isArray(arr)) return []

    const result = []

    const flat = a => a.forEach(elem => {
        if (Array.isArray(elem)) {
            flat(elem)
        } else {
            result.push(elem)
        }
    })

    flat(arr)
    return result
}


// Approach #1 (Simplified)
function flattenSimplified(arr) {
    if (!arr || !Array.isArray(arr)) return []

    const result = []
    const flat = a => a.forEach(elem => Array.isArray(elem) ? flat(elem) : result.push(elem))

    flat(arr)
    return result
}


// Approach #2
function flatten2(arr) {
    if (!arr || !Array.isArray(arr)) return []

    const flat = subArr => subArr.reduce((acc, val) => {
        Array.isArray(val) ? acc.push(...flatten(val)) : acc.push(val)
        return acc
    }, [])

    return flat(arr)
}

// Approach #3
function flatten3(arr) {
    return arr.flat(Infinity)
}
