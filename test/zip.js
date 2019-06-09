const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(A => A.length));
  return Array.from({ length: maxLength }, (_, i) =>
    Array.from({ length: arrays.length }, (_, k) => arrays[k][i])
  );
};

console.log(zip(["a", "b"], [1, 2], [true, false])); // [['a', 1, true], ['b', 2, false]]
console.log(zip(["a"], [1, 2], [true, false]));
