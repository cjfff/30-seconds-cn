### zipWith

创建一个数组，把原来多个数组中同一下标的元素组合成一个集合，最后一个参数是如何合并。检查最后一个参数是不是一个 `Function`,是的话就要把它从 `array` 中取出。 然后使用 `Math.max.apply()` 去得到最长子数组的长度，用来创建一个数组，然后数组的每个子项都是一个子数组，每个子数组收集传入所有数组的对应下标的元素，再把子数组应用上刚刚取到的 `function`(如果有的话)。最后返回。

```js
const zipWith = (...array) => {
  const fn =
    typeof array[array.length - 1] === "function" ? array.pop() : undefined;

  return Array.from({ length: Math.max(...array.map(a => a.length)) }, (_, i) =>
    fn ? fn(...array.map(a => a[i])) : array.map(a => a[i])
  );
};
```

```js
console.log(zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)); // [111,222]

console.log(
  zipWith(
    [1, 2, 3],
    [10, 20],
    [100, 200],
    (a, b, c) =>
      (a != null ? a : "a") + (b != null ? b : "b") + (c != null ? c : "c")
  )
); // [ 111, 222, '3bc' ]
```