### stableSort

对数据进行稳定排序，值相同的时候保留初始索引，不改变原数组，返回一个排序好的新的数组。

使用 `Array.prototype.map()` 去获取数组每个元素的副本和对应的下标，再使用 `Array.prototype.sort()` 和和一个 `compare` function(比较函数) 去对数组进行排序，如果比较的结果相同，将使用原本的下标，最后再使用 `Array.prototype.map()` 组成只有值的数组返回。

```js
const stableSort = (arr, compare) => 
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({item}) => item)
```


```js
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
```