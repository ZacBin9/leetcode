/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false
  // no left no right 才到一条路径的结束
  let rest = targetSum - root.val
  if (root.left === null && root.right === null) {
    return rest === 0
  }

  return hasPathSum(root.left, rest) || hasPathSum(root.right, rest)
}
