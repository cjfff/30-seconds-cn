const forEachRight = (arr, cb) =>
  arr
    .slice(0)
    .reverse()
    .forEach(cb);

const _forEachRight = (arr, cb) =>
  arr.forEach((_, i, arr) => cb(arr[arr.length - i - 1]));

// forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
_forEachRight([1, 2, 3, 4], console.log)