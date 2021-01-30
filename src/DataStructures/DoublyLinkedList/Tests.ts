import { DoubleLinkNode } from '../../Utils/index.js'
import { DoublyLinkedList } from './DoublyLinkedList.js'

export function runTests() {
  const doublyLinkedList = new DoublyLinkedList<number>()

  doublyLinkedList.append(1)
  doublyLinkedList.append(2)
  doublyLinkedList.append(3)

  doublyLinkedList.prepend(0)

  console.log(doublyLinkedList.delete(0))

  console.log(doublyLinkedList.get(0))
  console.log(doublyLinkedList.get(2))
  console.log(doublyLinkedList.find((data) => data === 3))

  console.log(doublyLinkedList)
}
