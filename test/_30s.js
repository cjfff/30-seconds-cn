const all = (arr, fn = Boolean) => arr.every(fn)

const allEqual = arr => arr.every(val => val === arr[0])

const any = (arr, fn = Booelan) => arr.some(fn);

const arrayToCSV = (arr, delimiter = ',') =>
	arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n')


const bifurcate = (arr, filter) =>
	arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[],[]])

module.exports = {
	all,
	allEqual,
	any,
	arrayToCSV,
	bifurcate
};