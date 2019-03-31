### differenceBy

使用提供的函数处理传入的2个数组，再返回2个数组之间的差集

首先数组 `b` 每个元素执行 `fn` 后，创建 `Set s`,  再用数组 `a` 使用 `Array.prototype.map()` 传入回调 `fn` 创建一个新数组后再进行 `Array.prototype.filter()` 去比对返回不包含在 `Set s` 内的元素的集合。

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.map(fn).filter(v => !s.has(v))
}
```


```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);; // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x);; // [2]
```