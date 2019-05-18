### sortedLastIndex

返回数字 `n` 应插入有序数组中的最后位置。检查数组是升序还是降序，再使用 `Array.prototype.reverse()` 反转数组后再使用 `Array.protoype.findIndex()` 去找到最近的位置就是有序数组的最后位置。

```js
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr
    .reverse()
    .findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

```js
sortedLastIndex([10, 20, 30, 30, 40], 30); // 4);
```