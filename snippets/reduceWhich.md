### reduceWhich

根据提供的比较规则， 返回数组的最大值或最小值，使用 `Array.prototype.reduce()` 根据`comparator` 比较函数获得合适的值， 如果忽略第二个参数， `comparator` 函数，将会默认返回数组的最小值。

```js
const reduceWhich = (arr, comparator = (a, b) => a - b) => 
    arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a))
```

```js
console.log(reduceWhich([5, 10, 1], (a, b) => b - a)); // 10
console.log(reduceWhich([{ age: 18 }, { age: 20 }, { age: 30 }], (a, b) => a.age - b.age)); // { age: 18 }
```