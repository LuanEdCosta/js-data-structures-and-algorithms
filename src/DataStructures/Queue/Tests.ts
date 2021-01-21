import { SimpleNode } from '../../Utils/index.js'
import { Queue } from './Queue.js'

export function runTests() {
  const queue = new Queue<number>()

  console.log(queue.getSize())
  console.log(queue.isEmpty())

  queue.add(new SimpleNode(1))
  queue.add(new SimpleNode(2))
  queue.add(new SimpleNode(3))
  queue.add(new SimpleNode(4))

  console.log(queue.getSize())
  console.log(queue.isEmpty())
  console.log(queue.peek())

  console.log(queue.remove())
  console.log(queue.remove())

  queue.add(new SimpleNode(5))
  queue.add(new SimpleNode(6))

  console.log(JSON.stringify(queue))
}
