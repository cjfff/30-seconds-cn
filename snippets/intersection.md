### intersection

返回2个数组之间的交集，首先用数组 b 创建一个 `Set` 在用 数组 a 进行 `Array.prototype.filter()` 操作，遍历数组中的每一项，判断是否在数组 b 中，是的话，就为 `true`, 最后返回结果。

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
```

```js
console.log(intersection([1, 2, 3, 4, 5], [1, 2, 3]));
```