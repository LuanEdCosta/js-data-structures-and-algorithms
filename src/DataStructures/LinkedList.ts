/**
 * This is an implementation of a Generic Linked List.
 *
 * PS: This generic linked list can be used only with primitive data types because it compares the values using "===".
 * To use with objects or other types you need to pass a comparator to the LinkedList class.
 * See more in: https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js
 */

class ListNode<T = any> {
  value: T
  next: ListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class LinkedList<T = any> {
  private head: ListNode<T> | null

  constructor() {
    this.head = null
  }

  appendNode(node: ListNode<T>) {
    if (!this.head) {
      this.head = node
      this.head.next = null
      return
    }

    let current = this.head
    while (current.next) current = current.next
    current.next = node
  }

  prependNode(node: ListNode<T>) {
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

  getNode(value: T): ListNode<T> | null {
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

const linedList = new LinkedList<number>()

linedList.appendNode(new ListNode(1))
linedList.appendNode(new ListNode(2))
linedList.appendNode(new ListNode(3))

linedList.prependNode(new ListNode(0))

console.log(linedList.removeNode(0))

console.log(linedList.getNode(0))
console.log(linedList.getNode(2))

console.log(JSON.stringify(linedList, null, 2))
