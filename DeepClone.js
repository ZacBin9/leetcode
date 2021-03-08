const obj = { a: { b: [1, 2, 3] } }

obj.b = obj

const deepClone = function (target, targetSet = new Set()) {
  if (targetSet.has(target)) return target

  if (typeof target === 'object' && target !== null) {
    targetSet.add(target)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], targetSet)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

deepClone(obj)
