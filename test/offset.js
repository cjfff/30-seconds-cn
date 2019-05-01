const offset = (arr, offset = 0) => [...arr.slice(offset), ...arr.slice(0, offset)]

console.log(offset([1, 2, 3, 4, 5, 6], 3));
console.log(offset([1, 2, 3, 4, 5, 6], -2));
console.log(offset([1, 2, 3, 4, 5, 6]));