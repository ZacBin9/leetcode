const sum = (...args) => {
  const fn = sum.bind(null, ...args)
  fn.value = () => args.reduce((a, b) => a + b, 0)
  return fn
}

sum(1, 3)(6).value()

const sum = (...totals) => (...adds) =>
  adds?.length === 0 ? totals.reduce((a, b) => a + b) : sum(...totals, ...adds)

sum(1)(2)()
