### any

数组中任意一项执行判断函数的结果为 `true`, 则函数返回  `true`, 否则返回 `false`

`Array.prototype.some()` 使用传入 `fn` 作为回调函数去执行，如果任意一项通过测试的话就返回 `true`, 如果省略第二个参数 `fn`, 将使用 `Boolean` 作为默认值

```js
const any = (arr, fn = Boolean) = arr.some(fn);
```

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```