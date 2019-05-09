### reduceSuccessive

对数组的每个元素执行提供的函数(从左到右)，再返回一个新的数组。使用 `Array.prototype.reduce()` 去对每个元素应用提供的函数，并存储新的数组。

```js
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, v) => (res.push(fn(res.slice(-1)[0], v)), res), [acc]);
```

```js
console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, v) => acc + v, 0));
```