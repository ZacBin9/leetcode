/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// JS
// var reverseString = function (s) {
//   s.reverse()
//   return s
// }

// 双指针
var reverseString = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
