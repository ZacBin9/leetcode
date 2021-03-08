/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iteration
// head -> head.next transfer to head -> prev
var reverseList = function (head) {
  let prev = null
  while (head) {
    const next = head.next
    head.next = prev
    prev = head
    head = next
    // while内容可简化为[head.next, prev, head] = [prev, head, head.next]
  }
  return prev
}

// Recursion
var reverseList = function (head) {
  if (head === null || head.next === null) return head

  const cur = reverseList(head.next)

  head.next.next = head
  head.next = null

  return cur
}
