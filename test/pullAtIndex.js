const pullAtIndex = (arr, pullArr) => {
  let removed = [],
    pulled = [];
  arr.forEach((v, i) => (pullArr.includes(i) ? removed : pulled).push(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};


let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]

console.log(myArray, pulled);