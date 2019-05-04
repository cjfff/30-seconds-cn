const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter(v => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};

let arr = [1, 2, 3, 4, 5, 1, 3];
pull(arr, 1, 3, 5);

console.log(arr);
