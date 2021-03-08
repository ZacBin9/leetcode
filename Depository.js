class Depository {
  constructor(options) {
    this.product = options
  }
  transferIn(cargo, product = this.product) {
    for (let key in cargo) {
      let value = cargo[key]
      const isObject =
        Object.prototype.toString.call(value) === '[object Object]'
      if (!product.hasOwnProperty(key)) {
        product[key] = value
      } else {
        if (isObject) {
          this.transferIn(value, product[key])
        } else {
          product[key] += value
        }
      }
    }
  }
  transferOut(cargo, product = this.product) {
    for (let key in cargo) {
      let value = cargo[key]
      const isObject =
        Object.prototype.toString.call(value) === '[object Object]'
      if (!product.hasOwnProperty(key)) {
        throw Error(`product ${key} doesn't exist`)
      } else {
        if (isObject) {
          this.transferOut(value, product[key])
        } else {
          if (value > product[key]) {
            throw Error(`product ${key} out of stack`)
          }
          product[key] -= value
        }
      }
    }
  }
}
const depository = new Depository({
  productA: {
    a: 1,
    b: 2,
    c: {
      c1: 1,
      c2: 3,
      c4: { c11: 1 },
    },
  },
  productB: {
    e: 6,
  },
})
depository.transferIn({
  productA: { a: 4, b: 5, c: { c1: 2, c3: 6, c4: { c11: 9 } } },
})
depository.transferOut({
  productA: { a: 5 },
})
