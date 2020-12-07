const util = require('util')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 */
// 方法一  计算和 -> 转换为listNode (注意BigInt处理大数字用例)
// var addTwoNumbers = function (l1, l2) {
//   const listNodeToString = (node) => {
//     return (node.next ? listNodeToString(node.next) : '') + node.val
//   }
//   return [
//     ...(BigInt(listNodeToString(l1)) + BigInt(listNodeToString(l2))).toString(),
//   ].reduce((pre, cur) => {
//     return {
//       val: cur,
//       next: pre,
//     }
//   }, null)
// }

// 方法二: （更加符合正常链表的做法）按位相加 记录进位+1 注意需要tmp起类似递归的角色
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode('head')
  let tmp = head
  let add = 0
  let sum = 0
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
    tmp.next = new ListNode(sum % 10)
    tmp = tmp.next
    add = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  add && (tmp.next = new ListNode(add))
  return head.next
}
console.log(
  util.inspect(
    addTwoNumbers(
      {
        val: 2,
        next: { val: 4, next: { val: 3, next: null } },
      },
      { val: 5, next: { val: 6, next: { val: 4, next: null } } }
    ),
    { depth: null }
  )
)
