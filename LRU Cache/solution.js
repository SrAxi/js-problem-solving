// Approach #1 - O(n)
function LRUCache(maxSize) {
    let cache = []

    return {
        getAll() {
            return cache
        },
        get(key) {
            const foundItem = cache.find(x => x.key === key)

            if (foundItem) {
                const temp = cache.filter(x => x.key !== key)
                cache = [...temp, foundItem]
            }

            return foundItem ? foundItem.val : -1
        },
        put(key, val) {
            if (cache.length === maxSize) {
                cache.shift()
            }
            cache.push({ key, val })

            return cache
        }
    }
}

// Approach #2 - O(1) - Done by Miguel Rivero
function LRUCache(s) {
    const cache = new Map()
    const size = s

    function get(key) {
        let value = -1
        if (cache.has(key)) {
            value = cache.get(key)
            cache.delete(key)
            cache.set(key, value)
        }

        return value
    }

    function put(key, value) {
        if (cache.has(key)) {
            cache.delete(key)
        }
        cache.set(key, value)
        if (cache.size > size) {
            let firstKey
            for (let [key, _] of cache) {
                if (firstKey) break
                firstKey = key
            }
            cache.delete(firstKey)
        }

        return this
    }

    return {
        put,
        get,
    }
}





