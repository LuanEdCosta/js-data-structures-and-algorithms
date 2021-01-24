/**
 * This is an implementation of a Generic Linked List.
 *
 * PS: This generic linked list can be used only with primitive data types because it compares the datas using "===".
 * To use with objects or other types you need to pass a comparator to the LinkedList class.
 * See more in: https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js
 */

import { SimpleNode } from '../../Utils/index.js'

export class LinkedList<T = any> {
  private head: SimpleNode<T> | null

  constructor() {
    this.head = null
  }

  append(node: SimpleNode<T>) {
    if (!this.head) {
      this.head = node
      this.head.next = null
      return
    }

    let current = this.head
    while (current.next) current = current.next
    current.next = node
  }

  prepend(node: SimpleNode<T>) {
    if (!this.head) {
      this.head = node
      this.head.next = null
    }

    const currentHead = this.head
    this.head = node
    this.head.next = currentHead
  }

  delete(data: T): T | null {
    if (!this.head) return null

    if (this.head.data === data) {
      const headData = this.head.data
      this.head = this.head.next
      return headData
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        const currentData = current.next.data
        current.next = current.next.next
        return currentData
      }

      current = current.next
    }

    return null
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
