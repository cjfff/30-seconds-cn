const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn))
  return [...a, ...b.filter(x => !s.has(fn(x)))]
}


console.log(unionBy([2.1], [1.2, 2.3], Math.floor)); // [2.1, 1.2]);