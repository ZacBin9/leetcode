/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique = 0
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] !== nums[unique]) {
      nums[++unique] = nums[i]
    }
  }

  return unique + 1
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 7]))
