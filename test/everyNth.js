const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

console.log(everyNth([1, 2, 3, 4, 5, 6], 2));