var threeSum = function (nums) {
  const result = []
  const len = nums.length
  nums.sort((a, b) => a - b) // 先排序

  for (let i = 0; i < len - 2; i++) {
    const currentNum = nums[i]

    if (currentNum > 0) break // 跳过大于0的

    if (i > 0 && currentNum === nums[i - 1]) continue // 跳过第一个数字连续相同的

    let left = i + 1
    let right = len - 1

    while (left < right) {
      const leftNum = nums[left]
      const rightNum = nums[right]
      const sum = currentNum + leftNum + rightNum

      if (sum === 0) {
        if (
          right - left <= 2 ||
          nums[left + 1] !== leftNum ||
          nums[right - 1] !== rightNum
        ) {
          result.push([currentNum, leftNum, rightNum]) // 去重 -2 0 0 2 2
        }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}
