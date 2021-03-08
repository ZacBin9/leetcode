Promise.all = function (promises) {
  //在Promise类上添加一个all方法，接受一个传进来的promise数组
  return new Promise((resolve, reject) => {
    //返回一个新的Promise
    const arr = [] //定义一个空数组存放结果
    let count = 0
    function handleData(index, data) {
      //处理数据函数
      arr[index] = data
      if (count++ === promises.length) {
        //当i等于传递的数组的长度时
        resolve(arr) //执行resolve,并将结果放入
      }
    }
    for (let i = 0; i < promises.length; i++) {
      //循环遍历数组
      promises[i].then((data) => {
        handleData(i, data) //将结果和索引传入handleData函数
      }, reject)
    }
  })
}
