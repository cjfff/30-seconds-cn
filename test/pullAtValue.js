const pullAtValue = (arr, valueArr) => {
  let removed = [],
    pulled = []

  arr.forEach(v => (valueArr.includes(v) ? removed : pulled).push(v))

  arr.length = 0;
  pulled.forEach(v => arr.push(v))
  return removed
}



let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]

console.log(myArray, pulled);