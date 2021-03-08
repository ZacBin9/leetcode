/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力双循环
// var maxArea = function (height) {
//   const len = height.length
//   let max = 0
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       const left = height[i]
//       const right = height[j]
//       const area = Math.min(left, right) * (j - i)
//       max = max > area ? max : area
//     }
//   }
//   return max
// }

// 双指针
var maxArea = function (height) {
  let maxArea = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const leftVal = height[left]
    const rightVal = height[right]

    let area = Math.min(leftVal, rightVal) * (right - left)
    maxArea = Math.max(maxArea, area)
    leftVal > rightVal ? right-- : left++
  }

  return maxArea
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log(maxArea([4, 3, 2, 1, 4]))
// console.log(maxArea([1, 2, 1]))
