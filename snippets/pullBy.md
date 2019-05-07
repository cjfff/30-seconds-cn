### pullBy

根据给定数组的给定条件去筛去过滤原数组。首先把需要过滤的数组执行 `Array.prototype.map()` 传入 `fn` 回调，处理成需要删除的 `set`, `arr` 再去执行 `Array.prototype.filter()` 去进行对原数组过滤出一个合适的数组，判断条件是，执行 `fn` 后的那一项的返回值是否在 `set` 中，过滤出在的元素。最后剩下 `pulled`, 再把 `arr.length = 0` 清空原数组，再遍历 `pulled` 循环加入到 `arr` 中

```js
const pullBy = (arr, pullArr, fn = () => { throw Error('fn is must be')}) => {
  let argsState = new Set(pullArr.map(fn))
  let pulled = arr.filter(v => !argsState.has(fn(v)))
  arr.length  = 0
  pulled.forEach(v => arr.push(v))
}
```

```js
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // [ { x: 2 } ]
```