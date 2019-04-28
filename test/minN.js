const minN = (arr, n = 1) =>  arr.slice(0).sort((a, b) => a - b).slice(0, n)

console.log(minN([1, 2, 3]));
console.log(minN([1, 2, 3], 2));