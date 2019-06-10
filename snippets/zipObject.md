### zipObject

传递一个合法的标识符和值数组，返回一个把属性和值关联起来的对象。值可以为 `undefined` 但是 属性不可以为 `undefined`，使用 `Array.prototype.reduce()` 遍历属性数组，属性数组将决定返回的对象的数据结构。

```js
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});
```

```js
console.log(zipObject(['age', 'name', 'school'], [18, 'cjf', 'ccc'])) // { age: 18, name: 'cjf', school: 'ccc' }
```