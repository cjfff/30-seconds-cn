### findLastIndex

返回过滤后符合给定条件的数组中的最后一个元素的下标

首先使用 `Array.prototype.map()` 使每个元素都变成一个数组，下标放第一位，值放第二位。再使用 `Array.prototype.filter()` 去移除 `fn` 返回 `false` 的元素, 最后使用 `Array.prototype.pop()` 返回最后一个元素（ps: 此函数有异常分享，体现在第二个环境如果找不到合适的元素的情况下）。

```js
const findLastIndex = (arr, fn) =>
  arr.map((val, i) => [i, val])
  .filter(([i, val]) => fn(val, i, arr))
  .pop()[0]
```

```js
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
```