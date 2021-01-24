export default class SimpleNode<T = any> {
  value: T
  next: SimpleNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
