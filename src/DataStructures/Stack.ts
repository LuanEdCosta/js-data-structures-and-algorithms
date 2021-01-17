/**
 * This is a generic and simple Stack class.
 */

class StackNode<T = any> {
  value: T
  next: StackNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class Stack<T = any> {
  private top: StackNode<T> | null
  private size: number

  constructor() {
    this.top = null
    this.size = 0
  }

  pop() {
    if (!this.top) return
    this.top = this.top.next
    this.size = this.size - 1
  }

  push(node: StackNode<T>) {
    const currentTop = this.top
    this.top = node
    this.top.next = currentTop
    this.size = this.size + 1
  }

  isEmpty(): boolean {
    return !this.top
  }

  peek(): T | null {
    return this.top ? this.top.value : null
  }

  getSize() {
    return this.size
  }
}

const stack = new Stack<string>()

console.log(stack.isEmpty())

stack.push(new StackNode('Luan'))
stack.push(new StackNode('John'))
stack.push(new StackNode('Frederic'))
stack.push(new StackNode('Elvis'))

console.log(stack.getSize())

stack.pop()

console.log(stack.peek())

console.log(JSON.stringify(stack))
