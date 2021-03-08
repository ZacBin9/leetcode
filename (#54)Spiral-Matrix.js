/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const column = matrix[0].length
  const row = matrix.length
  let top = 0
  let right = column - 1
  let bottom = row - 1
  let left = 0
  const result = []
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i])
    }
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right])
    }
    for (let i = right; i > left; i--) {
      result.push(matrix[bottom][i])
    }
    for (let i = bottom; i > top; i--) {
      result.push(matrix[i][left])
    }
    top++
    right--
    bottom--
    left++
  }

  // else if 避免重复添加
  if (top === bottom) {
    // 最后一行需要遍历
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
  } else if (left === right) {
    // 最后一列需要遍历
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][left])
    }
  }

  return result
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

// [1, 2, 3, 6, 9, 8, 7, 4, 5]
