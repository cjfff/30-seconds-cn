### sampleSize

从数组中获取 `n` 随机打乱且唯一的值。

对数组使用[洗牌算法](https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/)，使用 `Array.prototype.slice()` 得到洗牌后数组的前 `n` 位元素，如果忽略第二个参数， `n` 默认只取出第一个值。

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
```

```js
sampleSize([1, 2, 3, 4], 4); // [2, 4, 3, 1]
sampleSize([1, 2, 3], 3); // [2, 1, 3]
```