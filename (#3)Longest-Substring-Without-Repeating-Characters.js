/**
 * @param {string} s
 * @return {number}
 */

// sliding window
// 方法一 维持一个队列字符串str 时间快
// var lengthOfLongestSubstring = function (s) {
//   let len = 0
//   let str = ''
//   s &&
//     s.split('').forEach((ele) => {
//       const i = str.indexOf(ele)
//       if (i > -1) {
//         len = str.length > len ? str.length : len
//         str = str.slice(i + 1)
//       }
//       str += ele
//     })
//   return str.length > len ? str.length : len
// }

// 双指针 原理类似 两个指针分别保存方法一arr的左右边界 内存消耗小
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let strMap = new Map()
  for (let l = 0, r = 0, len = s.length; r < len; r++) {
    if (strMap.has(s[r])) {
      // 重复 就把l指针挪到重复+1
      l = Math.max(strMap.get(s[r]) + 1, l)
    }
    strMap.set(s[r], r)
    max = Math.max(max, r + 1 - l)
  }
  return max
}

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('abba'))
console.log(lengthOfLongestSubstring('dvdf'))
