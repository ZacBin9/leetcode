var removeNthFromEnd = function (head, n) {
  const preHead = new ListNode(-1)
  preHead.next = head
  let p1 = preHead
  let p2 = preHead
  let step = 0
  while (p1.next !== null) {
    p1 = p1.next
    if (++step > n) {
      p2 = p2.next
    }
  }
  p2.next = p2.next.next

  return preHead.next
}
