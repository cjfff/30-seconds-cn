### sortedIndexBy

在有序的数组中插入一个值，返回最合适插入的下标, 对比的时候使用提供传入的迭代函数。

检查数组是升序还是降序，使用 `Array.prototype.findIndex()` 基于迭代函数 `fn` 去找到合适插入的下标。


```js
const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el =>
    isDescending ? val >= fn(el) : val <= fn(el)
  );
  return index === -1 ? arr.length : index;
};
```

```js
sortedIndexBy([{ x: 4 }, { x: 5 }, { x: 6 }], { x: 7 }, o => o.x); // 3
```