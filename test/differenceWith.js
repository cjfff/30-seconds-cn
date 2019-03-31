// const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1)
const differenceWith = (arr, val, comp) => arr.filter(a => !val.some(b => comp(a, b)))
// const differenceWith = (arr, val, comp) => arr.filter(a => !val.find(b => comp(a, b)) )

console.log(differenceWith([1, 1.2, 1.5, 3, 0, undefined], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)));