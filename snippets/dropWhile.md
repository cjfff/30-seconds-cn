### dropWhile

删除数组元素，，直到 `func` 返回 `true` 为止，返回余下的数组

遍历数组, 不断的使用 `Array.prototype.slice(1)` 去对 `arr` 赋值以达到删除第一个元素的效果， 直到 `func` 的结果为 `true`, 遍历结束，返回余下的数组

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1)
  return arr
}
```

```js
dropWhile([1, 2, 3, 4], n => n >= 3); // [3, 4]
```