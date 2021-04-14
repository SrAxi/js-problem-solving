function fromLast(list, n) {
    let current = list
    let leftWindow = list
    let rightWindow = null
    let iterations = 0

    while (iterations < n) {
        current = current.next
        rightWindow = current
        iterations++
    }

    while (rightWindow.next !== null) {
        leftWindow = leftWindow.next
        rightWindow = rightWindow.next
    }

    return leftWindow
}
