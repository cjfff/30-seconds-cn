const without = (arr, ...args) => arr.filter(v => !args.includes(v))

console.log(without([2, 1, 2, 3], 1, 2))