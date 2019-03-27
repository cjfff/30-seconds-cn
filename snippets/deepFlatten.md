### deepFlatten

把多维数组打平，变成一维数组


借助一个空数组去使用 `Array.prototype.concat()` 方法合并传入的数组 map 后的解构结果，map的时候判断元素是否是个数组，是的话将进行递归 flatten

```js
const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v): v))
```

```js
console.log(deepFlatten([1, [2], [[3], 4], 5])) // [1,2,3,4,5];
```