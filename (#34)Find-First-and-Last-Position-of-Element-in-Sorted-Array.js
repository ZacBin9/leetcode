/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分法
const binarySearch = (nums, target, lower) => {
  let left = 0
  let right = nums.length - 1
  let matchIndex = nums.length
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      matchIndex = mid
    } else {
      left = mid + 1
    }
  }
  return matchIndex
}

var searchRange = function (nums, target) {
  let result = [-1, -1]
  let left = binarySearch(nums, target, true)
  let right = binarySearch(nums, target, false) - 1
  if (
    left <= right &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  ) {
    result = [left, right]
  }

  return result
}

// 循环
var searchRange = function (nums, target) {
  let left = -1
  let right = -1
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === target) {
      if (i === 0 || nums[i - 1] < target) {
        left = i
      }
      if (i === len - 1 || nums[i + 1] > target) {
        right = i
      }
    } else if (nums[i] > target) {
      break
    }
  }
  return [left, right]
}
// console.log(searchRange([5, 7, 7, 8, 8, 10, 12, 15, 20, 22, 28, 32], 8))
console.log(searchRange([0, 0, 0, 2, 3, 4], 0))
