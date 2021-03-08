function newNew(fn, ...args) {
  const o = Object.create(fn.prototype)
  const mayBeReturn = fn.apply(o, args)
  return mayBeReturn instanceof Object ? mayBeReturn : o
}
