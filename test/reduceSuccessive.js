const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, v) => (res.push(fn(res.slice(-1)[0], v)), res), [acc]);

console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, v) => acc + v, 0));
