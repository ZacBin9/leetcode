const store = {
  dispatch({ type, payload }) {
    console.log(`${type}: ${payload}`)
  },
}

const f1 = (next) => (action) => {
  console.log(1)
  next(action)
  console.log(2)
}

const f2 = (next) => (action) => {
  console.log(3)
  next(action)
  console.log(4)
}

const f3 = (next) => (action) => {
  console.log(5)
  next(action)
  console.log(6)
}

const compose = (...funcs) => {
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
/*
const compose = (...funcs) => arg => {
    return (function dispatch(i) {
        const fn = funcs[i]
        if (i === funcs.length) {
            return arg
        }

        return fn(dispatch(i + 1))
    })(0)

}
*/

compose(f1, f2, f3)(store.dispatch)({ type: 'add', payload: 123 })

// dispatch = compose(...chain)(store.dispatch)
// middleware就是对dispatch的enhance 一种特殊的enhancer
