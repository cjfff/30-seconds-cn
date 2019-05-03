### permutations

⚠️ WARNING（警告）: 此函数的处理时间会随数组长度成倍增长。当数组长度为8到10已经会引起你的浏览器线程挂起，因为它在处理不同的组合。

生成数组的全排列（会包含重复项）

使用递归。每次循环，除了当前元素，用余下的元素创建所有的排列。再使用 `Array.prototype.map()` 用当前元素与所有排列组合起来，形成全排列。最后使用 `Array.prototype.reduce()` 将所有的排列组合在一个数组中。递归终止条件为传入数组长度为 2 以下的时候。

```js
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val
        ])
      ),
    []
  );
};
```

```js
permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
```