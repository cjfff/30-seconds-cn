### shuffle

对数组的元素进行随机排序，再返回一个新的数组。

使用洗牌算法去对数组进行重新排序。

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr
};
```

```js
const arr = [1,2,3,4,5,7,8,9,10]
console.log(shuffle(arr)); // [ 3, 4, 10, 1, 5, 9, 7, 2, 8 ]
```