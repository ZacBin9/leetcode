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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = []
  function traverse(node, depth = 0) {
    if (node === null) return
    if (!result[depth]) {
      result[depth] = node.val
    }
    traverse(node.right, depth + 1)
    traverse(node.left, depth + 1)
  }

  traverse(root)

  return result
}
