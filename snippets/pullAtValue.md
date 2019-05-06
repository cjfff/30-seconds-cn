### pullAtValue

在改变原数组的情况下，删除传入的要过滤的数组，最后返回删除的元素集合。

首先创建2个数组，`removed`, `pulled` 一个是存储需要删除的元素，一个存储需要保留的元素，使用 `Array.prototype.forEach()` 去遍历判断元素是否在传入的需要删除的元素列表中，是就 `push `到 `removed` 数组，否则 `push pulled`。再使用 `Array.prototype.length = 0`使原数组清空，再遍历 `pulled` 把每一个元素都加入到 `arr`, 最后返回 `removed`.

```js
const pullAtValue = (arr, valueArr) => {
  let removed = [],
    pulled = []

  arr.forEach(v => (valueArr.includes(v) ? removed : pulled).push(v))

  arr.length = 0;
  pulled.forEach(v => arr.push(v))
  return removed
}
```

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```