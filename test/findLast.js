const findLast = (arr, fn) => arr.filter(fn).pop()


console.log(findLast([1, 2, 3, 4], n => n % 2 === 1));