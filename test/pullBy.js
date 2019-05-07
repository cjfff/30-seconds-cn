const pullBy = (arr, pullArr, fn = () => { throw Error('fn is must be')}) => {
  let argsState = new Set(pullArr.map(fn))
  let pulled = arr.filter(v => !argsState.has(fn(v)))
  arr.length  = 0
  pulled.forEach(v => arr.push(v))
}

var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); 

console.log(myArray);