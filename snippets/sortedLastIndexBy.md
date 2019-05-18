### sortedLastIndexBy

基于传入的迭代函数，找到传入的 `n` 在有序数组中的最后一个位置。检查数组是有序还是降序，使用 `Array.prototype.map()` 传入 `fn` 返回要对比值的数组，再进行 `Array.prototype.reverse()` 翻转，最后使用 `Array.prototype.findIndex()` 去找到 `n` 的数值的位置。

```js
const sortedLastIndexBy = (arr, n, fn) => {
  const isDecsending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDecsending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
```


```js
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x) // 1
```