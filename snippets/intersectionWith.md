### intersectionWith

返回两个数组交集元素（使用提供的比较函数）的组成的新数组，使用数组 `a` 执行 `Array.prototype.filter()` ， 查找每一个元素跟数组 `b` 各元素 （`Array.prototype.findIndex(y => comp(x, y))`）执行函数 `comp` 的比较结果，如果跟其中一个元素的比较结果为 `true`, 就是相交元素。

```js
const intersectionWith = (a, b, comp) =>
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
```

```js
// 扩展写法
const intersectionWith = (a, b, comp) => a.filter(x => b.some(y => comp(x, y)));
```

```js
intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
);
```
