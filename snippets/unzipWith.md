### unzipWith

以最长子数组长度创建一个二维数组。将原本的每个数组元素都解包后再应用提供的处理函数。使用 `Math.max.apply()` 获取子数组的最大长度 `max`。用 `Array.from({length: max}, () => [])` 创建一个 长度为 `max` 的二维数组。再使用 `Array.prototype.reduce()` 遍历原来的数组，再对其每一个子数组使用 `Array.prototpe.forEach()` 分别对每个 二维数组子数组进行 `push` 操作，最后的结果的每一个子数组都应用我们提供的函数。

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({ length: Math.max(...arr.map(x => x.length)) }, () => [])
    )
    .map(val => fn(...val));
```

```js
console.log(
  unzipWith([[1, 10, 100], [2, 20, 200]], (...args) =>
    args.reduce((acc, v) => acc + v, 0)
  )
); // [3, 30, 300]
```