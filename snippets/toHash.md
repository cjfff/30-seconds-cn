### toHash

将一个类数组转成一个值 hash 表。传递一个类数组数据结构，使用 `Array.prototype.reduce.call()` 去遍历它，再根据对应 key 的 value 值转换成 hash map。

```js
const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
```

```js
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }
toHash([{ a: "label" }], "a"); // { label: { a: 'label' } }
// A more in depth example:
let users = [
  { id: 1, first: "Jon" },
  { id: 2, first: "Joe" },
  { id: 3, first: "Moe" }
];
let managers = [{ manager: 1, employees: [2, 3] }];
// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.
managers.forEach(
  manager =>
    (manager.employees = manager.employees.map(function(id) {
      return this[id];
    }, toHash(users, "id")))
);
console.table(typeof managers[0].employees, managers[0].employees); // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]
```