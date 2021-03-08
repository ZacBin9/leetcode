/**
 * @param {number[]} prices
 * @return {number}
 */

// Greedy
var maxProfit = function (prices) {
  let max = 0
  let minPrice = Infinity
  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else {
      max = Math.max(max, prices[i] - minPrice)
    }
  }
  return max
}

// DP
var maxProfit = function (prices) {
  let len = prices.length
  let dp = new Array(len).fill(0)
  let minPrice = prices[0]
  for (let i = 1; i < len; i++) {
    minPrice = Math.min(prices[i], minPrice)
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
  }
  return dp[len - 1]
}

maxProfit([7, 1, 5, 3, 6, 4, 2]) // 5
