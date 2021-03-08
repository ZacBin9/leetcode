/**
 * @param {number[]} nums
 * @return {number}
 */

// BF
var maxSubArray = function (nums) {
  let max = -Infinity
  let len = nums.length

  for (let i = 0; i < len; i++) {
    let curMax = 0
    if (nums[i + 1] && nums[i + 1] > 0 && nums[i] < 0) continue
    for (let j = i; j < len; j++) {
      curMax += nums[j]
      if (curMax > max) {
        max = curMax
      }
    }
  }
  return max
}

// Greedy
var maxSubArray = function (nums) {
  let max = -Infinity
  let currentSum = 0

  nums.forEach((num) => {
    currentSum += num

    if (currentSum > max) {
      max = currentSum
    }

    if (currentSum < 0) {
      currentSum = 0
    }
  })

  return max
}

// [-2,1,-3,4,-1,2,1,-5,4] -> 6
