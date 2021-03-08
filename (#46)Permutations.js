// 类似于DFS set栈

var permute = function (nums) {
  const result = []

  function traverse(path = [], set = new Set()) {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }

    for (const num of nums) {
      if (!set.has(num)) {
        set.add(num)
        path.push(num)

        traverse(path, set)

        set.delete(num)
        path.pop()
      }
    }
  }

  traverse()

  return result
}
