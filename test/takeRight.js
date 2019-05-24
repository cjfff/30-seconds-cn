const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length)

console.log(takeRight([1, 2, 3], 2)); // [ 2, 3 ]
console.log(takeRight([1, 2, 3])); // [3]