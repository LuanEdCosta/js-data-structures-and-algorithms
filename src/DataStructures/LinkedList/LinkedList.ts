/**
 * This is an implementation of a Generic Linked List.
 *
 * PS: This generic linked list can be used only with primitive data types because it compares the values using "===".
 * To use with objects or other types you need to pass a comparator to the LinkedList class.
 * See more in: https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js
 */

import { SimpleNode } from '../../Utils/index.js'

export class LinkedList<T = any> {
  private head: SimpleNode<T> | null

  constructor() {
    this.head = null
  }

  appendNode(node: SimpleNode<T>) {
    if (!this.head) {
      this.head = node
      this.head.next = null
      return
    }

    let current = this.head
    while (current.next) current = current.next
    current.next = node
  }

  prependNode(node: SimpleNode<T>) {
    if (!this.head) {
      this.head = node
      this.head.next = null
    }

    const currentHead = this.head
    this.head = node
    this.head.next = currentHead
  }

  removeNode(value: T): boolean {
    if (!this.head) return false

    if (this.head.value === value) {
      this.head = this.head.next
      return true
    }

    let current = this.head
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next
        return true
      }

      current = current.next
    }

    return false
  }

  getNode(value: T): SimpleNode<T> | null {
    if (!this.head) return null

    let current = this.head
    while (current.next) {
      if (current.value === value) {
        return current
      }

      current = current.next
    }

    return null
  }
}
