const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);

console.log(takeRightWhile([1, 2, 3, 4], n => n < 3)); // [3, 4]);

const arr = [{ age: 20 }, { age: 30 }, { age: 25 }, { age: 26 }];

console.log(takeRightWhile(arr, ({ age }) => age < 25));
