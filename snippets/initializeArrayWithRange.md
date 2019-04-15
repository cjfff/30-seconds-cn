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

```js
initializeArrayWithRange(20, 2, 2); //[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```
