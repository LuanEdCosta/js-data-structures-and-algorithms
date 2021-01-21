import { SimpleNode } from '../../Utils/index.js'
import { LinkedList } from './LinkedList.js'

export function runTests() {
  const linedList = new LinkedList<number>()

  linedList.appendNode(new SimpleNode(1))
  linedList.appendNode(new SimpleNode(2))
  linedList.appendNode(new SimpleNode(3))

  linedList.prependNode(new SimpleNode(0))

  console.log(linedList.removeNode(0))

  console.log(linedList.getNode(0))
  console.log(linedList.getNode(2))

  console.log(JSON.stringify(linedList))
}
