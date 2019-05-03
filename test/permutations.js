const permutations = arr => {
  // 停止递归的条件是数组的长度为 2 或以下停止，2是作为递归停止，2以下则是避免传入的数组长度不足2
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  // 递归遍历 (`Array.prototype.reduce`) 整个数组，每次遍历都求除了当前轮次元素的其余数组成员的全排列（递归调用），如果被求的数组成员数量大于2，则会继续被遍历求其全排列，
  // 等于2则会终止递归返回 [arr, arr[1], arr[0]] ，然后对其全排列数组使用 `Array.prototype.map()` 另其与被剔除的元素形成三个元素的全排列。
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val
        ])
      ),
    []
  );
};

permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
