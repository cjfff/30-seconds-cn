### symmetricDifferenceBy

将提供的函数应用于2个数组之后，对比2个数组的对称差并返回。首先用2个数组应用提供的 `fn` 后的值的列表各创建一个 `Set`， 然后再对2个数组都使用 `Array.prototype.filter()` 去对数组进行不在其他数组中的一个过滤。

```js
const symmetricDifferenceBy = (a, b, fn) => {
  let sA = new Set(a.map(fn)),
    sB = new Set(b.map(fn));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
```

```js
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]
```