const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.map(fn).filter(v => !s.has(v))
}



console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));; // [1]
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));; // [2]