// 普通
function bubbleSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

// 优化
function bubbleSort1(arr) {
  let i = arr.length - 1

  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    i = pos
  }
  return arr
}
