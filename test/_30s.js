const all = (arr, fn = Boolean) => arr.every(fn)

const allEqual = arr => arr.every(val => val === arr[0])

module.exports = {
	all,
	allEqual
};