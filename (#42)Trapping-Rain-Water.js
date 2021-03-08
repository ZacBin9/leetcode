// BF
var trap = function (height) {
  const len = height.length
  let sum = 0

  for (let i = 1; i < len - 1; i++) {
    const currentHeight = height[i]
    let maxLeft = 0
    let maxRight = 0

    for (let left = i - 1; left >= 0; left--) {
      const currentLeft = height[left]
      if (currentLeft > maxLeft) {
        maxLeft = currentLeft
      }
    }

    for (let right = i + 1; right < len; right++) {
      const currentRight = height[right]
      if (currentRight > maxRight) {
        maxRight = currentRight
      }
    }

    const minOne = Math.min(maxLeft, maxRight)

    if (minOne > currentHeight) {
      sum += minOne - currentHeight
    }
  }

  return sum
}

// DP
var trap = function (height) {
  const len = height.length
  let sum = 0
  let maxLeftList = []
  let maxRightList = []

  for (let i = 1; i < len - 1; i++) {
    maxLeftList[i] = Math.max(maxLeftList[i - 1] ?? 0, height[i - 1])
  }

  for (let i = len - 2; i >= 0; i--) {
    maxRightList[i] = Math.max(maxRightList[i + 1] ?? 0, height[i + 1])
  }

  for (let i = 1; i < len - 1; i++) {
    const currentHeight = height[i]

    const minOne = Math.min(maxLeftList[i], maxRightList[i])

    if (minOne > currentHeight) {
      sum += minOne - currentHeight
    }
  }

  return sum
}

// DP 双指针 空间优化
var trap = function (height) {
  const len = height.length
  let sum = 0
  let maxLeft = 0
  let maxRight = 0
  let left = 1
  let right = len - 2

  while (left <= right) {
    const leftVal = height[left - 1]
    const rightVal = height[right + 1]
    if (leftVal < rightVal) {
      const currentVal = height[left]
      maxLeft = Math.max(maxLeft, leftVal)
      if (maxLeft > currentVal) {
        sum += maxLeft - currentVal
      }
      left++
    } else {
      const currentVal = height[right]
      maxRight = Math.max(maxRight, rightVal)
      if (maxRight > currentVal) {
        sum += maxRight - currentVal
      }
      right--
    }
  }

  return sum
}
