const none = (arr, fn = Boolean) => !arr.some(fn)

console.log(none([0, 0, 0]));
console.log(none([0, 1, 3, 0]));