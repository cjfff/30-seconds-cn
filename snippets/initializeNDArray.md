### initializeNDArray

给定一个 `val` 值，后续参数用来约定要生成数组的行数，每次递归取 `args[0]` 作为数组长度，然后对数组使用 `Array.prototype.map()` 进行对每个子项递归调用 `initializeNDArray`，直到 `args` 数组为 `0`，递归停止，返回值。所以函数会根据后续参数的个人确定其深度，最后一位则是元素个数。

```js
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)))
```

```js
console.log(initializeNDArray(1, 3)); // [1, 1, 1]
console.log(initializeNDArray(5, 2, 2, 2));  // [ [ [ 5, 5 ], [ 5, 5 ] ], [ [ 5, 5 ], [ 5, 5 ] ] ]
```