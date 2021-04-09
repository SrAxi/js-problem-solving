## Merge iterables


**Level:** Medium

**This exercise will assess the candidate's knowledge in:**
- Arrays
- Problem solving
- Javascript

**Problem:**
```javascript
/**
Create a method called `merge` that will merge the content of the two arguments that receives into one array.
*/

const merged1 = merge('abc', [1,2,3])
console.log('test1', JSON.stringify(merged1)) // ["a",1,"b",2,"c",3]
console.log('test1', merged1.join('') === 'a1b2c3') // true

const merged2 = merge('mm', 'aa')
console.log('test2', JSON.stringify(merged2)) // ["m","a","m","a"]
console.log('test2', merged2.join('') === 'mama') // true

const merged3 = merge('aaa', 'bb')
console.log('test2', JSON.stringify(merged3)) // ["a","b","a","b", "a"]
console.log('test2', merged3.join('') === 'ababa') // true

const merged4 = merge('aa', 'bbb')
console.log('test2', JSON.stringify(merged4)) // ["a","b","a","b", "b"]
console.log('test2', merged4.join('') === 'ababb') // true
```

