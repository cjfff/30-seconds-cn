const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

console.log(sortedIndex([5, 3, 2, 1], 4));
console.log(sortedIndex([30, 50], 60));