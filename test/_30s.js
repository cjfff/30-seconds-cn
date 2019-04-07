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

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v))


const difference = (a, b) => {
	const s = new Set(b)
	return a.filter(x => !s.has(x))
}

const differenceBy = (a, b, fn) => {
	const s = new Set(b.map(fn))
	return a.map(fn).filter(v => !s.has(v))
}


const differenceWith = (arr, val, comp) => arr.filter(a => !val.some(b => comp(a, b)))

const drop = (arr, n = 1) => arr.slice(n)

const dropRight = (arr, n = 1) => arr.slice(0, -n)

const dropRightWhile = (arr, func) => {
	while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
	return arr;
}

const dropWhile = (arr, func) => {
	while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
	return arr
}

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

const filterFalsy = arr => arr.filter(Boolean)

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

const filterNonUniqueBy = (arr, fn) =>
	arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)))

const findLast = (arr, fn) => arr.filter(fn).pop()

module.exports = {
	all,
	allEqual,
	any,
	arrayToCSV,
	bifurcate,
	bifurcateBy,
	chunk,
	compact,
	countOccurrences,
	deepFlatten,
	difference,
	differenceBy,
	differenceWith,
	drop,
	dropRight,
	dropRightWhile,
	dropWhile,
	everyNth,
	filterFalsy,
	filterNonUnique,
	filterNonUniqueBy,
	findLast
};