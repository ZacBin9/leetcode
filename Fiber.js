class Fiber {
  constructor(instance) {
    this.instance = instance
    this.child = null
    this.sibling = null
    this.return = null
  }
}

function link(parent, elements) {
  if (elements === null) elements = []

  // reduceRight很关键 最后返回了first child
  parent.child = elements.reduceRight((previous, current) => {
    const node = new Node(current)
    node.return = parent
    node.sibling = previous
    return node
  }, null)

  return parent.child
}

const children = [{ name: 'b1' }, { name: 'b2' }]
const parent = new Node({ name: 'a1' })
const child = link(parent, children)

// the following two statements are true
console.log(child.instance.name === 'b1')
console.log(child.sibling.instance === children[1])

function doWork(node) {
  console.log(node.instance.name)
  const children = node.instance.render()
  return link(node, children)
}

// parent first, depth-first implementation

function walk(o) {
  let root = o
  let current = o

  while (true) {
    // perform work for a node, retrieve & link the children
    let child = doWork(current)

    // if there's a child, set it as the current active node
    if (child) {
      current = child
      continue
    }

    // if we've returned to the top, exit the function
    if (current === root) {
      return
    }

    // keep going up until we find the sibling
    while (!current.sibling) {
      // if we've returned to the top, exit the function
      if (!current.return || current.return === root) {
        return
      }

      // set the parent as the current active node
      current = current.return
    }

    // if found, set the sibling as the current active node
    current = current.sibling
  }
}

function workLoop(isYieldy) {
  if (!isYieldy) {
    // Flush work without yielding
    while (nextUnitOfWork !== null) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
  } else {
    // Flush asynchronous work until the deadline runs out of time.
    while (nextUnitOfWork !== null && !shouldYield()) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
  }
}
