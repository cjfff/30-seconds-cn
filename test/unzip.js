const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from(
      {
        length: Math.max(...arr.map(x => x.length))
      },
      () => []
    )
  );

// const unzip = arr => {
//   let max = Math.max(...arr.map(x => x.length));
//   let A = Array.from({ length: max }, () => []); // [[], [], []] 类似
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].forEach((val, j) => A[j].push(val));
//   }
//   return A;
// };

console.log(unzip([["a", 1, true], ["b", 2, false]])); // [['a', 'b'], [1, 2], [true, false]]
console.log(unzip([["a", 1, true], ["b", 2]])); // [['a', 'b'], [1, 2], [true]]
