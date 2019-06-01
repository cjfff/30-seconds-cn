### uniqueElements

使用 ES6 的 `set` 和 `...rest` 解构运算符进行去重。

```js
const uniqueElements = arr => [...new Set(arr)]
```

```js
console.log(uniqueElements([11,2,2,3,4,4,5]));
```