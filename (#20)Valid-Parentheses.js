var isValid = function (s) {
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])

  let arr = []
  let i = 0

  while (i < s.length) {
    if ('({['.includes(s[i])) {
      arr.push(s[i])
    } else if (arr.pop() !== map.get(s[i])) {
      return false
    }
    i++
  }

  return arr.length === 0
}
