### filterNonUnique



使用 `Array.prototype.filter()` 筛选没有重复值的数组

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
```


```js
filterNonUnique([[1, 2, 2, 3, 4, 4, 5]])
```