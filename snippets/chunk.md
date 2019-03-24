### chunk

把数组拆分成多个指定大小的子数组


使用 `Array.from()` 去创建一个新的数组，使用特定函数生成 `chunks` 对数组进行填充, 使用 `Array.prototype.slice` 生成每一个 长度为 `size` 的 `chunk`。如果原数组不能被均匀的分配，最后一个 `chunk` 会把剩余的所有元素包含在内。


```js
const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
```


```js
chunk([1, 2, 3, 4, 5], 2); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```