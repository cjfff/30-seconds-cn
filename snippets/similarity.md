### similarity

返回2个数组的交集，使用 `Array.prototype.filter()` 把不在 `values` 数组中的元素过滤，使用 `Array.prototype.includes()` 函数进行判断。

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))
```

```js
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]);
```