### findLast

使用 `Array.prototype.filter()` 去对数组进行过滤，留下 `truthy` 值的元素，再对结果进行 `Array.prototype.pop()` 即得到过滤后数组的最后一个元素。

```js
const findLast = (arr, fn) => arr.filter(fn).pop()
```

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```