// Vue 2:
const data = { price: 5, quantity: 2 }
let subscriber = null

class Dep {
  constructor() {
    this.subscribers = new Set()
  }

  track() {
    subscriber && this.subscribers.add(subscriber)
  }

  trigger() {
    this.subscribers.forEach((subscriber) => subscriber())
  }
}

Object.entries(data).forEach(([key, initialValue]) => {
  const dep = new Dep()

  Object.defineProperty(data, key, {
    get() {
      dep.track()
      return initialValue
    },

    set(value) {
      initialValue = value
      dep.trigger()
    },
  })
})

const watcher = (func) => {
  subscriber = func
  subscriber()
  subscriber = null
}

watcher(() => {
  data.total = data.price * data.quantity
})

// Vue 3 proxy

//个组件实例都有一个相应的侦听器实例，该实例将在组件渲染期间把“触碰”的所有 property 记录为依赖项。之后，当触发依赖项的 setter 时，它会通知侦听器，从而使得组件重新渲染。
//将对象作为数据传递给组件实例时，Vue 会将其转换为 proxy。这个 proxy 使 Vue 能够在 property 被访问或修改时执行依赖项跟踪和更改通知。每个 property 都被视为一个依赖项。
//首次渲染后，组件将跟踪一组依赖列表——即在渲染过程中被访问的 property。反过来，组件就成为了其每个 property 的订阅者。当 proxy 拦截到 set 操作时，该 property 将通知其所有订阅的组件重新渲染。
