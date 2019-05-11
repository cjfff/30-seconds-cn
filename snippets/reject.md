### reject

此为一个数组判定任务，类似于 `Array.prototype.filter()` 但是和 filter 不同，它会把不符合结果的元素过滤出来，即结果`pred(x) === flase`。

```js
const reject = (arr, pred) => arr.filter((...args) => !pred(...args))
```

```js
console.log(reject([1, 2, 3, 4, 5, 6], v => v > 3)); // [1, 2, 3]
console.log(reject([{age: 18}, {age: 20},{age:24}], ({age}) => age > 20)); // [{age:18}, {age:20}]
```