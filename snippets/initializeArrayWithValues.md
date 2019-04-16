### initializeArrayWithValues

首先使用 `Array(n)` 去初始化一个长度为 `n` 的空数组，再使用 `fill(v)` 去对数组的每一项进行值填充，`val` 如果忽略的话，值为 `0`。

```js
// 官方实现
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val)

// 其他实现
const initializeArrayWithValues = (n, val = 0) => Array.from({ length: n }, () => val)
```

```js
initializeArrayWithValues(10, 10); // [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
```