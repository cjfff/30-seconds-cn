const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => el == val ? [...acc, i] : acc, [])

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));