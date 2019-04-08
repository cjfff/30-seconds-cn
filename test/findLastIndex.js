const findLastIndex = (arr, fn) =>
  arr.map((val, i) => [i, val])
  .filter(([i, val]) => fn(val, i, arr))
  .pop()[0]


console.log(findLastIndex([1, 2, 3, 4], n => n % 2 === 1));; // 2 (index of the value 3)