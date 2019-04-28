// const mapObject = (arr, fn) =>
//   (a => (
//     (a = [arr, arr.map(fn)]),
//     a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
//   ))();

const mapObject = (arr, fn) => arr.reduce((acc, v) => (acc[v] = fn(v), acc), {})

const squartIt = arr => mapObject(arr, a => a ** 2);

console.log(squartIt([1, 2, 3])); 

const getFirstChar = arr => mapObject(arr, v => v[0]);

console.log(getFirstChar(['abc','hello', 'wrold']));


