### mapObject

首先使用 `Array.prototype.map()` 用传入的 `fn` 创建一个新的数组，再遍历原来的数组，并使用对应下标下，`origin` 数组的项作为键, `fn new` 数组的项作为值，构建一个键值对的 `map`.

```js 
// 另外一种实现方式
const mapObject = (arr, fn) => arr.reduce((acc, v) => (acc[v] = fn(v), acc), {})
```

```js
const squartIt = arr => mapObject(arr, a => a ** 2);
squartIt([1, 2, 3]) // { '1': 1, '2': 4, '3': 9 }

const getFirstChar = arr => mapObject(arr, v => v[0]);
getFirstChar(['abc','hello', 'wrold']) // { abc: 'a', hello: 'h', wrold: 'w' }
```

