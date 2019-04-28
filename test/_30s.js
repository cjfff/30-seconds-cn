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

const minN = (arr, n = 1) =>  arr.slice(0).sort((a, b) => a - b).slice(0, n)

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
  minN
};
