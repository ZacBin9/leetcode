var permuteUnique = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)

  function traverse(path = [], set = new Set()) {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }

    for (let i = 0, len = nums.length; i < len; i++) {
      const num = nums[i]

      if (i > 0 && nums[i] === nums[i - 1] && !set.has(i - 1)) continue

      if (!set.has(i)) {
        set.add(i)
        path.push(num)

        traverse(path, set)

        set.delete(i)
        path.pop()
      }
    }
  }

  traverse()

  return result
}
