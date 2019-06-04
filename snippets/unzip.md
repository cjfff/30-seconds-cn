### unzip

创建一个二维数组，然后对二维数组中的每一个打包好的 `zip` 进行解包。 首先使用 `Math.max.apply()` 算出最长的子数组长度，然后使用 `Array.from()` 创建一个长度为 `max` 的二维数组。再对每一个 zip 包执行 `Array.prototpe.forEach()` 去把每个 zip 的每个元素分别 `push` 到，二维数组的对应下标的数组当中。

```js
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from(
      {
        length: Math.max(...arr.map(x => x.length))
      },
      () => []
    )
  );
```

```js
console.log(unzip([["a", 1, true], ["b", 2, false]])); // [['a', 'b'], [1, 2], [true, false]]
console.log(unzip([["a", 1, true], ["b", 2]])); // [['a', 'b'], [1, 2], [true]]
```
