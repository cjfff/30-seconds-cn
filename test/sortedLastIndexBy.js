const sortedLastIndexBy = (arr, n, fn) => {
  const isDecsending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDecsending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};

console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x)); // 1
