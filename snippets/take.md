### take

使用 `Array.prototype.slice()` 投创建一个数组的切片，从数组开头取 `n` 个元素。

```js
const take = (arr, n = 1) => arr.slice(0, n)
```

```js
console.log(take([1, 2, 3])); // [1]
console.log(take([1, 2, 3], 3)); // [1, 2, 3]
```