### differenceWith

传入的 `val` 数组与 `arr` 中的所有元素进行 `comp` 函数的对比，`filter` 出所有返回值不为 `true` 的元素

使用 `Array.prototype.filter()` 和 `Array.prototype.findIndex()` 去寻找合适的值.

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1)

// 认为更好理解的写法
const differenceWith = (arr, val, comp) => arr.filter(a => !val.some(b => comp(a, b)))
```

```js
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b));  // [1, 1.2]
```