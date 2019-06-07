### without

使用 `Array.prototype.filter()` 得出一个新的数组，不包含 (使用 `!Array.includes()`) 去得出符合条件的元素。

```js
const without = (arr, ...args) => arr.filter(v => !args.includes(v))
```

```js
console.log(without([2, 1, 2, 3], 1, 2)) // 3
```