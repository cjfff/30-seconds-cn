const xProd = (a, b) =>
  a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);


console.log(xProd([1, 2], ["a", "b", 'c']));