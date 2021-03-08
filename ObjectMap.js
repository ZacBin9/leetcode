Object.prototype.map = function (iterater) {
  const result = {}
  for (const key of Object.keys(this)) {
    result[key] = iterater.call(this, this[key], key)
  }
  return result
}

const obj = { a: 1, b: 11, c: 111 }

obj.map((value) => {
  return value * 2
})
