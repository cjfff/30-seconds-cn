### difference

返回2个数组之间的差集

使用数组 `b` 创建一个 `Set`， 再用数组 `a` 执行 `Array.prototype.filter()` 筛选不包含在数组 `b` 的元素的集合。


```js
const difference = (a, b) => {
	const s = new Set(b)
	return a.filter(x => !s.has(x))
}
```

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```