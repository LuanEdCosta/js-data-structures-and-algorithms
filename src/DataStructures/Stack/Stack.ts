/**
 * This is a generic and simple Stack class.
 */

import { SimpleNode } from '../../Utils/index.js'

export class Stack<T = any> {
  private top: SimpleNode<T> | null
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

  push(node: SimpleNode<T>) {
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
