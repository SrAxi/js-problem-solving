const test1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))

// Helper function for calculating percentage
function calculatePercent(percent, num) {
    return (percent * 100) / num
}

// Actual implementation
function benfordsLawTest(arr) {
    const map = new Map()
    arr.forEach(num => {
        const firstDigit = +String(num).charAt(0)
        const count = map.get(firstDigit) ? map.get(firstDigit) + 1 : 1
        map.set(firstDigit, count)
    })

    const result = new Map()
    for (let [key, value] of map.entries()) {
        result.set(key, calculatePercent(value, arr.length))
    }

    const sortedResult = new Map([...result.entries()].sort((a, b) => b[1] - a[1]))
    for (let [key, value] of sortedResult.entries()) {
        console.log(`${key} = ${value}%`)
    }
}

benfordsLawTest(test1)