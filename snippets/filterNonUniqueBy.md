### filterNonUniqueBy

使用提供的比较函数，过滤掉数组中所有非唯一元素。


使用 `Array.prototype.filter()` 和 `Array.prototype.every()` 使得数组只剩下唯一的元素，基于传入的对比函数, 对比函数有4个参数，两个元素，和2个元素的下标

```js
const filterNonUniqueBy = (arr, fn) => 
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)))
```

```js
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```
