/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// Set 空间复杂度高
var getIntersectionNode = function (headA, headB) {
  const set = new Set()
  while (headA !== null || headB !== null) {
    if (headA) {
      if (!set.has(headA)) {
        set.add(headA)
      } else {
        return headA
      }
      headA = headA.next
    }

    if (headB) {
      if (!set.has(headB)) {
        set.add(headB)
      } else {
        return headB
      }
      headB = headB.next
    }
  }

  return null
}

// 双指针 注意不需要判断尾部 因为即使不相交 最后也会null === null
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null

  let pA = headA
  let pB = headB

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }

  return pA
}
