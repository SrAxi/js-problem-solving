// Approach #1
function zip(item1, item2) {
    let first = 0, second = 0, result = []
    const longest = Math.max(item1.length, item2.length)

    while (first < longest) {
        const localResult = [
            ...(first <= item1.length ? [item1[first]] : []),
            ...(second <= item2.length ? [item2[second]] : []),
        ]

        result = [...result, localResult]
        first++
        second++
    }

    return result
}


// Approach #2
function zip(item1, item2) {
    let result = []
    const longest = Math.max(item1.length, item2.length)

    for (let i = 0; i < longest; i++) {
        const localResult = [
            ...(i + 1 <= item1.length ? [item1[i]] : []),
            ...(i + 1 <= item2.length ? [item2[i]] : []),
        ]

        result = [...result, localResult]
    }

    return result
}

