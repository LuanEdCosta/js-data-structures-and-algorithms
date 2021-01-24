import { SimpleNode } from '../../Utils/index.js'
import { LinkedList } from './LinkedList.js'

export function runTests() {
  const linkedList = new LinkedList<number>()

  linkedList.append(new SimpleNode(1))
  linkedList.append(new SimpleNode(2))
  linkedList.append(new SimpleNode(3))

  linkedList.prepend(new SimpleNode(0))

  console.log(linkedList.delete(0))

  console.log(linkedList.get(0))
  console.log(linkedList.get(2))
  console.log(linkedList.find((data) => data === 3))

  console.log(JSON.stringify(linkedList))
}
