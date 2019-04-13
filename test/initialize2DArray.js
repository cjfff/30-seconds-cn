const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val))


console.log(initialize2DArray(3, 3, 10));