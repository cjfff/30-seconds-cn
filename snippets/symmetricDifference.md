### symmetricDifference

返回2个数组之间的对称差（不进行去重）。为2个数组各创建一个 `Set`，然后对其各数组使用 `Array.prototype.filter()` 筛选出不在另外一个数组中的值。

```js
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
```

```js
symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]);
```
