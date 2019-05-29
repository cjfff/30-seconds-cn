const all = (arr, fn = Boolean) => arr.every(fn);

const allEqual = arr => arr.every(val => val === arr[0]);

const any = (arr, fn = Booelan) => arr.some(fn);

const arrayToCSV = (arr, delimiter = ",") =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join("\n");

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    []
  ]);

const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    []
  ]);

const chunk = (arr, size) =>
  Array.from(
    {
      length: Math.ceil(arr.length / size)
    },
    (v, i) => arr.slice(i * size, i * size + size)
  );

const compact = arr => arr.filter(Boolean);

const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(v => !s.has(v));
};

const differenceWith = (arr, val, comp) =>
  arr.filter(a => !val.some(b => comp(a, b)));

const drop = (arr, n = 1) => arr.slice(n);

const dropRight = (arr, n = 1) => arr.slice(0, -n);

const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

const filterFalsy = arr => arr.filter(Boolean);

const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

const findLast = (arr, fn) => arr.filter(fn).pop();

const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

const forEachRight = (arr, cb) =>
  arr
    .slice(0)
    .reverse()
    .forEach(cb);

const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el == val ? [...acc, i] : acc), []);

const initial = arr => arr.slice(0, -1);

const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (_, i) => i * step + start
  );

const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

const initializeArrayWithValues = (n, val = 0) =>
  Array.from({ length: n }, () => val);

const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() =>
        initializeNDArray(val, ...args.slice(1))
      );

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(v => s.has(fn(v)));
};

const intersectionWith = (a, b, comp) =>
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

const isSorted = arr => {
  // 初始化 方向值
  let direction = -(arr[0] - arr[1]);
  // 遍历数组
  for (let [i, val] of arr.entries()) {
    // 这里只有前后元素一致的时候才会进入 true 区域
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};

const join = (arr, sperator = ",") =>
  arr.reduce((acc, val, i) => {
    return i === arr.length - 1 ? acc + val : acc + val + sperator;
  }, "");

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

const last = arr => arr[arr.length - 1];

const longestItem = (...vals) =>
  vals.reduce((a, x) => (a.length > x.length ? a : x));

const mapObject = (arr, fn) =>
  arr.reduce((acc, v) => ((acc[v] = fn(v)), acc), {});

const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

const minN = (arr, n = 1) =>
  arr
    .slice(0)
    .sort((a, b) => a - b)
    .slice(0, n);

const none = (arr, fn = Boolean) => !arr.some(fn);

const nthElement = (arr, n = 0) =>
  (n === -1 ? arr.slice(n) : arr.slice(0, n + 1))[0];

const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];

const partition = (arr, fn = Boolean) =>
  arr.reduce(
    (acc, val, i, arr) => (acc[fn(val, i, arr) ? 0 : 1].push(val), acc),
    [[], []]
  );

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

const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};

const pullAtIndex = (arr, pullArr) => {
  let removed = [],
    pulled = [];
  arr.forEach((v, i) => (pullArr.includes(i) ? removed : pulled).push(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};

const pullAtValue = (arr, valueArr) => {
  let removed = [],
    pulled = [];

  arr.forEach(v => (valueArr.includes(v) ? removed : pulled).push(v));

  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};

const pullBy = (
  arr,
  pullArr,
  fn = () => {
    throw Error("fn is must be");
  }
) => {
  let argsState = new Set(pullArr.map(fn));
  let pulled = arr.filter(v => !argsState.has(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};

const reducedFilter = (data, keys, fn) =>
  data
    .filter(fn)
    .map(el => keys.reduce((acc, key) => ((acc[key] = el[key]), acc), {}));

const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, v) => (res.push(fn(res.slice(-1)[0], v)), res), [acc]);

const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

const reject = (arr, pred) => arr.filter((...args) => !pred(...args));

const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return [...acc, val];
      }, [])
    : [];

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const similarity = (arr, values) => arr.filter(v => values.includes(v));

const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el =>
    isDescending ? val >= fn(el) : val <= fn(el)
  );
  return index === -1 ? arr.length : index;
};

const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr
    .reverse()
    .findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};

const sortedLastIndexBy = (arr, n, fn) => {
  const isDecsending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDecsending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};

const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);

const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

const symmetricDifferenceBy = (a, b, fn) => {
  let sA = new Set(a.map(fn)),
    sB = new Set(b.map(fn));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};

const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

const take = (arr, n = 1) => arr.slice(0, n);

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);

const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};

const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );

const union = (a, b) => Array.from(new Set([...a, ...b]));

module.exports = {
  all,
  allEqual,
  any,
  arrayToCSV,
  bifurcate,
  bifurcateBy,
  chunk,
  compact,
  countOccurrences,
  deepFlatten,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  everyNth,
  filterFalsy,
  filterNonUnique,
  filterNonUniqueBy,
  findLast,
  flatten,
  forEachRight,
  indexOfAll,
  initial,
  initialize2DArray,
  initializeArrayWithRange,
  initializeArrayWithRangeRight,
  initializeArrayWithValues,
  initializeNDArray,
  intersection,
  intersectionBy,
  intersectionWith,
  isSorted,
  join,
  JSONtoCSV,
  last,
  longestItem,
  mapObject,
  maxN,
  minN,
  none,
  nthElement,
  offset,
  partition,
  permutations,
  pull,
  pullAtIndex,
  pullAtValue,
  pullBy,
  reducedFilter,
  reduceSuccessive,
  reduceWhich,
  reject,
  remove,
  sample,
  sampleSize,
  shank,
  shuffle,
  similarity,
  sortedIndex,
  sortedIndexBy,
  sortedLastIndex,
  sortedLastIndexBy,
  stableSort,
  symmetricDifference,
  symmetricDifferenceBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  toHash,
  union
};
