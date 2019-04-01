### dropRightWhile

从末尾开始删除 `func` 执行返回 `false` 的元素，直到结果为 `true` 为止，返回余下元素组成的元素(适用于已经排好序的数组).

遍历数组，从最后一项开始判断是否通过 `func` 函数，不通过就通过 `Array.prototype.slice(0, -1)`, 去对 `arr` 重复赋值以达到删除最后一个元素的效果，直到 `func` 返回 `true` 或者 数组的 `length` 为 0, 就停止循环, 返回余下的元素组成的数组

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
}
```


```js
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```