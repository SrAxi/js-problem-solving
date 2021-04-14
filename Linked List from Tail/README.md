## Linked List from Tail


**Level:** Hard

**This exercise will assess the candidate's knowledge in:**
- Linked Lists
- Problem solving
- Javascript
- Algorithms

**Problem:**
```javascript
/**
 We are in a bind now, and we need your help urgently,
 A client as requested to create a linked list from an array, which
 we did, and it was all good, until the client wanted to traverse the
 linked list from the tail!.
 Please, help us write such function, remember that while our small
 linked list implementation is fully functional, it lacks helpful methods such as size, and we do not have time to add it :(.
*/

// Linked List creation
function createLinkedList(array) {
    const current = {}
    array.reduce((curr, item, index) => {
        curr.value = item
        const newNode = Object.create(null)
        curr.next = index === array.length - 1 ? null : newNode
        return newNode
    }, current)
    return current
}

// TDD
const list = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(fromLast(list, 2).value) // 6
console.log(fromLast(list, 3).value) // 5
console.log(fromLast(list, 4).value) // 4
console.log(fromLast(list, 5).value) // 3
```

