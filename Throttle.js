function throttle(fn, limit) {
  let inThrottle = false
  return function () {
    if (!inThrottle) {
      inThrottle = true
      fn.apply(this, arguments)
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}
function sayHi() {
  console.log('Hi')
}

const fn = throttle(sayHi, 1000)

fn()
setTimeout(fn, 800)
setTimeout(fn, 1500)
setTimeout(fn, 1600)
setTimeout(fn, 2400)
