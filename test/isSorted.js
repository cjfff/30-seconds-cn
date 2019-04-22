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


console.log(isSorted([0, 1, 2, 2])); // 1
console.log(isSorted([4, 3, 2])); // -1
console.log(isSorted([4, 3, 5])); // 0