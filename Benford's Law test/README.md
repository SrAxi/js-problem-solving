## Benford's Law test


**Level:** Hard

**This exercise will assess the candidate's knowledge in:**
- Functions
- Objects
- Problem solving

**Problem:**
```javascript
/**
Benford's law is an observation about the frequency distribution of leading digits in many real-life sets of numerical data.
In sets that obey the law, the number 1 appears as the leading significant digit about 30% of the time, while 9 appears as the leading significant digit less than 5% of the time.
Leading number appearances according to Benford's law:
 1	30.1%	
 2	17.6%	
 3	12.5%	
 4	9.7%	
 5	7.9%	
 6	6.7%	
 7	5.8%	
 8	5.1%	
 9	4.6%

Write a function that when passed a random Array of numbers will return the a data set similar to the one above.
We want to know what's the appearance percentage of the leading number of each number in the given set.

The result needs to be ordered by descending percentage order. You can return this data in either way you choose.
*/

// Example
const test1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
benfordsLawTest(test1)

 // Example output
 // 1 = 16%
 // 8 = 13%
 // 5 = 12%
 // 4 = 12%
 // 6 = 11%
 // 7 = 11%
 // 9 = 10%
 // 3 = 7%
 // 2 = 7%
```

