### tail

返回数组中除了第一项中的所有的元素，通过 如果数组的长度大于 1 则使用 `Array.prototype.slice(1)` ，否则直接返回数组。

```js
const tail = (arr) => arr.length > 1 ? arr.slice(1) : arr
```

```js
[1, 2, 3];
```