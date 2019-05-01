### offset

移动一定数量的元素到数组的末尾, 使用 `Array.prototype.slice()` 去得到 `offset` 之前的元素数组，和 `offset` 之后的元素数组，再使用结构运算符 (...) 把两个数组合并成一个数组，`offset` 不传的话，默认为0，数组不进行任何操作，如果为负数的话，会把元素从后面放置到前面。

```js
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)]
```

```js
offset([1, 2, 3, 4, 5, 6], 3); // [4, 5, 6, 1, 2, 3]
offset([1, 2, 3, 4, 5, 6], -2);  // [5, 6, 1, 2, 3, 4]
offset([1, 2, 3, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]
```