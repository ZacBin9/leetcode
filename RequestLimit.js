const randomRequestSeed = () => {
  let reqIndex = 0
  return () => {
    return new Promise((resolve) => {
      const i = reqIndex++
      console.log(`req ${i} started`)
      setTimeout(() => {
        resolve(i)
      }, (Math.random() * 2 + 2) * 1000)
    })
  }
}

class RequestLimit {
  constructor(limit = 2) {
    this.limit = limit
    this.blockQueue = []
    this.currentRequestCount = 0
  }

  async req(request) {
    if (this.currentRequestCount >= this.limit) {
      await new Promise((resolve) => this.blockQueue.push(resolve))
    }

    return this.handle(request)
  }

  async handle(request) {
    this.currentRequestCount++
    try {
      return await request()
    } catch (err) {
      Promise.reject(err)
    } finally {
      this.currentRequestCount--
      if (this.blockQueue.length > 0) {
        this.blockQueue.shift()()
      }
    }
  }
}

const requestLimit = new RequestLimit()

const randomRequest = randomRequestSeed()

requestLimit.req(randomRequest)
requestLimit.req(randomRequest)
requestLimit.req(randomRequest)
setTimeout(() => {
  requestLimit.req(randomRequest)
  requestLimit.req(randomRequest)
  requestLimit.req(randomRequest)
  requestLimit.req(randomRequest)
  requestLimit.req(randomRequest)
  requestLimit.req(randomRequest)
}, 10000)

/*(() => {
  for (let i = 0; i < 10; i++) {
    requestLimit.req(() => fetch('https://www.baidu.com'))
  }
})()*/
