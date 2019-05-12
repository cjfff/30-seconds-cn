const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return [...acc, val];
      }, [])
    : [];

let a = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(remove(a, v => v > 3), a);
