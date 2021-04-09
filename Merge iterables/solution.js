function merge(item1, item2) {
    let first = 0, second = 0, result = []

    while (first < item1.length) {
        result = [...result, item1[first], item2[second]]
        first++
        second++
    }

    return result
}