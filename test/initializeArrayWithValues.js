// const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val)

const initializeArrayWithValues = (n, val = 0) => Array.from({ length: n }, () => val)


console.log(initializeArrayWithValues(10, 10));