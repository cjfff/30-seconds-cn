### arrayToCSV

把二维数组转换成字符分隔值字符串

使用 `Array.prototype.map` 把二维数组的每一个子项都用 `Array.prototype.join(delimiter)` 处理成一维的字符串数组。再对一维字符串数组使用 `Array.prototype.join('\n')` ，使数组变成一个 `CSV` 字符串，将数组的每一个元素都用换行符连接，使输出在新行。如果省略第二个参数，将使用默认分隔符 `，`。

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n')
```

```js
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
```