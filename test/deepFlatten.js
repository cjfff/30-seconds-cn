const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v): v))

console.log(deepFlatten([1, [2], [[3], 4], 5])) // [1,2,3,4,5];


const flatten = (arr, deep = 1) => [].concat(...arr.map(v => Array.isArray(v) && deep > 1 ? flatten(v, deep - 1) : v))


console.log(flatten([1, [2], [[3, [6, [7]]], 4], 5], 1))
console.log(flatten([1, [2], [[3, [6, [7]]], 4], 5], 2))
console.log(flatten([1, [2], [[3, [6, [7]]], 4], 5], 3))
console.log(flatten([1, [2], [[3, [6, [7]]], 4], 5], 4))


Array.prototype.flatten = function (deep = 1) {
  return [].concat(...this.map(v => Array.isArray(v) && deep > 1 ? v.flatten(deep - 1) : v))
}

console.log([1, [2], [[3, [6, [7]]], 4], 5].flatten(4))
