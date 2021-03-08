/**
 * @param {number} n
 * @return {number}
 */
// 比暴力稍微优化点的 Math.sqrt 约束条件
var countPrimes = function (n) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return num > 1
  }
  let count = 0
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
}

// 埃氏筛
var countPrimes = function (n) {
  const primes = new Array(n).fill(true)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      count++
      for (let j = i * 2; j < n; j += i) {
        primes[j] = false
      }
    }
  }
  return count
}

console.log(countPrimes(10)) // 4
