### isSorted


如果数组是升序返回 1，降序 -1 ，无序 返回 0。

计算头两个元素的排序方向，使用 `Object.entries()` 去遍历数组，并且对比他们的每一项，当 `direction` 为 0 的时候，遍历终止并返回，或者到达最后一个元素的时候。 

```js
const isSorted  = (arr) => {
  // 初始化 方向值
  let direction = -(arr[0] - arr[1])
  // 遍历数组
  for (let [i, val] of arr.entries()) {
    // 这里只有前后元素一致的时候才会进入 true 区域
    direction = !direction ? - (arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction
    else if ((val - arr[i + 1]) * direction > 0) return 0
  }
}
```

```js
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
```