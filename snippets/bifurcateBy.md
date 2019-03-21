### bifurcateBy

根据判定函数的结果把数组的成员分别置放到不同的集合中，判定函数的条件由我们自己指定（例如数组成员都是对象，包含 `age` 属性，我们想要 `age` 属性 大于等于 `18` 的时候通过判断），如果判定函数返回 `true`, 则该子项加入到第一个集合，否则加入第二个集合。


根据数组每一项执行 `fn` 的结果判断加入到哪一个集合中，使用到的方法有 `Array.prototype.reduce()` 和 `Array.prototype.push()`。

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1 ].push(val), acc), [[], []])
```

```js
bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b") // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```