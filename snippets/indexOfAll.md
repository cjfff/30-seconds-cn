### indexOfAll

数组有2个方法.
- arr 要比对的数组
- val 要寻找的值

方法的目的是寻找出所有与寻找值相同的数的下标，组成新的数组并返回。
这里使用了 `Array.prototype.reduce()` 去遍历每一个元素，对比是否和寻找的值相同，相同的话就加入到 `acc` 数组中，最后返回。

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => el == val ? [...acc, i] : acc, [])
```

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0, 3]
```