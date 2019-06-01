### unionWith

返回所有在2个数组中只存在一次的元素，使用提供的比对函数。创建一个 `Set` 保存 `a` 所有的元素，和在 `b` 运行 `Array.prototype.findIndex()` 不匹配的元素。

```js
const unionWith = (a, b, comp) =>
  Array.from(
    new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) == -1)])
  );
```


```js  
console.log(
  unionWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b)
  )
); // [1, 1.2, 1.5, 3, 0, 3.9]);
```