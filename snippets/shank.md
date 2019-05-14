### shank

与 `Array.prototype.splice()` 一样的功能，不同之处在于 `shank` 会返回一个新的函数，不会改变原数组。

参数有4个，分别数组和要操作的始下标（默认为0），要删除的个数（默认为0），要新增的元素。首先用数组执行 `Array.prototype.slice(0, index)` 方法 等于把数组下标移动到了 `index` 位置，然后 执行 `Array.prototype.concat()` 去合并 `elements` 要添加的元素，最后再合并 `Array.ptototype.slice(index + delCount)` 意义在于 `delCount` 不为0的情况下会跳过多个元素进行合并，等于删除操作。最后返回结果。

```js
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));
```


```js
const names = ["alpha", "bravo", "charlie"];
const namesAndDelta = shank(names, 1, 0, "delta"); // [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names) // ["alpha", "bravo", "charlie"];
```