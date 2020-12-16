/**
 * @param {string[]} strs
 * @return {string}
 */

// 方法一 暴力法
// var longestCommonPrefix = function (strs) {
//   let commonPrefix = ''
//   let [ref, ...rest] = strs
//   if (!ref) {
//     return ''
//   }

//   let refArr = ref.split('')
//   for (let i = 0, len = refArr.length; i < len; i++) {
//     if (rest.every((str) => str.startsWith(commonPrefix + refArr[i]))) {
//       commonPrefix += refArr[i]
//     } else {
//       break
//     }
//   }

//   return commonPrefix
// }

// 方法二 找出最大/最小字符串 问题缩小为找它们的公共前缀
var longestCommonPrefix = function (strs) {
  let max = strs[0]
  let min = strs[0]
  for (let i = 1, len = strs.length; i < len; i++) {
    max = max > strs[i] ? max : strs[i] // 也可以用localeCompare() 但是内存消耗好像有点大
    min = min < strs[i] ? min : strs[i]
  }
  if (!max || !min) {
    return ''
  }
  let commonPrefix = ''
  let j = 0
  while (max[j] === min[j] && max[j] && min[j]) {
    commonPrefix += max[j++]
  }
  return commonPrefix
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flat', 'flight']))
// console.log(longestCommonPrefix(['a']))
console.log(longestCommonPrefix(['aaa', 'aa', 'aaa']))
