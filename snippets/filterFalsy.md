### filterFalsy

使用 `Array.prototype.filter()` 过滤得到一个只包含 [`truthy`](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) 的新数组

```js
const filterFalsy = arr => arr.filter(Boolean)
```


```js
filterFalsy(['', true, {}, false, 'sample', 1, 0]) // [true, {}, 'sample', 1]
```