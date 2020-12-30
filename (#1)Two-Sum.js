const util = require('util')
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 方法一 暴力双循环
 */
// var twoSum = function (nums, target) {
//   let indexA = 0
//   let indexB = 0
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = nums.length - 1; j > i; j--) {
//       if (nums[i] + nums[j] === target) {
//         indexA = i
//         indexB = j
//       }
//     }
//   }
//   return [indexA, indexB]
// }

/**
 *
 * @param {*} nums
 * @param {*} target
 * 方法二
 */

// 构建另一个值-索引的map
var twoSum = function (nums, target) {
  const numMap = new Map()
  nums.forEach((num, i) => {
    numMap.set(num, i)
  })
  for (let i = 0, len = nums.length; i < len; i++) {
    const theRest = target - nums[i]
    const theRestIndex = numMap.get(theRest)
    if (numMap.has(theRest) && theRestIndex !== i) {
      return [i, theRestIndex]
      break
    }
  }
}
twoSum([2, 7, 11, 15], 9)
