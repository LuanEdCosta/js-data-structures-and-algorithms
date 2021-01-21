/**
 * This is a generic and simple Queue class.
 */

import { SimpleNode } from '../../Utils/index.js'

export class Queue<T = any> {
  private head: SimpleNode<T> | null
  private tail: SimpleNode<T> | null
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

  add(node: SimpleNode<T>) {
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
