## LRU Cache


**Level:** Hard

**This exercise will assess the candidate's knowledge in:**
- Cache / LRU / Linked Lists _(potentially)_
- Problem solving
- Javascript
- Algorithms

**Problem:**
```javascript
/**
 Create an LRU Cache that will accept a max size as argument.


 const lRUCache = new LRUCache(2);
 lRUCache.put('a', 1); // cache is {'a'=1}
 lRUCache.put('b', 2); // cache is {'a'=1, 'b'=2}
 lRUCache.get('a');    // return 1
 lRUCache.put('c', 3); // LRU key was 'b', evicts key 'b', cache is {'a'=1, 'c'=3}
 lRUCache.get('b');    // returns -1 (not found)
 lRUCache.put('d', 4); // LRU key was 'a', evicts key 'a', cache is {'d'=4, 'c'=3}
 lRUCache.get('a');    // return -1 (not found)
 lRUCache.get('b');    // return 3
 lRUCache.get('d');    // return 4
*/

// Example 1:
const lRUCache = new LRUCache(2);
lRUCache.put('a', 1); // cache is {'a'=1}
lRUCache.put('b', 2); // cache is {'a'=1, 'b'=2}
lRUCache.get('a');    // return 1
lRUCache.put('c', 3); // LRU key was 'b', evicts key 'b', cache is {'a'=1, 'c'=3}
lRUCache.get('b');    // returns -1 (not found)
lRUCache.put('d', 4); // LRU key was 'a', evicts key 'a', cache is {'d'=4, 'c'=3}
lRUCache.get('a');    // return -1 (not found)
lRUCache.get('b');    // return 3
lRUCache.get('d');    // return 4

// Example 2:
const lRUCache = LRUCache(2)

console.log(JSON.stringify(lRUCache.put('a', 1))) // [{"key":"a","val":1}]
console.log(JSON.stringify(lRUCache.put('b', 2))) // [{"key":"a","val":1},{"key":"b","val":2}]
console.log(JSON.stringify(lRUCache.put('c', 3))) // [{"key":"b","val":2},{"key":"c","val":3}]
console.log(JSON.stringify(lRUCache.get('b'))) // 2
console.log(JSON.stringify(lRUCache.get('a'))) // -1
console.log(JSON.stringify(lRUCache.getAll())) // [{"key":"c","val":3},{"key":"b","val":2}]
```

