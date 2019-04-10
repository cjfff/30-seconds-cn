### groupBy

groupBy，故名思意就是给数据分组。

函数接受2个参数

1. arr 要分组的数组
2. fn 可以传递属性 `key` 值，或者函数

首先第一轮会 使用 `Array.prototype.map()` 遍历出一共有多小种 key , 使用 arr(fn) 或者 arr(val => val[fn]) 去遍历出 key 数组
第二轮使用 `Array.prototype.reduce()` 去对 `key` 相同的数据进行装箱(放在同一个数组)操作.

```js
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, key, i) => (acc[key] = (acc[key] || []).concat(arr[i]), acc), {})
```

```js
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length')) // {3: ['one', 'two'], 5: ['three']}
```