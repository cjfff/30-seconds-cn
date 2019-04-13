### initialize2DArray


用传入的变量 `w` 和 `h` 去初始化一个二维数组，使用 `Array.prototype.mao()` 去迭代生成 `h` 个数组，每个数组的长度为 `w`, 每个元素都初始化为传入的 `val`, 如果 `val` 不传值，则默认为 `null`。

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val))
```

```js
console.log(initialize2DArray(3, 3, 10)); //[ [ 10, 10, 10 ], [ 10, 10, 10 ], [ 10, 10, 10 ] ]
```js