function curry(fn) {
  const paramCount = fn.length
  if (paramCount === 0) return fn()

  const curried = function (depth, args) {
    return (arg) => {
      const params = [...args, arg]
      if (depth - 1 === 0) return fn(...params)

      return curried(depth - 1, params)
    }
  }

  return curried(paramCount, [])
}
