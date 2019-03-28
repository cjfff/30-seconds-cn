const difference = (a, b) => {
  const s = new Set(b)
  return a.filter(x => !s.has(x))
}


console.log(difference([1, 2, 3], [1, 2, 4]));