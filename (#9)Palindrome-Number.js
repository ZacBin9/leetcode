/**
 * @param {number} x
 * @return {boolean}
 */

// 方法一 反转字符串
// var isPalindrome = function (x) {
//   return x >= 0 && x === Number([...String(x)].reverse().join(''))
// }

// 方法二 联动#7 不用转化字符串 需要优化内存
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  } else if (x < 10) {
    return true
  }
  let n = 10 ** ~~Math.log10(x)
  while (n > 1) {
    if (~~(x / n) !== x % 10) {
      return false
    }
    x = ~~((x % n) / 10)
    n /= 100
  }
  return true
}

isPalindrome(123321)
// let n = 10 ** Math.floor(Math.log10(x));
