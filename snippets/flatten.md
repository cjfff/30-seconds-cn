### flatten


按照给定的深度去铺平数组

依照变量 `depth` 去递归把数组打平，使用 `Array.ptototype.reduce()` 和 `Array.prototype.concat()` 去合并每一个元素或是数组，递归直到 `depth` 为 1 则停止，默认值为 1

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) =>
    a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v)
  , []);
```

```js
flatten([1, 2, [3, 4, [5, 6]]], 3); // [1, 2, 3, 4, 5, 6]
```