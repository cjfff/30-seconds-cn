### countBy

先对数组的每一个元素进行处理，再进行分类。（tips：处理指的是对每个元素进行传入函数的运行返回或者某一个属性值）

先用 `Array.prototype.map()` 去对数组进行 函数处理 或者 返回某个属性的值，形成一个新的数组。然后再用 `Array.prototype.reduce()` 初始化传入空对象，遍历数组元素，对象中 key 存在就把 对应 `count` + 1。

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {})
```

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
```