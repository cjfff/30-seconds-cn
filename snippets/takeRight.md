### takeRight

从右到左返回数组的 `n` 个元素，使用 `Array.prototype.slice()` 去创建一个从右到左 `n` 位的拷贝。

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length)
```

```js
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```