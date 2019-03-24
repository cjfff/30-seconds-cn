const compact = arr => arr.filter(Boolean)

console.log(compact([false, null, 0, '', undefined, NaN, 1, '1', true, [], {}]));