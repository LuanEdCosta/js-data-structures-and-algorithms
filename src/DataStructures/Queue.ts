/**
 * This is a generic and simple Queue class.
 */

class QueueNode<T = any> {
  value: T
  next: QueueNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class Queue<T = any> {
  private head: QueueNode<T> | null
  private tail: QueueNode<T> | null
  private size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  peek(): T | null {
    return this.head ? this.head.value : null
  }

  isEmpty() {
    return !this.head
  }

  getSize() {
    return this.size
  }

  add(node: QueueNode<T>) {
    if (this.tail) {
      this.tail.next = node
    }

    this.tail = node
    if (!this.head) this.head = node

    this.size = this.size + 1
  }

  remove(): T | null {
    if (!this.head) return null

    const headValue = this.head.value
    this.head = this.head.next
    if (!this.head) this.tail = null
    this.size = this.size - 1

    return headValue
  }
}

const queue = new Queue<number>()

console.log(queue.getSize())
console.log(queue.isEmpty())

queue.add(new QueueNode(1))
queue.add(new QueueNode(2))
queue.add(new QueueNode(3))
queue.add(new QueueNode(4))

console.log(queue.getSize())
console.log(queue.isEmpty())
console.log(queue.peek())

console.log(queue.remove())
console.log(queue.remove())

queue.add(new QueueNode(5))
queue.add(new QueueNode(6))

console.log(JSON.stringify(queue))
