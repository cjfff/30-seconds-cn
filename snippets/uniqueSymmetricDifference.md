### uniqueSymmetricDifference

返回2个数组的对称差，要求不包含重复值。使用 `Array.prototype.filter()` 和 `Array.prototype.includes()` 去分别对2个数组进行取差值，最后防止 `Set` 中进行去重。

```js
const uniqueSymmetricDifference = (a, b) => [
  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])
];
```

```js
console.log(uniqueSymmetricDifference([1, 2, 3], [1, 2, 4])); // [3, 4]
console.log(uniqueSymmetricDifference([1, 2, 2], [1, 3, 1])); // [2, 3]
```