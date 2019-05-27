### takeWhile

循环遍历数组，使用 `for...of` 循环 `Array.prototype.entries()` 直到 `func` 的执行结果为 true，则使用 `Array.prototype.slice()` 返回 `break` 之前的数组集合。 

```js
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};
```

```js
console.log(takeWhile([1, 2, 3, 4], n => n >= 3)); // [1, 2]);
```
