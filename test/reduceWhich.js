const reduceWhich = (arr, comparator = (a, b) => a - b) => arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a))

console.log(reduceWhich([5, 10, 1], (a, b) => b - a));
console.log(reduceWhich([{ age: 18 }, { age: 20 }, { age: 30 }], (a, b) => a.age - b.age));