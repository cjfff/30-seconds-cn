# 30-seconds-cn

每天学习一个 30-seconds-code 函数, 并翻译 =v=， 在此记录学习过程~~


## Contents

### 📚 Array

<details>
<summary>View contents</summary>

* [`all`](#all)

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
<summary>Examples</summary>

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
<summary>Examples</summary>

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]) // true
```

</details>



