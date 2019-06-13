### ary

创建一个除了参数 `n` 和一个 `fn`，其他参数都忽略的函数。使用 `Array.prototype.slice(0, n)`，然后对其使用解构符号传入调用 function `fn`。

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```

```js
const firstTwoMax = ary(Math.max, 2);
console.log([[2, 6, "a"], [8, 4, 6], [10]].map(x => firstTwoMax(...x))); // [6, 8, 10]
```