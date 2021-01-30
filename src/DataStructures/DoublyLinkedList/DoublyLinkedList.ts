import { DoubleLinkNode } from '../../Utils/index.js'

export class DoublyLinkedList<T = any> {
  private head: DoubleLinkNode<T> | null
  private tail: DoubleLinkNode<T> | null

  constructor() {
    this.head = null
    this.tail = null
  }

  append(data: T) {
    const node = new DoubleLinkNode(data)

    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    if (this.tail) {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
  }

  prepend(data: T) {
    const node = new DoubleLinkNode(data)

    if (this.head) {
      this.head.previous = node
      node.next = this.head
    }

    this.head = node

    if (!this.tail) this.tail = node
  }

  delete(data: T): T | null {
    let deletedData = null
    let current = this.head

    while (current) {
      deletedData = current.data

      if (current.data === data) {
        if (current === this.head) {
          // Deleting the head node
          this.head = this.head.next
          if (this.head) this.head.previous = null
          if (current === this.tail) this.tail = null
          return deletedData
        } else if (current === this.tail) {
          // Deleting the tail node
          this.tail = this.tail.previous
          if (this.tail) this.tail.next = null
          return deletedData
        } else {
          // Deleting a middle node
          const previousNode = current.previous
          const nextNode = current.next

          if (previousNode && nextNode) {
            previousNode.next = nextNode
            nextNode.previous = previousNode
          }

          return deletedData
        }
      }

      current = current.next
    }

    return deletedData
  }

  get(data: T): T | null {
    let current = this.head

    while (current) {
      if (current.data === data) return current.data
      current = current.next
    }

    return null
  }

  find(callback: (data: T) => boolean): T | null {
    let current = this.head

    while (current) {
      if (callback(current.data)) return current.data
      current = current.next
    }

    return null
  }

  toArray(): T[] {
    const dataArray: T[] = []
    let current = this.head

    while (current) {
      dataArray.push(current.data)
      current = current.next
    }

    return dataArray
  }
}
