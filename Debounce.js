function debounce(fn, delay) {
  let timer = null // 创建一个标记用来存放定时器的返回值
  return function () {
    timer && clearTimeout(timer) // 每当用户输入的时候把前一个 setTimeout clear 掉
    timer = setTimeout(() => {
      // 注意这里是箭头函数 this指向外面的function
      // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments)
    }, delay)
  }
}
function sayHi() {
  console.log(this)
  console.log('Hi')
}

const fn = debounce(sayHi, 1000)

fn()
setTimeout(fn, 800)
setTimeout(fn, 1500)
setTimeout(fn, 2400)
setTimeout(fn, 3200)
