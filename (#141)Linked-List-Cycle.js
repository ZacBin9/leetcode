/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Set 额外空间 时间复杂度低 能找到相交点
// var hasCycle = function (head) {
//   const set = new Set()

//   while (head !== null) {
//     if (!set.has(head)) {
//       set.add(head)
//     } else {
//       return true
//     }
//     head = head.next
//   }

//   return false
// }

// 快慢指针 空间复杂度低 找不到相交点
var hasCycle = function (head) {
  let quick = head
  let slow = head

  while (quick !== null && quick.next !== null) {
    quick = quick.next.next
    slow = slow.next
    if (quick === slow) return true
  }

  return false
}
