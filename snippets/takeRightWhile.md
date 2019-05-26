### takeRightWhile

从数组末尾开始循环遍历判断，为 `true` 就不删除，最后返回删除的元素。使用 `Array.prototype.reduceRight()` 遍历数组并收集 `false` 的值返回。 

```js
const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);
```

```js
console.log(takeRightWhile([1, 2, 3, 4], n => n < 3)); // [3, 4]);

const arr = [{ age: 20 }, { age: 30 }, { age: 25 }, { age: 26 }];

console.log(takeRightWhile(arr, ({ age }) => age < 25)); // [ { age: 30 }, { age: 25 }, { age: 26 } ]
```