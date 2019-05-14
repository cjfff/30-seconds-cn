const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr
};


const arr = [1,2,3,4,5,7,8,9,10]
console.log(shuffle(arr));