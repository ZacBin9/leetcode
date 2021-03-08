/**
 * @param {number} n
 * @return {number}
 */

// DP 也可用中间变量滚动数组 节省空间
var climbStairs = function (n) {
  const dp = []
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  return dp[n]
}

// 滚动数组
var climbStairs = function (n) {
  let prev = 1
  let cur = 1

  for (let i = 2; i <= n; i++) {
    const temp = prev + cur
    prev = cur
    cur = temp
  }

  return cur
}

// 1 2 3 5 8 13 ...
