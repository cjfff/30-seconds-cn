const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(0, n + 1))[0]

console.log(nthElement(["a", "b", "c"], 1));
console.log(nthElement(['a', 'b', 'c'], -3));