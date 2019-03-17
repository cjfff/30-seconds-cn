### all

如果集合中的所有元素执行测试函数的结果都为 `true`, 则函数返回 `true`, 否则返回 `false`

使用 `Array.prototype.every()` 去测试集合中的所有元素是否都通过了 `fn` 的测试.
如果忽略第二个参数， `fn`，将会把 `Boolean` 作为默认参数.


```js
const all = (arr, fn = Boolean) => arr.every(fn;
```

```js
all([4,2,3], x => x > 1); // true
all([1, 2, 3]); // true
```