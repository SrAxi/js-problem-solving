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

const parsed5 = caseParser('HelloWorld hello-world hello', 'snake')
console.log('test5 - snake', parsed5, parsed5 === 'hello_world_hello_world_hello') // hello_world_hello_world_hello

const parsed6 = caseParser('HelloWorld hello-world hello', 'camel')
console.log('test6 - camel', parsed6, parsed6 === 'helloWorldHelloWorldHello') // helloWorldHelloWorldHello

const parsed7 = caseParser('HelloWorld hello-world hello', 'pascal')
console.log('test7 - pascal', parsed7, parsed7 === 'HelloWorldHelloWorldHello') // HelloWorldHelloWorldHello

const parsed8 = caseParser('HelloWorld hello-world hello', 'kebab')
console.log('test8 - kebab', parsed8, parsed8 === 'hello-world-hello-world-hello') // hello-world-hello-world-hello
```

