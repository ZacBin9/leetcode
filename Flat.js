Array.prototype.flatN = function () {
  return [].concat(
    ...this.map((child) => (Array.isArray(child) ? child.flatN() : child))
  )
}
// 用map只能这么做 不能用[...] map不能增加数量
// 注意concat会浅打平数组
// OR

function flat(arr) {
  return arr.reduce((result, cur) => {
    if (Array.isArray(cur)) {
      result.push(...flat(cur))
    } else {
      result.push(cur)
    }
    return result
  }, [])
}
