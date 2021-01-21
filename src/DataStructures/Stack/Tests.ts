import { SimpleNode } from '../../Utils/index.js'
import { Stack } from './Stack.js'

export function runTests() {
  const stack = new Stack<string>()

  console.log(stack.isEmpty())

  stack.push(new SimpleNode('Luan'))
  stack.push(new SimpleNode('John'))
  stack.push(new SimpleNode('Frederic'))
  stack.push(new SimpleNode('Elvis'))

  console.log(stack.getSize())

  stack.pop()

  console.log(stack.peek())

  console.log(JSON.stringify(stack))
}
