const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

// const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
//   Array.from(
//     { length: Math.ceil((end + 1 - start) / step) },
//     (v, i, arr) => i * step + start
//   ).reverse();

// const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
//   [...Array(Math.ceil((end + 1 - start) / step))].map(
//     (_, i, arr) => (arr.length - i - 1) * step + start
//   );

console.log(initializeArrayWithRangeRight(20, 2, 2));
