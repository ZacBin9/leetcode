/**
 * @param {number[]} nums
 * @return {number}
 */

// DP
// var rob = function (nums) {
//   let len = nums.length
//   if (len === 0) return 0
//   const dp = new Array(len + 1)
//   dp[0] = 0
//   dp[1] = nums[0]

//   for (let i = 2; i <= len; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
//   }

//   return dp[len]
// }

// 滚动数组
var rob = function (nums) {
  let pre = 0
  let cur = 0
  let temp = 0

  for (let num of nums) {
    temp = pre
    pre = cur
    cur = Math.max(temp + num, cur)
  }

  return cur
}

console.log(rob([2, 7, 9, 3, 1])) // 12
