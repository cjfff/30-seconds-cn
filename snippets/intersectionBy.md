### intersectionBy

使用数组 b 对每一项元素应用 `fn` 后的结果数组，创建一个新的 集合 `set`, 再对数组 `a` 执行 `Array.prototype.filter()` 去判断元素执行 `fn` 后的结果是否存在与 set 中。最后返回 `s.has(fn(v))` 为 `true` 的元素的数组。

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.filter(v => s.has(fn(v)))
}
```

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 2.1 ]
```