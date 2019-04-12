### initial


使用 `Array.prototype.slice(0, -1)` 去返回一个 除了最后一个元素外, 新的数组。

```js
const initial = arr => arr.slice(0, -1)
```

```js
initial([1, 2, 3]); // [1, 2]
```