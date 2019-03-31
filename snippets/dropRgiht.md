### dropRight

使用 `Array.prototype.slice()` 操作数组从右到左丢弃 `n` 个元素，返回新数组

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n)
```

```js
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2; // [1]
dropRight([1, 2, 3], 42); // []
```