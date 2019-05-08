### reducedFilter

首先用 `Array.prototype.filter()` 过滤出剩下的数组，再使用 `Array.prototype.map()` 循环遍历，里面进行 `keys` `Array.prototype.reduce` 操作，目的是只取指定的属性。最后返回数组。


```js
const reducedFilter = (data, keys, fn) =>
  data
    .filter(fn)
    .map(el => keys.reduce((acc, key) => ((acc[key] = el[key]), acc), {}));
```

```js
const data = [
  {
    id: 1,
    name: "john",
    age: 24
  },
  {
    id: 2,
    name: "mike",
    age: 50
  }
];

reducedFilter(data, ["id", "name"], item => item.age > 24); // [{ id: 2, name: 'mike'}]
```