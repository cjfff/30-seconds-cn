const partition = (arr, fn = Boolean) =>
  arr.reduce(
    (acc, val, i, arr) => (acc[fn(val, i, arr) ? 0 : 1].push(val), acc),
    [[], []]
  );

console.log(partition([0, 1, 2, 3, 4, 5, 6]));
