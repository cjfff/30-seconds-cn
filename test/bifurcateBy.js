const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []])



const users = [
  { name: 'users1', age: 16 },
  { name: 'users2', age: 20 },
  { name: 'users3', age: 18 },
  { name: 'users4', age: 25 },
  { name: 'users5', age: 12 },
  { name: 'users6', age: 14 }
]

const cb = ({ age }) => age >= 18;

console.log(bifurcateBy(users, cb));

console.log(bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b"));
