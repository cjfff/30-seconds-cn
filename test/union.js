const union = (a, b) => Array.from(new Set([...a, ...b]))

console.log(union([1, 2, 3], [4, 3, 2])) // [1,2,3,4];