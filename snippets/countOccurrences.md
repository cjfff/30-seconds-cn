### countOccurrences

计算指定元素在数组中出现的次数

使用 `Array.prototype.reduce()` 去创建一个计数器，每当指定元素出现时，计时器 + 1。

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
```

```js
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
```