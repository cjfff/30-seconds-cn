### longestItem

传入任意数量的可迭代对象（包含 `length` 属性），返回 `length` 最长的一个，如果有多个长度相同的，则返回第一个。如果不提供参数，将返回  `undefined`.

使用 `Array.prototype.reduce()` 去对比所有对象的  `length` 属性，返回长度最长的一个.


```js
const longestItem = (...vals) => vals.reduce((a, x) => (a.length > x.length ? a : x))
```


```js
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'
```