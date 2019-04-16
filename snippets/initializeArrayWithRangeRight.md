### initializeArrayWithRangeRight

依照给定的范围以及步进去生成倒叙数组，首先用 `~~((end + 1 - start) / step)` 去计算数组长度，再用 map 进行遍历生成数组，这里用到的是 `(arr.length - i - 1) * step + start` 就能得到反序数组。

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

```js
initializeArrayWithRangeRight(20, 2, 2); // [ 20, 18, 16, 14, 12, 10, 8, 6, 4, 2 ]
```