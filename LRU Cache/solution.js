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
