### sample

随机返回数组中的一个元素, 使用 Math.random() 去生成一个随机数，再乘以 `length`, 然后使用 `Math.floor()` 向下取整。此函数传入一个数组也可以运行。

```js
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
```

```js
sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 9
```