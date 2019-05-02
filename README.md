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
* [`countOccurrences`](#countOccurrences)
* [`deepFlatten`](#deepFlatten)
* [`difference`](#difference)
* [`differenceWith`](#differenceWith)
* [`differenceBy`](#differenceBy)
* [`drop`](#drop)
* [`dropRight`](#dropRight)
* [`dropRightWhile`](#dropRightWhile)
* [`dropWhile`](#dropWhile)
* [`everyNth`](#everyNth)
* [`filterFalsy`](#filterFalsy)
* [`filterNonUnique`](#filterNonUnique)
* [`filterNonUniqueBy`](#filterNonUniqueBy)
* [`findLast`](#findLast)
* [`findLastIndex`](#findLastIndex)
* [`flatten`](#flatten)
* [`forEachRight`](#forEachRight)
* [`groupBy`](#groupBy)
* [`head`](#head)
* [`indexOfAll`](#indexOfAll)
* [`initial`](#initial)
* [`initialize2DArray`](#initialize2DArray)
* [`initializeArrayWithRange`](#initializeArrayWithRange)
* [`initializeArrayWithRangeRight`](#initializeArrayWithRangeRight)
* [`initializeArrayWithValues`](#initializeArrayWithValues)
* [`initializeNDArray`](#initializeNDArray)
* [`intersection`](#intersection)
* [`intersectionBy`](#intersectionBy)
* [`intersectionWith`](#intersectionWith)
* [`isSorted`](#isSorted)
* [`join`](#join)
* [`JSONtoCSV`](#JSONtoCSV)
* [`last`](#last)
* [`longestItem`](#longestItem)
* [`mapObject`](#mapObject)
* [`maxN`](#maxN)
* [`minN`](#minN)
* [`none`](#none)
* [`nthElement`](#nthElement)
* [`offset`](#offset)
* [`partition`](#partition)

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


### countOccurrences

计算指定元素在数组中出现的次数

使用 `Array.prototype.reduce()` 去创建一个计数器，每当指定元素出现时，计时器 + 1。

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
```

<details>
<summary>例子</summary>

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1);
```

</details>


### deepFlatten

把多维数组打平，变成一维数组


借助一个空数组去使用 `Array.prototype.concat()` 方法合并传入的数组 map 后的解构结果，map的时候判断元素是否是个数组，是的话将进行递归 flatten

```js
const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v): v))
```


<details>
<summary>例子</summary>

```js
deepFlatten([1, [2], [[3], 4], 5]) // [1,2,3,4,5];
```

</details>



### difference

返回2个数组之间的差集

使用数组 `b` 创建一个 `Set`， 再用数组 `a` 执行 `Array.prototype.filter()` 筛选不包含在数组 `b` 的元素的集合。


```js
const difference = (a, b) => {
	const s = new Set(b)
	return a.filter(x => !s.has(x))
}
```


<details>
<summary>例子</summary>

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```
</details>


### differenceWith

传入的 `val` 数组与 `arr` 中的所有元素进行 `comp` 函数的对比，`filter` 出所有返回值不为 `true` 的元素

使用 `Array.prototype.filter()` 和 `Array.prototype.findIndex()` 去寻找合适的值.

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1)

// 认为更好理解的写法
const differenceWith = (arr, val, comp) => arr.filter(a => !val.some(b => comp(a, b)))
```

<details>
<summary>例子</summary>

```js
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b));  // [1, 1.2]
```

</details>


### differenceBy

使用提供的函数处理传入的2个数组，再返回2个数组之间的差集

首先数组 `b` 每个元素执行 `fn` 后，创建 `Set s`,  再用数组 `a` 使用 `Array.prototype.map()` 传入回调 `fn` 创建一个新数组后再进行 `Array.prototype.filter()` 去比对返回不包含在 `Set s` 内的元素的集合。

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.map(fn).filter(v => !s.has(v))
}
```

<details>
<summary>例子</summary>

```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);; // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x);; // [2]
```
</details>


### drop

使用 `Array.prototype.slice()` 使数组从左开始 丢弃 `n` 个元素，返回新数组



```js
const drop = (arr, n = 1) => arr.slice(n)
```

<details>
<summary>例子</summary>

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```

</details>


### dropRight

使用 `Array.prototype.slice()` 操作数组从右到左丢弃 `n` 个元素，返回新数组

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n)
```


<details>
<summary>例子</summary>

```js
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2; // [1]
dropRight([1, 2, 3], 42); // []
```
</details>

<br>[⬆ Back to top](#contents)

### dropRightWhile

从末尾开始删除 `func` 执行返回 `false` 的元素，直到结果为 `true` 为止，返回余下元素组成的元素(适用于已经排好序的数组).

遍历数组，从最后一项开始判断是否通过 `func` 函数，不通过就通过 `Array.prototype.slice(0, -1)`, 去对 `arr` 重复赋值以达到删除最后一个元素的效果，直到 `func` 返回 `true` 或者 数组的 `length` 为 0, 就停止循环, 返回余下的元素组成的数组

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
}
```

<details>
<summary>例子</summary>

```js
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```

</details>

<br>[⬆ Back to top](#contents)

### dropWhile

删除数组元素，，直到 `func` 返回 `true` 为止，返回余下的数组

遍历数组, 不断的使用 `Array.prototype.slice(1)` 去对 `arr` 赋值以达到删除第一个元素的效果， 直到 `func` 的结果为 `true`, 遍历结束，返回余下的数组

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1)
  return arr
}
```

<details>
<summary>例子</summary>

```js
dropWhile([1, 2, 3, 4], n => n >= 3); // [3, 4]
```

</details>

<br>[⬆ Back to top](#contents)

### everyNth

取数组中所有位置为 `nth` 倍数的元素。

使用 `Array.prototype.filter()` 去创建一个新的数组, 里面包含着所有下标为 `nth` 的倍数的元素。


```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

<details>
<summary>例子</summary>

```js
everyNth([1, 2, 3, 4, 5, 6], 2)
```

</details>

<br>[⬆ Back to top](#contents)

### filterFalsy

使用 `Array.prototype.filter()` 过滤得到一个只包含 [`truthy`](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) 的新数组

```js
const filterFalsy = arr => arr.filter(Boolean)
```

<details>
<summary>例子</summary>

```js
filterFalsy(['', true, {}, false, 'sample', 1, 0]) // [true, {}, 'sample', 1]
```

</details>

<br>[⬆ Back to top](#contents)



### filterNonUnique



使用 `Array.prototype.filter()` 筛选没有重复值的数组

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
```

<details>
<summary>例子</summary>

```js
filterNonUnique([[1, 2, 2, 3, 4, 4, 5]])
```

</details>

<br>[⬆ Back to top](#contents)


### filterNonUniqueBy

使用提供的比较函数，过滤掉数组中所有非唯一元素。


使用 `Array.prototype.filter()` 和 `Array.prototype.every()` 使得数组只剩下唯一的元素，基于传入的对比函数, 对比函数有4个参数，两个元素，和2个元素的下标

```js
const filterNonUniqueBy = (arr, fn) => 
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)))
```

<details>
<summary>例子</summary>

```js
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```

</details>

<br>[⬆ Back to top](#contents)

### findLast

使用 `Array.prototype.filter()` 去对数组进行过滤，留下 `truthy` 值的元素，再对结果进行 `Array.prototype.pop()` 即得到过滤后数组的最后一个元素。

```js
const findLast = (arr, fn) => arr.filter(fn).pop()
```

<details>
<summary>例子</summary>

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```

</details>

<br>[⬆ Back to top](#contents)

### findLastIndex

返回过滤后符合给定条件的数组中的最后一个元素的下标

首先使用 `Array.prototype.map()` 使每个元素都变成一个数组，下标放第一位，值放第二位。再使用 `Array.prototype.filter()` 去移除 `fn` 返回 `false` 的元素, 最后使用 `Array.prototype.pop()` 返回最后一个元素（ps: 此函数有异常分享，体现在第二个环境如果找不到合适的元素的情况下）。

```js
const findLastIndex = (arr, fn) =>
  arr.map((val, i) => [i, val])
  .filter(([i, val]) => fn(val, i, arr))
  .pop()[0]
```

<details>
<summary>例子</summary>

```js
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
```

</details>

<br>[⬆ Back to top](#contents)


### flatten


按照给定的深度去铺平数组

依照变量 `depth` 去递归把数组打平，使用 `Array.ptototype.reduce()` 和 `Array.prototype.concat()` 去合并每一个元素或是数组，递归直到 `depth` 为 1 则停止，默认值为 1

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) =>
    a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v)
  , []);
```

<details>
<summary>例子</summary>

```js
flatten([1, 2, [3, 4, [5, 6]]], 3); // [1, 2, 3, 4, 5, 6]
```

</details>


<br>[⬆ Back to top](#contents)



### forEachRight

对数组中的每一个元素都进行一次回调函数的处理，从右到左的顺序处理

实现这个函数主要有三个步骤

1. 使用 `Array.prototype.slice(0)` 把数组浅拷贝一份
2. 使用 `Array.prototype.reverse()` 使数组翻转
3. 使用 `Array.prototype.forEach(cb)` 对数组(此时数组已经翻转)正向遍历并对每一个元素执行回调 

```js
const forEachRight = (arr, cb) => 
  arr.slice(0)
  .reverse()
  .forEach(cb)
```

<!-- 另外一种实现方式 -->
```js
const _forEachRight = (arr, cb) => arr.forEach((_, i, arr) => cb(arr[arr.length - i - 1]))
```

<details>
<summary>例子</summary>


```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```

</details>

<br>[⬆ Back to top](#contents)



### groupBy

groupBy，故名思意就是给数据分组。

函数接受2个参数

1. arr 要分组的数组
2. fn 可以传递属性 `key` 值，或者函数

首先第一轮会 使用 `Array.prototype.map()` 遍历出一共有多小种 key , 使用 arr(fn) 或者 arr(val => val[fn]) 去遍历出 key 数组
第二轮使用 `Array.prototype.reduce()` 去对 `key` 相同的数据进行装箱(放在同一个数组)操作.

```js
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, key, i) => (acc[key] = (acc[key] || []).concat(arr[i]), acc), {})
```

```js
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length')) // {3: ['one', 'two'], 5: ['three']}
```

</details>

<br>[⬆ Back to top](#contents)

### head

利用下标 0 返回数组的第一项

```js
const head = arr => arr[0]
```

<details>
<summary>例子</summary>

```js

head([1, 2, 3]); // 1
```

</details>

<br>[⬆ Back to top](#contents)


### indexOfAll

数组有2个方法.
- arr 要比对的数组
- val 要寻找的值

方法的目的是寻找出所有与寻找值相同的数的下标，组成新的数组并返回。
这里使用了 `Array.prototype.reduce()` 去遍历每一个元素，对比是否和寻找的值相同，相同的话就加入到 `acc` 数组中，最后返回。

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => el == val ? [...acc, i] : acc, [])
```

<details>
<summary>例子</summary>

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0, 3]
```


</details>

<br>[⬆ Back to top](#contents)


### initial


使用 `Array.prototype.slice(0, -1)` 去返回一个 除了最后一个元素外, 新的数组。

```js
const initial = arr => arr.slice(0, -1)
```

<details>
<summary>例子</summary>

```js
initial([1, 2, 3]); // [1, 2]
```

</details>

<br>[⬆ Back to top](#contents)


### initialize2DArray


用传入的变量 `w` 和 `h` 去初始化一个二维数组，使用 `Array.prototype.mao()` 去迭代生成 `h` 个数组，每个数组的长度为 `w`, 每个元素都初始化为传入的 `val`, 如果 `val` 不传值，则默认为 `null`。

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val))
```


<details>
<summary>例子</summary>

```js
console.log(initialize2DArray(3, 3, 10)); //[ [ 10, 10, 10 ], [ 10, 10, 10 ], [ 10, 10, 10 ] ]
```


</details>

<br>[⬆ Back to top](#contents)




### initializeArrayWithRange

按照给出的范围去初始化数组

首先介绍参数

- end 数组的结束值
- start 从何处开始
- step 每次步进值

函数介绍

该函数主体使用了 `Array.prototype.from({length: n}, fn)` 代替 `for` 循环去生成和遍历，`length` 使用 `(end - start + 1) / step` 去计算，`fn` 传递一个函数，具体为每一项生成的值的公式，这里使用的是  `index * step + start`。


```js
const initializeArrayWithRange = (end, start = 0, step = 1) => 
  Array.from({ length: Math.ceil((end - start + 1) / step)}, (_, i) => i * step + start)
```

<details>
<summary>例子</summary>

```js
initializeArrayWithRange(20, 2, 2); //[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

</details>

<br>[⬆ Back to top](#contents)


### initializeArrayWithRangeRight

依照给定的范围以及步进去生成倒叙数组，首先用 `~~((end + 1 - start) / step)` 去计算数组长度，再用 map 进行遍历生成数组，这里用到的是 `(arr.length - i - 1) * step + start` 就能得到反序数组。

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

<details>
<summary>例子</summary>


```js
initializeArrayWithRangeRight(20, 2, 2); // [ 20, 18, 16, 14, 12, 10, 8, 6, 4, 2 ]
```


</details>

<br>[⬆ Back to top](#contents)


### initializeArrayWithValues

首先使用 `Array(n)` 去初始化一个长度为 `n` 的空数组，再使用 `fill(v)` 去对数组的每一项进行值填充，`val` 如果忽略的话，值为 `0`。

```js
// 官方实现
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val)

// 其他实现
const initializeArrayWithValues = (n, val = 0) => Array.from({ length: n }, () => val)
```


<details>
<summary>例子</summary>

```js
initializeArrayWithValues(10, 10); // [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
```

</details>

<br>[⬆ Back to top](#contents)



### initializeNDArray

给定一个 `val` 值，后续参数用来约定要生成数组的行数，每次递归取 `args[0]` 作为数组长度，然后对数组使用 `Array.prototype.map()` 进行对每个子项递归调用 `initializeNDArray`，直到 `args` 数组为 `0`，递归停止，返回值。所以函数会根据后续参数的个人确定其深度，最后一位则是元素个数。

```js
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)))
```

<details>
<summary>例子</summary>

```js
console.log(initializeNDArray(1, 3)); // [1, 1, 1]
console.log(initializeNDArray(5, 2, 2, 2));  // [ [ [ 5, 5 ], [ 5, 5 ] ], [ [ 5, 5 ], [ 5, 5 ] ] ]
```


</details>

<br>[⬆ Back to top](#contents)


### intersection

返回2个数组之间的交集，首先用数组 b 创建一个 `Set` 在用 数组 a 进行 `Array.prototype.filter()` 操作，遍历数组中的每一项，判断是否在数组 b 中，是的话，就为 `true`, 最后返回结果。

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
```

<details>
<summary>例子</summary>

```js
console.log(intersection([1, 2, 3, 4, 5], [1, 2, 3])); // [1, 2, 3]
```

</details>

<br>[⬆ Back to top](#contents)


### intersectionBy

使用数组 b 对每一项元素应用 `fn` 后的结果数组，创建一个新的 集合 `set`, 再对数组 `a` 执行 `Array.prototype.filter()` 去判断元素执行 `fn` 后的结果是否存在与 set 中。最后返回 `s.has(fn(v))` 为 `true` 的元素的数组。

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.filter(v => s.has(fn(v)))
}
```
<details>
<summary>例子</summary>

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 2.1 ]
```

</details>

<br>[⬆ Back to top](#contents)


### intersectionWith

返回两个数组交集元素（使用提供的比较函数）的组成的新数组，使用数组 `a` 执行 `Array.prototype.filter()` ， 查找每一个元素跟数组 `b` 各元素 （`Array.prototype.findIndex(y => comp(x, y))`）执行函数 `comp` 的比较结果，如果跟其中一个元素的比较结果为 `true`, 就是相交元素。

```js
const intersectionWith = (a, b, comp) =>
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
```

```js
// 扩展写法
const intersectionWith = (a, b, comp) => a.filter(x => b.some(y => comp(x, y)));
```

<details>
<summary>例子</summary>

```js
intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [ 1.5, 3, 0 ]
```



</details>

<br>[⬆ Back to top](#contents)


### isSorted


如果数组是升序返回 1，降序 -1 ，无序 返回 0。

计算头两个元素的排序方向，使用 `Object.entries()` 去遍历数组，并且对比他们的每一项，当 `direction` 为 0 的时候，遍历终止并返回，或者到达最后一个元素的时候。 

```js
const isSorted  = (arr) => {
  // 初始化 方向值
  let direction = -(arr[0] - arr[1])
  // 遍历数组
  for (let [i, val] of arr.entries()) {
    // 这里只有前后元素一致的时候才会进入 true 区域
    direction = !direction ? - (arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction
    else if ((val - arr[i + 1]) * direction > 0) return 0
  }
}
```
<details>
<summary>例子</summary>

```js
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
```

</details>

<br>[⬆ Back to top](#contents)

### join

把数组中的所有元素用连接符连接起来并返回，首先对传入的数组进行 `Array.prototype.reduce()` 遍历，然后对每一项值的 `index` 作判断，除了最后一个，都进行 `字符串 + 值 + sperator(分隔符)`, sperator 如果省略不填的话，默认会是 `,`

```js
const join = (arr, sperator = ',') => 
  arr.reduce((acc, val, i) => {
    return i === arr.length - 1 ?  acc + val : acc + val + sperator
  }, '')
```

<details>
<summary>例子</summary>

```js
join([1,2,3,4,5,6], ';'); // 1;2;3;4;5;6
```
</details>

<br>[⬆ Back to top](#contents)

### JSONtoCSV

将 JSON 字符串转换成 逗号分隔值文件格式, 首先使用 `Array.prototype.join(delimiter)` 去把 `columns` 变成首行(表头), 再使用 `Array.prototype.map()` 去遍历 JSON 数组, 再在 map 的回调函数中 对每个对象进行 `columns` `Array.prototype.reduce()` 的进行字符串拼接，最后对 `map` 返回的新数组进行结构，再对最外层的数组进行 `join(delimiter)` 合并操作, `delimiter` 可以不传，默认是 `,` 。

```js
const JSONtoCSV = (arr, columns, delimiter = ",") =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${obj[key] || ""}"`,
        ""
      )
    )
  ].join("\n");
```

<details>
<summary>例子</summary>

```js
JSONtoCSV(
  [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
  ["a", "b"]
);

JSONtoCSV(
  [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
  ["a", "b"],
  ";"
);
```

</details>

<br>[⬆ Back to top](#contents)



### last

返回数组最后一项，使用 `arr.length - 1` 计算最后一个元素的下标，然后返回它。

```js
const last = arr => arr[arr.length - 1]
```

<details>
<summary>例子</summary>

```js
last([1, 2, 3, 4]) // 4
```


</details>

<br>[⬆ Back to top](#contents)


### longestItem

传入任意数量的可迭代对象（包含 `length` 属性），返回 `length` 最长的一个，如果有多个长度相同的，则返回第一个。如果不提供参数，将返回  `undefined`.

使用 `Array.prototype.reduce()` 去对比所有对象的  `length` 属性，返回长度最长的一个.


```js
const longestItem = (...vals) => vals.reduce((a, x) => (a.length > x.length ? a : x))
```


<details>
<summary>例子</summary>

```js
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'
```

</details>

<br>[⬆ Back to top](#contents)



### mapObject

首先使用 `Array.prototype.map()` 用传入的 `fn` 创建一个新的数组，再遍历原来的数组，并使用对应下标下，`origin` 数组的项作为键, `fn new` 数组的项作为值，构建一个键值对的 `map`.

```js 
const mapObject = (arr, fn) => arr.reduce((acc, v) => (acc[v] = fn(v), acc), {})
```


<details>
<summary>例子</summary>

```js
const squartIt = arr => mapObject(arr, a => a ** 2);
squartIt([1, 2, 3]) // { '1': 1, '2': 4, '3': 9 }

const getFirstChar = arr => mapObject(arr, v => v[0]);
getFirstChar(['abc','hello', 'wrold']) // { abc: 'a', hello: 'h', wrold: 'w' }
```

</details>

<br>[⬆ Back to top](#contents)

<details>
<summary>例子</summary>

### maxN

返回一个由元素组提供的 `n` 个元素组成的新年数组，如果 `n` 等于原数组的长度，那么返回一个由原数组经过降序排序后的新数组。

首先使用 (`...`) es6 的解构云算法对数组进行一份浅拷贝，再使用 `Array.prototype.sort()` 进行降序排序，最后使用 `Array.prototype.slice()` 返回一个长度为 `n` 的数组。`n` 可以省略，默认为1.

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)
```

```js
maxN([1, 2, 3]) // [ 3 ]
maxN([1, 2, 3], 2) // [ 3, 2 ]
```

</details>

<br>[⬆ Back to top](#contents)


<details>
<summary>例子</summary>

### minN

返回一个由元素组提供的 `n` 个元素组成的新年数组，如果 `n` 等于原数组的长度，那么返回一个由原数组经过升序排序后的新数组。

首先使用 (`...`) es6 的解构云算法对数组进行一份浅拷贝，再使用 `Array.prototype.sort()` 进行升序排序，最后使用 `Array.prototype.slice()` 返回一个长度为 `n` 的数组。`n` 可以省略，默认为1.

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)
```

```js
minN([1, 2, 3]) // [ 1 ]
minN([1, 2, 3], 2) // [ 1, 2 ]
```

</details>

<br>[⬆ Back to top](#contents)


### none

使用 `Array.prototype.some()` 去判断是否所有的元素都不符合 `fn` 的判断, 第二个参数可以省略，默认是 `Boolean`

```js
const none = (arr, fn = Boolean) => !arr.some(fn)
```

<details>
<summary>例子</summary>

```js
none([0, 0, 0]); // true
none([0, 1, 3, 0]); // false
```

</details>

<br>[⬆ Back to top](#contents)


### nthElement

返回输入的第 `n` 个元素, 使用 `Array.prototype.slice()` 去得到一个包含 `nth`(目标) 元素在第一位的数组，如果下标越界，将会返回 `undefined`, 第二个参数省略的话会是 0，会得到数组的第一个元素。

```js
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(0, n + 1))[0]
```

<details>
<summary>例子</summary>


```js
nthElement(["a", "b", "c"], 1); // b
nthElement(['a', 'b', 'c'], -3); // a
```

</details>

<br>[⬆ Back to top](#contents)


### offset

移动一定数量的元素到数组的末尾, 使用 `Array.prototype.slice()` 去得到 `offset` 之前的元素数组，和 `offset` 之后的元素数组，再使用结构运算符 (...) 把两个数组合并成一个数组，`offset` 不传的话，默认为0，数组不进行任何操作，如果为负数的话，会把元素从后面放置到前面。

```js
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)]
```

<details>
<summary>例子</summary

```js
offset([1, 2, 3, 4, 5, 6], 3); // [4, 5, 6, 1, 2, 3]
offset([1, 2, 3, 4, 5, 6], -2);  // [5, 6, 1, 2, 3, 4]
offset([1, 2, 3, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]
```

</details>

<br>[⬆ Back to top](#contents)


### partition

对传入的数组依据提供的函数进行分类，`true` `false` 各为一组

使用 `Array.prototype.reduce()` ，首先创建一个有两个数组的数组为初始值，再对每个元素进行 `fn` 的调用，返回值为 `true` 就加入第一个数组，`false` 就加入第二个数组。使用 `Array.prototype.push()`。

```js
const partition = (arr, fn = Boolean) =>
  arr.reduce(
    (acc, val, i, arr) => (acc[fn(val, i, arr) ? 0 : 1].push(val), acc),
    [[], []]
  );
```


<details>
<summary>例子</summary


```js
partition([0, 1, 2, 3, 4, 5, 6]); // [[1,2,3,4,5,6], [0]]
partition([0, 1, 2, 3, 4, 5, 6], n => n > 3); // [[4,5,6], [0,1,2,3]]
```

</details>

<br>[⬆ Back to top](#contents)