const join = (arr, sperator = ',') => 
  arr.reduce((acc, val, i) => {
    return i === arr.length - 1 ?  acc + val : acc + val + sperator
  }, '')


console.log(join([1,2,3,4,5,6], ';'));