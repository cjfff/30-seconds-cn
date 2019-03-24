const all = (arr, fn = Boolean) => arr.every(fn)

const allEqual = arr => arr.every(val => val === arr[0])

const any = (arr, fn = Booelan) => arr.some(fn);

const arrayToCSV = (arr, delimiter = ',') =>
	arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n')


const bifurcate = (arr, filter) =>
	arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
		[],
		[]
	])

const bifurcateBy = (arr, fn) =>
	arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
		[],
		[]
	])


const chunk = (arr, size) =>
	Array.from({
			length: Math.ceil(arr.length / size)
		}, (v, i) =>
		arr.slice(i * size, i * size + size)
	);

const compact = arr => arr.filter(Boolean)


module.exports = {
	all,
	allEqual,
	any,
	arrayToCSV,
	bifurcate,
	bifurcateBy,
	chunk,
	compact
};