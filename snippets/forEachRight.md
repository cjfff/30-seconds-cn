### forEachRight

对数组中的每一个元素都进行一次回调函数的处理，从右到左的顺序处理

实现这个函数主要有三个步骤

1. 使用 `Array.prototype.slice(0)` 把数组浅拷贝一份
2. 使用 `Array.prototype.reverse()` 使数组翻转
3. 使用 `Array.prototype.forEach(cb)` 对数组(此时数组已经翻转)正向遍历并对每一个元素执行回调 

```js
const forEachRight = (arr, cb) => 
  arr.slice(0)
  .reverse()
  .forEach(cb)
```

<!-- 另外一种实现方式 -->
```js
const _forEachRight = (arr, cb) => arr.forEach((_, i, arr) => cb(arr[arr.length - i - 1]))
```

```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```