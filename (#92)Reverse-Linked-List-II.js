var reverseBetween = function (head, left, right) {
  const preHead = new ListNode(-1)
  preHead.next = head
  let temp = preHead
  let step = 0
  while (step < left - 1) {
    temp = temp.next
    step++
  }
  let pre = null
  let cur = temp.next
  while (step < right) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
    step++
  }
  temp.next.next = cur
  temp.next = pre

  return preHead.next
}
