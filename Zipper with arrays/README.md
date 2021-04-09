## Zipper with arrays

**Level:** Medium

**This exercise will assess the candidate's knowledge in:**

- Arrays
- Problem solving
- Javascript

**Problem:**

```javascript
/**
 The _.zip() method is used to create an array of grouped elements,
 the first of which contains the first elements of the given arrays,
 the second of which contains the second element of the given arrays, and so on.

 Create a method called `zip` that will follow above description.
 Spare elements should be returned in their separate array.
 */

const zipped1 = zip('abc', [1, 2, 3])
console.log('test1', JSON.stringify(zipped1)) // [["a", 1], ["b", 2], ["c", 3]]
console.log(`test1 ${zipped1.flat().join('')} === a1b2c3`, zipped1.flat().join('') === 'a1b2c3') // true

const zipped2 = zip('mm', 'aa')
console.log('test2', JSON.stringify(zipped2)) // [["m", "a"], ["m", "a"]]
console.log(`test2 ${zipped2.flat().join('')} === mama`, zipped2.flat().join('') === 'mama') // true

const zipped3 = zip('aaa', 'bb')
console.log('test3', JSON.stringify(zipped3)) // [["a", "b"], ["a", "b"], ["a"]]
console.log(`test3 ${zipped3.flat().join('')} === ababa`, zipped3.flat().join('') === 'ababa') // true

const zipped4 = zip('aa', 'bbb')
console.log('test4', JSON.stringify(zipped4)) // [["a", "b"], ["a", "b"], ["b"]]
console.log(`test4 ${zipped4.flat().join('')} === ababb`, zipped4.flat().join('') === 'ababb') // true

const zipped5 = zip('aa', 'bbbbbbb')
console.log('test5', JSON.stringify(zipped5)) // [["a","b"],["a","b"],["b"],["b"],["b"],["b"],["b"]]
console.log(`test5 ${zipped5.flat().join('')} === ababbbbbb`, zipped4.flat().join('') === 'ababb') // true
```

