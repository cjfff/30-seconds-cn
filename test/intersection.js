const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

console.log(intersection([1, 2, 3, 4, 5], [1, 2, 3]));
