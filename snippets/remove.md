### remove

删除数组中执行函数返回 `false` 的所有元素。先使用 `Array.prototype.filter()` 去找到所有返回 `true` 的元素，再对其执行 `Array.prototype.reduce()` 去对这些元素执行 `Array.prototype.splice()`。`func` 的参数一共有三个 `(value, index, array)`。


```js
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return [...acc, val]
      }, [])
    : [];
```


```js
let a = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(remove(a, v => v > 3), a); //[ 4, 5, 6, 7, 9 ] [ 1, 2, 3 ]
```
