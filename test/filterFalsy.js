const filterFalsy = arr => arr.filter(Boolean)

console.log(filterFalsy(['', true, {}, false, 'sample', 1, 0]));