const reject = (arr, pred) => arr.filter((...args) => !pred(...args))


console.log(reject([1, 2, 3, 4, 5, 6], v => v > 3)); // [1, 2, 3]
console.log(reject([{age: 18}, {age: 20},{age:24}], ({age}) => age > 20)); // [{age:18}, {age:20}]