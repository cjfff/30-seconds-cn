const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.filter(v => s.has(fn(v)))
}


console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));