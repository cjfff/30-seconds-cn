const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)))


console.log(initializeNDArray(1, 3));
console.log(initializeNDArray(5, 2, 2, 2));