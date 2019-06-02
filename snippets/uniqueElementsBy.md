### uniqueElementsBy

使用提供的比较函数对数组进行去重，然后返回。使用 `Array.prototype.reduce()` 和 `Array.prototype.some()` 基于传入的 `fn` 比较函数进行对比，找出数组中第一次出现的元素。全部放在一个集合后返回。

```js
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

```js
const arr = [
  { id: 0, value: "a" },
  { id: 1, value: "b" },
  { id: 2, value: "c" },
  { id: 1, value: "d" },
  { id: 0, value: "e" }
];

console.log(uniqueElementsBy(arr, (a, b) => a.id === b.id));
```