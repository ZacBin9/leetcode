const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const nextTick = (callback) => {
  const observer = new MutationObserver(callback)
  const textNode = document.createTextNode('1')

  observer.observe(textNode, { characterData: true })

  textNode.data = '2'
}

class Promise {
  status = PENDING
  value = undefined
  reason = undefined
  resolveCallbacks = []
  rejectCallbacks = []
  constructor(promiseExecutor) {
    const resolve = (value) => {
      nextTick(() => {
        if (this.status === PENDING) {
          this.status = FULFILLED
          this.value = value
          this.resolveCallbacks.forEach((resolveCallback) => resolveCallback())
        }
      })
    }

    const reject = (reason) => {
      nextTick(() => {
        if (this.status === PENDING) {
          this.status = REJECTED
          this.reason = reason
          this.rejectCallbacks.forEach((rejectCallback) => rejectCallback())
        }
      })
    }

    try {
      promiseExecutor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }

    return new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        nextTick(() => {
          resolve(onFulfilled(this.value))
        })
      }

      if (this.status === REJECTED) {
        nextTick(() => {
          reject(onRejected(this.value))
        })
      }

      if (this.status === PENDING) {
        this.resolveCallbacks.push(() => resolve(onFulfilled(this.value)))
        this.rejectCallbacks.push(() => reject(onRejected(this.reason)))
      }
    })
  }
}

const p1 = new Promise((resolve, reject) => {
  console.log('create a promise')
  resolve('成功了')
  setTimeout(() => {
    resolve('成功了')
  }, 1000)
  setTimeout(() => {
    reject('失败了')
  }, 1000)
})

console.log('after new promise')

const p2 = p1.then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.log(err)
  }
)

console.log(11111)
