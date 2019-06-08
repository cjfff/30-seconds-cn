### xProd

通过2个数组的每个元素的互相配对，创建一个新的数组。使用 `Array.prototype.reduce()`, `Array.prototype.map()` 和 `Array.prototype.concat()` 去生成2个数组中所有元素可能凑成的元素对，然后保存在一个数组中返回。

```js
const xProd = (a, b) =>
  a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
```

```js
console.log(xProd([1, 2], ["a", "b"])); // [ [ 1, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 2, 'b' ] 
```