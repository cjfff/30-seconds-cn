### zip

为多个源数组中同一个位置上的元素创建一个数组。使用 `Array.max.apply()` 得到最长数组的长度。再使用  `Array.from({ length: maxLength })` 创建一个最大长度为 `maxLength` 的数组, 每个元素再进行一个 `Array.from({ length: arrays.length })` 的数组创建，每个元素取 多个原数组中的同一位置进行分组，最后返回。

```js
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(A => A.length));
  return Array.from({ length: maxLength }, (_, i) =>
    Array.from({ length: arrays.length }, (_, k) => arrays[k][i])
  );
};
```

```js
console.log(zip(["a", "b"], [1, 2], [true, false])); // [['a', 1, true], ['b', 2, false]]
console.log(zip(["a"], [1, 2], [true, false])); // [ [ 'a', 1, true ], [ undefined, 2, false ] ]
```