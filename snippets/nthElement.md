### nthElement

返回输入的第 `n` 个元素, 使用 `Array.prototype.slice()` 去得到一个包含 `nth`(目标) 元素在第一位的数组，如果下标越界，将会返回 `undefined`, 第二个参数省略的话会是 0，会得到数组的第一个元素。

```js
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(0, n + 1))[0]
```

```js
nthElement(["a", "b", "c"], 1); // b
nthElement(['a', 'b', 'c'], -3); // a
```