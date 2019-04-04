const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

const arr = [1, 2, 2, 3, 4, 4, 5]

console.log(filterNonUnique(arr));