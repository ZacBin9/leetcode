/**
 * @param {string} s
 * @return {string}
 */

// 中心扩展 还可优化 todo
// 优化一： 循环结束的判定 i < len - ((finalRight + 1 - finalLeft) >> 2) 减少无意义的循环
const longestPalindrome = function (s) {
  let finalLeft = 0
  let finalRight = 0
  let len = s.length
  const palindromic = (left, right) => {
    while ((left >= 0 || right < len) && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }
  for (let i = 0; i < len - Math.ceil((finalRight + 1 - finalLeft) / 2); i++) {
    const maxEven = palindromic(i, i)
    const maxOdd = palindromic(i, i + 1)
    const max = maxEven > maxOdd ? maxEven : maxOdd
    if (max > finalRight - finalLeft) {
      finalLeft = i - Math.floor((max - 1) / 2)
      finalRight = i + Math.floor(max / 2)
    }
  }

  return s.slice(finalLeft, finalRight + 1)
}

// 方法二 dp

var longestPalindrome = function (s) {
  let n = s.length
  let res = ''
  let dp = Array.from(new Array(n), () => new Array(n).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])
      console.log(i, j)
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }
  return res
}

// DP(动态规划)
// 测试用例："babad"

// 我们把这个二维数组进行转换再看看

// （这里就只转换一部分）
// [
// // [0,0], [0,1], [0,2]……
//     ↓      ↓     ↓
//   [ true, false, true, false, false ],
//   [ 0, true(a), false(ab), true(aba), false(abad) ],
//   [ 0, 0, true(b), false(ba), false(bad) ],
//   [ 0, 0, 0, true(a), false(ad) ],
//   [ 0, 0, 0, 0, true(d) ]
// ]

// 方法三 Manacher 占个坑 还不会

console.log(longestPalindrome('babad'))

// bababdg
// cbby

// dioweabddbafnowei
// 0123456789      16
