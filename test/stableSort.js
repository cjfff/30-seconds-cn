const stableSort = (arr, compare) => 
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({item}) => item)


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr2 = [
  { age: 28, name: "joke" },
  { age: 22, name: "lucy" },
  { age: 22, name: "andi" },
  { age: 30, name: "tom" },
  { age: 24, name: "TIM" }
];
console.log(stableSort(arr2, (a, b) => a.age - b.age)); // [ { age: 22, name: 'lucy' }, { age: 22, name: 'andi' }, { age: 24, name: 'TIM' }, { age: 28, name: 'joke' },{ age: 30, name: 'tom' } ]