###uniqueElementsByRight

基于提供的比较函数，对数组进行去重后返回。使用 `Array.prototype.reduce()` 和 `Array.prototype.some()` 对数组进行遍历，基于比较函数 `fn`, 取最后一个出现的同值元素加入数组并返回。

```js
const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

```js
console.log(
  uniqueElementsByRight(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" }
    ],
    (a, b) => a.id == b.id
  )
); // [ { id: 0, value: 'e' }, { id: 1, value: 'd' }, { id: 2, value: 'c' } ]
```