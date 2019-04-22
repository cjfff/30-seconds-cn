### join

把数组中的所有元素用连接符连接起来并返回，首先对传入的数组进行 `Array.prototype.reduce()` 遍历，然后对每一项值的 `index` 作判断，除了最后一个，都进行 `字符串 + 值 + sperator(分隔符)`, sperator 如果省略不填的话，默认会是 `,`

```js
const join = (arr, sperator = ',') => 
  arr.reduce((acc, val, i) => {
    return i === arr.length - 1 ?  acc + val : acc + val + sperator
  }, '')
```


```js
join([1,2,3,4,5,6], ';'); // 1;2;3;4;5;6
```