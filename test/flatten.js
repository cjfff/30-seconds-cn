const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) =>
    a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v)
  , []);

const _flatten = (arr, depth = 1) =>
  [].concat(...arr.map(v => depth > 1 && Array.isArray(v) ? _flatten(v, depth - 1) : v))

  const arr = [1, 2, [3, 4, [5, 6]]];

console.log(flatten(arr, 3));

console.log(_flatten(arr, 3));
