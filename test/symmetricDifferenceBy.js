const symmetricDifferenceBy = (a, b, fn) => {
  let sA = new Set(a.map(fn)),
    sB = new Set(b.map(fn));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};

console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // [ 1.2, 3.4 ]

console.log(
  symmetricDifferenceBy(
    [{ age: 20 }, { age: 24 }, { age: 30 }],
    [{ age: 20 }, { age: 33 }, { age: 22 }, { age: 24 }],
    ({ age }) => age
  )
); // [ {age: 30}, {age:33}, {age:22}]
