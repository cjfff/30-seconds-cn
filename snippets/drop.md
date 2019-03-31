### drop

使用 `Array.prototype.slice()` 使数组从左开始 丢弃 `n` 个元素，返回新数组

```js
const drop = (arr, n = 1) => arr.slice(n)
```


```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```