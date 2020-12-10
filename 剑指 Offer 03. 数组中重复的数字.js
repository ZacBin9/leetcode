/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一
// 时间复杂度o(n) 空间复杂度o(n)
// var findRepeatNumber = function (nums) {
//   const numSet = new Set()
// for (let i = 0, len = nums.length; i < len; i++) {
//   numSet.add(nums[i])
//   if (numSet.size <= i) {
//     return nums[i]
//   }
// }
// }

// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内
// 一定要注意审题 这说明 nums[i]一定对应某个索引
// 方法二
var findRepeatNumber = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i]
      } else {
        let tmp = nums[nums[i]]
        nums[nums[i]] = nums[i]
        nums[i] = tmp
      }
    }
  }
}

findRepeatNumber([1, 2, 3, 1])
// 0 - [2, 1, 3, 1]
// 0 - [3, 1, 2, 1]
// 0 - [1, 1, 2, 3]

// 值
// [4, 3, 1, 0, 2, 3, 5]
// 索引
// [0, 1, 2, 3, 4, 5 ,6]

//  2, 3, 1, 0, 4, 3, 5
//  2, 0, 1, 3, 4, 3, 5
//  2, 1, 0, 3, 4, 3, 5
//
