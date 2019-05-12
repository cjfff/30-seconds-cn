const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]

sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 9

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let result = {}
for (let i = 0; i < 100; i++) {
  let n = sample(arr)
  result[n] = (result[n] || 0) +1
}

console.log(result);