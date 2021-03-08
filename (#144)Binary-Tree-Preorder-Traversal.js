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

// Recursion
// var preorderTraversal = function (root) {
// const result = []
// function traverse(node) {
//   if (node === null) return
//   result.push(node.val)
//   traverse(node.left)
//   traverse(node.right)
// }

// traverse(root)

// return result
// }

// Iteration
var preorderTraversal = function (root) {
  if (!root) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const curNode = stack.pop()

    result.push(curNode.val)

    curNode.right && stack.push(curNode.right)
    curNode.left && stack.push(curNode.left)
  }

  return result
}
