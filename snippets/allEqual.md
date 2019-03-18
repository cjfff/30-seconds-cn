### allEqual

检查数组中所有的元素是不是都相等

使用 `Array.prototype.every()` 去检查是否数组中所有的元素都与第一个元素严格相等

```js
const allEqual = arr => arr.every(val => val === arr[0]);
```

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]) // true
```
