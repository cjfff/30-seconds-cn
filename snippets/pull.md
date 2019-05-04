### pull

改变原数组把特定的项过滤

使用 `Array.prototype.filter()` 和 `Array.prototype.includes()` 去把不需要的元素过滤，使用 `Array.prototype.length = 0` 去把原数组重置，然后用 `Array.prototype.push()` 方法去拿余下的项填充原数组。


```js
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

```js
let arr = [1, 2, 3, 4, 5, 1, 3];
pull(arr, 1, 3, 5); // [ 2, 4 ]
```