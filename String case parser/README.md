## String case parser


**Level:** Medium

**This exercise will assess the candidate's knowledge in:**
- Strings
- RegEx _(hopefully)_
- Javascript

**Problem:**
```javascript
/**
Create a method called `caseParser` that will parse whatever input string 
 into whatever case is passed as second parameter.
*/

const parsed1 = caseParser('hello_world', 'pascal')
console.log('test1 - pascal', parsed1, parsed1 === 'HelloWorld') // HelloWorld

const parsed2 = caseParser('HelloWorld', 'kebab')
console.log('test2 - kebab', parsed2, parsed2 === 'hello-world') // hello-world

const parsed3 = caseParser('hello-world', 'camel')
console.log('test3 - camel', parsed3, parsed3 === 'helloWorld') // helloWorld

const parsed4 = caseParser('HelloWorld', 'snake')
console.log('test4 - snake', parsed4, parsed4 === 'hello_world') // hello_world
```

