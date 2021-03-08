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
 * @return {number}
 */
var isSymmetric = function (root) {
  function traverse(left, right) {
    if (left === null && right === null) return true

    if (left && right) {
      return (
        left.val === right.val &&
        traverse(left.left, right.right) &&
        traverse(left.right, right.left)
      )
    }

    return false
  }

  if (root === null) return true

  return traverse(root.left, root.right)
}
