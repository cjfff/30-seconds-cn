### pullAtIndex

改变原数组把对应的下标元素过滤。首先创建2个空数组，`removed` 被删除的下标集合，`pulled` 保留下来的集合，使用 `Array.prototype.forEach()` 去遍历 `arr` 下标与传入的 `pullArr` 某一位相等的则加入 `removed`, 反之 `pulled`, 然后设置 `Array.prorotype.length = 0` 清空数组，再遍历 `pulled` 数组把每一项元素重新加入到 `arr` 里面, 最后返回 `removed` 被删除的集合。

```js
const pullAtIndex = (arr, pullArr) => {
  let removed = [],
    pulled = [];
  arr.forEach((v, i) => (pullArr.includes(i) ? removed : pulled).push(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
```

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```