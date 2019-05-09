/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0,
      r = nums.length - 1,
      m;

    while (l <= r) {
      m = Math.floor((l + r)/ 2)
      if (nums[m] > target) {
        r = m
      } else if (nums[m] === target) {
        return m
      } else {
        l = m + 1
      }
    }
    return m
};


console.log(searchInsert([1, 3, 5, 6], 7));


var plusOne = function(digits) {
  console.log(digits.join("")- 0 + 1);
  console.log(Number(digits.join("")) + 1);
  return (Number(digits.join("")) + 1)
    .toString()
    .split("")
    .map(Number);
};

let a = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(a));