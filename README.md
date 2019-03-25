# 30-seconds-cn

每天学习一个 30-seconds-code 函数, 看懂并写出自己的理解 =v=， 在此记录学习过程~~


## Contents

### 📚 Array

<details>
<summary>View contents</summary>

* [`all`](#all)
* [`allEqual`](#allEqual)
* [`any`](#any)
* [`arrayToCSV`](#arrayToCSV)
* [`bifurcate`](#bifurcate)
* [`bifurcateBy`](#bifurcateBy)
* [`chunk`](#chunk)
* [`compact`](#compact)
* [`countBy`](#countBy)

</details>

---

## 📚 Array

### all

如果集合中的所有元素执行测试函数的结果都为 `true`, 则函数返回 `true`, 否则返回 `false`

使用 `fn` 作为 `Array.prototype.every()` 的回调函数去对数组中的所有元素进行测试，都返回 `true`, 则测试通过. 如果忽略第二个参数， `fn`，将会把 `Boolean` 作为默认参数.


```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

<details>
<summary>例子</summary>

```js
all([4,2,3], x => x > 1); // true
all([1, 2, 3]); // true
```

</details>


### allEqual

检查数组中所有的元素是否都相等，是返回 `true`, 否则返回 `false`

使用 `Array.prototype.every()` 去检查是否数组中所有的元素都与第一个元素严格相等

```js
const allEqual = arr => arr.every(val => val === arr[0]);
```

<details>
<summary>例子</summary>

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]) // true
```

</details>


### any

数组中任意一项执行判断函数的结果为 `true`, 则函数返回  `true`, 否则返回 `false`

`Array.prototype.some()` 使用传入 `fn` 作为回调函数去执行，如果任意一项通过测试的话就返回 `true`, 如果省略第二个参数 `fn`, 将使用 `Boolean` 作为默认值

```js
const any = (arr, fn = Boolean) = arr.some(fn);
```

<details>
<summary>例子</summary>

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

</details>


### arrayToCSV

把二维数组转换成字符分隔值字符串

使用 `Array.prototype.map` 把二维数组的每一个子项都用 `Array.prototype.join(delimiter)` 处理成一维的字符串数组。再对一维字符串数组使用 `Array.prototype.join('\n')` ，使数组变成一个 `CSV` 字符串，将数组的每一个元素都用换行符连接，使输出在新行。如果省略第二个参数，将使用默认分隔符 `，`。

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n')
```

<details>
<summary>例子</summary>

```js
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
```

</details>


### bifurcate

函数参数一共有2个，`arr`, `filter`, 函数的目的是遍历数组每一项，判断对应的项在 `filter` 里面是否为 truthy, 如果是的话就加入一个集合，否则加入第二个集合。

使用 `Array.prototype.reduce()` 和 `Array.prototype.push()` 去遍历数组并用 filter 判断应该 `push` 到哪个集合中。

```js
const bifurcate = (arr, filter) => 
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])
```
<details>
<summary>例子</summary>

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```
</details>


### bifurcateBy

根据判定函数的结果把数组的成员分别置放到不同的集合中，判定函数的条件由我们自己指定（例如数组成员都是对象，包含 `age` 属性，我们想要 `age` 属性 大于等于 `18` 的时候通过判断），如果判定函数返回 `true`, 则该子项加入到第一个集合，否则加入第二个集合。


根据数组每一项执行 `fn` 的结果判断加入到哪一个集合中，使用到的方法有 `Array.prototype.reduce()` 和 `Array.prototype.push()`。

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1 ].push(val), acc), [[], []])
```



<details>
<summary>例子</summary>

```js
bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b") // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

</details>



### chunk

把数组拆分成多个指定大小的子数组


使用 `Array.from()` 去创建一个新的数组，使用特定函数生成 `chunks` 对数组进行填充, 使用 `Array.prototype.slice` 生成每一个 长度为 `size` 的 `chunk`。如果原数组不能被均匀的分配，最后一个 `chunk` 会把剩余的所有元素包含在内。


```js
const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
```

<details>
<summary>例子</summary>

```js
chunk([1, 2, 3, 4, 5], 2); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

</details>


### compact

过滤数组中所有转换为 `Boolean` 类型后 为 `false` 的 元素

使用 `Array.prototype.filter()` 去过滤所有为 `falsey` 的所有数据（包含: `false`, `null`, `0`, `""`, `undefined`, 和 `NaN`）

```js
const compact = arr => arr.filter(Boolean); 
```

<details>
<summary>例子</summary>

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

</details>


### countBy

先对数组的每一个元素进行处理，再进行分类。（tips：处理指的是对每个元素进行传入函数的运行返回或者某一个属性值）

先用 `Array.prototype.map()` 去对数组进行 函数处理 或者 返回某个属性的值，形成一个新的数组。然后再用 `Array.prototype.reduce()` 初始化传入空对象，遍历数组元素，对象中 key 存在就把 对应 `count` + 1。

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {})
```

<details>
<summary>例子</summary>

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
```

</details>