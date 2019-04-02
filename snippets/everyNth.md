### everyNth

取数组中所有位置为 `nth` 倍数的元素。

使用 `Array.prototype.filter()` 去创建一个新的数组, 里面包含着所有下标为 `nth` 的倍数的元素。


```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

```js
everyNth([1, 2, 3, 4, 5, 6], 2)
```