/**
 * @param {number} x
 * @return {number}
 */

// 方法一 JavaScript way 暴力反转
// var reverse = function (x) {
//   const border = 2 ** 31
//   const max = border - 1
//   const min = -border
//   const result =
//     (x > 0 ? 1 : -1) * parseInt(String(x).split('').reverse().join(''))
//   return result > max || result < min ? 0 : result
// }

// 方法二 位运算 无需对符号进行额外的逻辑， x | 0 将x转换成32位有符号整数。超过32位的整数 ｜ 0 !=== 它本身
var reverse = function (x) {
  let result = 0
  while (x !== 0) {
    result = result * 10 + (x % 10)
    x = (x / 10) | 0
  }
  return (result | 0) === result ? result : 0
}

console.log((959435438976).toString(2))
console.log('         ' + (1657731968).toString(2))

reverse(-123)
