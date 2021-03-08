const memoizationAdd = () => {
  const cache = new Map()
  return (...args) => {
    const key = args.toString()
    if (cache.has(key)) {
      const sum = cache.get(key)
      console.log('cached output:' + sum)
      return sum
    } else {
      const sum = args.reduce((a, b) => a + b, 0)
      cache.set(key, sum)
      console.log('output:' + sum)
      return sum
    }
  }
}

const add = memoizationAdd()

add(2, 3, 5)
add(2, 4, 6)
add(2, 3, 5)
