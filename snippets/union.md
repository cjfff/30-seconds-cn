### union

给2个数组去重。对 数组 `a`, `b` 使用解构符号后， 创建一个 `Set` ，再把结果用 `Array.from()` 变成数组。

```js
const union = (a, b) => Array.from(new Set([...a, ...b]))
```

```js
console.log(union([1, 2, 3], [4, 3, 2])) // [1,2,3,4];
```