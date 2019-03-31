const drop = (arr, n = 1) => arr.slice(n)


console.log(drop([1, 2, 3])); // [2,3]
console.log(drop([1, 2, 3], 2)); // [3]
console.log(drop([1, 2, 3], 42)); // []