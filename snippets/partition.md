### partition

对传入的数组依据提供的函数进行分类，`true` `false` 各为一组

使用 `Array.prototype.reduce()` ，首先创建一个有两个数组的数组为初始值，再对每个元素进行 `fn` 的调用，返回值为 `true` 就加入第一个数组，`false` 就加入第二个数组。使用 `Array.prototype.push()`。

```js
const partition = (arr, fn = Boolean) =>
  arr.reduce(
    (acc, val, i, arr) => (acc[fn(val, i, arr) ? 0 : 1].push(val), acc),
    [[], []]
  );
```


```js
console.log(partition([0, 1, 2, 3, 4, 5, 6]));
```