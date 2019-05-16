### sortedIndex

返回一个值插入有序数组的最合适的位置，检查数组是升序还是降序，使用 `Array.prototype.findIndex()` 去找到对应数值应该插入的最合适的位置。

```js
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
```

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 60); // 2
```