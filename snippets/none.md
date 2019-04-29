### none

使用 `Array.prototype.some()` 去判断是否所有的元素都不符合 `fn` 的判断, 第二个参数可以省略，默认是 `Boolean`

```js
const none = (arr, fn = Boolean) => !arr.some(fn)
```

```js
none([0, 0, 0]); // true
none([0, 1, 3, 0]); // false
```