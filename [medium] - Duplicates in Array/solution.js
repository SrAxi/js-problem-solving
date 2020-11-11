/**
 * Using `reduce()`
 *
 */
const duplicates1 = a => a.reduce((acc, n) => {
    if (!acc.visited[n]) {
        acc.visited[n] = 1
    } else {
        acc.visited[n] = acc.visited[n] + 1
    }

    if (acc.visited[n] > 1 && !acc.result.includes(n)) {
        acc.result.push(n)
    }

    return acc
}, { visited: {}, result: [] }).result


/**
 * Using filter and Set
 *
 */
const duplicates2 = array => {
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    return [...new Set(findDuplicates(array))]
}

/**
 * Using Set and classic for loop
 *
 */
const duplicates3 = array => {
    const cache = {}
    let result = []

    for (let i = 0, len = array.length; i < len; i++) {
        if (cache[array[i]]) {
            result.push(array[i])
        } else {
            cache[array[i]] = true
        }
    }

    return [...new Set(result)]
}