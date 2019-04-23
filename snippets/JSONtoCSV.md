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
